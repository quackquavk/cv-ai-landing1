import * as React from "react";

import { cn } from "@/lib/utils";

const InputLabel = React.forwardRef(
  ({ className, label, id, name, infoText, type = "text", ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="flex space-x-2">
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {label}
          </label>
        </div>
        <input
          type={type}
          id={id}
          name={name}
          className={cn(
            "flex h-10 w-full rounded-md border border-slate-200 bg-black px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-500 dark:focus-visible:ring-slate-300",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

InputLabel.displayName = "InputLabel";

export default InputLabel;
