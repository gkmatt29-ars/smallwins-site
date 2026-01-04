import * as React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

import ordersImg from "@/assets/order-hub-orders.png";
import detailsImg from "@/assets/order-hub-details.png";
import details2Img from "@/assets/order-hub-details-2.png";

type ZoomableImageProps = {
  src: string;
  alt: string;
};

const ZoomableImage = ({ src, alt }: ZoomableImageProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-background shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Click to zoom screenshot"
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-auto cursor-zoom-in"
            loading="lazy"
          />

          {/* Subtle affordance (hidden on mobile) */}
          <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between">
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full border bg-background/90 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur">
              <ZoomIn className="h-3.5 w-3.5" />
              Click to zoom
            </span>
          </div>
        </button>
      </DialogTrigger>

      {/* Responsive, mobile-safe zoom */}
      <DialogContent
        className="
          p-0 overflow-hidden
          w-[94vw] max-w-[94vw] h-[82vh]
          sm:w-[92vw] sm:max-w-[92vw] sm:h-[86vh]
          lg:w-[88vw] lg:max-w-[88vw] lg:h-[88vh]
        "
      >
        <div className="h-full w-full bg-background">
          <div className="h-full w-full overflow-auto">
            <img
              src={src}
              alt={alt}
              className="block w-full h-full object-contain"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const OrderHubSection = () => {
  return (
    <section id="order-hub" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Inside the <span className="text-accent">Order Hub</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-3">
            What you see after a customer submits a request.
          </p>
        </div>

        <div className="grid gap-10 md:gap-12 max-w-5xl mx-auto">
          {/* Screenshot 1 */}
          <div className="grid md:grid-cols-5 gap-5 md:gap-8 items-center">
            <div className="md:col-span-3">
              <ZoomableImage
                src={ordersImg}
                alt="Order Hub orders overview"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-foreground">
                See every job in one place
              </h3>
              <p className="text-muted-foreground mt-2">
                Scan status, due dates, and priorities at a glance—so nothing slips.
              </p>
            </div>
          </div>

          {/* Screenshot 2 */}
          <div className="grid md:grid-cols-5 gap-5 md:gap-8 items-center">
            <div className="md:col-span-3 md:order-2">
              <ZoomableImage
                src={detailsImg}
                alt="Order Hub order details - status and progress"
              />
            </div>
            <div className="md:col-span-2 md:order-1">
              <h3 className="text-xl font-semibold text-foreground">
                Track progress and deadlines with confidence
              </h3>
              <p className="text-muted-foreground mt-2">
                Status, priority, and due dates stay visible as work moves forward.
              </p>
            </div>
          </div>

          {/* Screenshot 3 */}
          <div className="grid md:grid-cols-5 gap-5 md:gap-8 items-center">
            <div className="md:col-span-3">
              <ZoomableImage
                src={details2Img}
                alt="Order Hub order details - files, margin, and communication"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-foreground">
                Everything related to the job lives together
              </h3>
              <p className="text-muted-foreground mt-2">
                Files, pricing, updates, and notes—no switching between tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderHubSection;
