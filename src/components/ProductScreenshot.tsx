import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ProductScreenshotProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  eager?: boolean;
};

const ProductScreenshot = ({
  src,
  alt,
  className,
  imageClassName,
  eager = false,
}: ProductScreenshotProps) => (
  <Dialog>
    <DialogTrigger asChild>
      <button
        type="button"
        className={cn(
          "product-shot group relative block w-full overflow-hidden rounded-[1.35rem] border border-primary/15 bg-white text-left shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4",
          className,
        )}
        aria-label={`Open larger view: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className={cn("block h-auto w-full", imageClassName)}
          loading={eager ? "eager" : "lazy"}
        />
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-soft backdrop-blur transition-transform group-hover:scale-105">
          <Maximize2 className="h-3.5 w-3.5" />
          Enlarge
        </span>
      </button>
    </DialogTrigger>
    <DialogContent className="h-[88vh] w-[96vw] max-w-[96vw] overflow-hidden border-0 bg-background p-2 shadow-2xl sm:p-4 lg:w-[92vw] lg:max-w-[92vw]">
      <div className="h-full overflow-auto rounded-xl bg-muted/30 p-2 sm:p-4">
        <img src={src} alt={alt} className="mx-auto block max-w-full" />
      </div>
    </DialogContent>
  </Dialog>
);

export default ProductScreenshot;
