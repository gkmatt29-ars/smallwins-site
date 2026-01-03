const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-primary/5 relative">
      {/* Blue accent */}
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            About <span className="text-primary">Small Wins</span>
          </h2>

          <div className="space-y-6 text-left">
            <p className="text-lg text-foreground leading-relaxed">
              Small Wins is a lightweight system that helps small businesses collect custom requests, 
              track them in one place, and keep customers informed.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              If orders come in messy — through email, DMs, or phone calls — and status lives in 
              someone's head, this is for you.
            </p>

            <div className="pt-4 border-t border-primary/20">
              <p className="text-foreground font-medium">
                You want relief, not more software. That's what this is.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
