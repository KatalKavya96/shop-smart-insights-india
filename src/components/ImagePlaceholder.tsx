
import { FC } from "react";
import { cn } from "@/lib/utils";
import { Image as ImageIcon, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

type ImagePlaceholderProps = {
  title: string;
  description: string;
  className?: string;
  imageSrc?: string;
  downloadable?: boolean;
  downloadExtension?: string;
};

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({
  title,
  description,
  className,
  imageSrc,
  downloadable = false,
  downloadExtension = "png",
}) => {
  return (
    <div
      className={cn(
        "border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-center h-full min-h-[200px]",
        className
      )}
    >
      {imageSrc ? (
        <div className="w-full flex flex-col items-center">
          <img 
            src={imageSrc} 
            alt={title}
            className="max-w-full max-h-[300px] object-contain mb-4" 
          />
          <h3 className="font-medium text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          {downloadable && (
            <Button variant="outline" size="sm" asChild>
              <a href={imageSrc} download={`${title.replace(/\s+/g, '-').toLowerCase()}.${downloadExtension}`} className="flex items-center gap-2">
                <Download size={16} />
                Download {title}
              </a>
            </Button>
          )}
        </div>
      ) : (
        <>
          <ImageIcon className="h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="font-medium text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </>
      )}
    </div>
  );
};

export default ImagePlaceholder;
