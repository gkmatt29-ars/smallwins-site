import ordersImg from "@/assets/order-hub-orders.png";
import detailsImg from "@/assets/order-hub-details.png";
import details2Img from "@/assets/order-hub-details-2.png";

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
          {/* Screenshot 1: Orders overview */}
          <div className="grid md:grid-cols-5 gap-5 md:gap-8 items-center">
            <div className="md:col-span-3">
              <div className="rounded-2xl border border-border shadow-card overflow-hidden bg-background">
                <img
                  src={ordersImg}
                  alt="Order Hub orders overview"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
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

          {/* Screenshot 2: Order details (status + progress) */}
          <div className="grid md:grid-cols-5 gap-5 md:gap-8 items-center">
            <div className="md:col-span-3 md:order-2">
              <div className="rounded-2xl border border-border shadow-card overflow-hidden bg-background">
                <img
                  src={detailsImg}
                  alt="Order Hub order details - status and progress"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
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

          {/* Screenshot 3: Order details (files + margin + communication) */}
          <div className="grid md:grid-cols-5 gap-5 md:gap-8 items-center">
            <div className="md:col-span-3">
              <div className="rounded-2xl border border-border shadow-card overflow-hidden bg-background">
                <img
                  src={details2Img}
                  alt="Order Hub order details - files, margin, and communication"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
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

// Keep default export so either import style works
export default OrderHubSection;
