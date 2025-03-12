import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/TextArea";

export function TextareaWithLabel({ label, placeholder, id, ...props }) {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message" className="mb-2">
        {label}
      </Label>
      <Textarea placeholder={placeholder} id={id} {...props} />
    </div>
  );
}
