
import { FC } from "react";
import { cn } from "@/lib/utils";
import { Image } from "lucide-react";

type ImagePlaceholderProps = {
  title: string;
  description: string;
  className?: string;
};

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-center h-full min-h-[200px]",
        className
      )}
    >
      <Image className="h-16 w-16 text-muted-foreground mb-4" />
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default ImagePlaceholder;
