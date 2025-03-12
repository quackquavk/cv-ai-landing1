import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '@/hooks/use-toast';

export default function AuthCallback() {
  const navigate = useNavigate();
  const { checkAuth } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const error = params.get('error');


        if (token) {
          localStorage.setItem('auth_token', token);

          // Update auth state
          await checkAuth();

          toast({
            title: "Success",
            description: "Successfully signed in!",
          });
          navigate('/', { replace: true });
        } else if (error) {
          console.error('Authentication error:', error);
          toast({
            title: "Error",
            description: error || "Authentication failed",
            variant: "destructive",
          });
          navigate('/', { replace: true });
        } else {
          console.error('No token or error in URL');
          toast({
            title: "Error",
            description: "Authentication response missing",
            variant: "destructive",
          });
          navigate('/', { replace: true });
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        toast({
          title: "Error",
          description: "Authentication process failed",
          variant: "destructive",
        });
        navigate('/', { replace: true });
      }
    };

    handleAuth();
  }, [navigate, checkAuth, toast]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Processing authentication...</h2>
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-[#ff6600] mx-auto"></div>
      </div>
    </div>
  );
} 