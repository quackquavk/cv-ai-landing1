import * as React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export function DatePicker({
  label,
  date,
  setDate,
  id,
  required,
  className,
  hidden,
}) {
  return (
    <div className={`${className} w-full bg-black`}>
      <label
        htmlFor={id}
        className={`block text-sm font-medium text-gray-700 mb-2  ${hidden} ${!label && "hidden"}`}
      >
        {label}
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            id={id}
            className={cn(
              "w-full m-0 justify-start text-left hover:bg-black/80 hover:text-white font-normal py-6 text-white  bg-black border border-white/20  rounded-lg px-4 transition-colors",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>{label}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            required={required}
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
