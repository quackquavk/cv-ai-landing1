const BASE_URL = process.env.NEXT_PUBLIC_SCRUM_API_URL;
const TIMEOUT = 10000;

class ApiError extends Error {
  constructor(public status: number, public data: unknown) {
    super(`API Error: ${status}`);
    this.name = 'ApiError';
  }
}

const getAuthToken = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('auth_token');
};

const apiFetch = async <T = unknown>(
  path: string,
  options: RequestInit = {}
): Promise<T> => {
  const token = getAuthToken();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'x-service': 'cvai',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      ...options,
      headers,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.status === 401) {
      localStorage.removeItem('auth_token');
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
    }

    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(response.status, data);
    }

    return data as T;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new ApiError(408, { message: 'Request timeout' });
    }
    throw error;
  }
};

export const scrumAxios = {
  get: <T = unknown>(path: string, options?: RequestInit) =>
    apiFetch<T>(path, { ...options, method: 'GET' }),

  post: <T = unknown>(path: string, body?: unknown, options?: RequestInit) =>
    apiFetch<T>(path, { ...options, method: 'POST', body: JSON.stringify(body) }),

  put: <T = unknown>(path: string, body?: unknown, options?: RequestInit) =>
    apiFetch<T>(path, { ...options, method: 'PUT', body: JSON.stringify(body) }),

  patch: <T = unknown>(path: string, body?: unknown, options?: RequestInit) =>
    apiFetch<T>(path, { ...options, method: 'PATCH', body: JSON.stringify(body) }),

  delete: <T = unknown>(path: string, options?: RequestInit) =>
    apiFetch<T>(path, { ...options, method: 'DELETE' }),
};

export { ApiError };
