import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroTacos from "@/assets/hero-tacos.jpg";
import burritoBowl from "@/assets/burrito-bowl.jpg";
import burrito from "@/assets/burrito.jpg";
import quesadilla from "@/assets/quesadilla.jpg";

const Index = () => {
  const menuItems = [
    {
      name: "Birria Tacos",
      description: "Authentic slow-cooked beef in corn tortillas with melted cheese",
      image: heroTacos,
    },
    {
      name: "Burrito Bowls",
      description: "Build your own bowl with fresh ingredients and your choice of protein",
      image: burritoBowl,
    },
    {
      name: "Signature Burritos",
      description: "Massive flour tortilla wrapped around your favorite fillings",
      image: burrito,
    },
    {
      name: "Quesadillas",
      description: "Grilled to perfection with melted cheese and savory fillings",
      image: quesadilla,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroTacos})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 text-primary drop-shadow-lg">
            Tacos Twist
          </h1>
          <p className="text-2xl md:text-4xl mb-8 text-foreground">
            Authentic Mexican Flavors
          </p>
          <div className="inline-block bg-primary px-8 py-4 rounded-lg shadow-[var(--shadow-orange)] animate-pulse">
            <p className="text-3xl md:text-5xl font-bold text-primary-foreground">
              COMING SOON
            </p>
          </div>
        </div>
      </section>

      {/* Menu Showcase Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
            Our Specialties
          </h2>
          <p className="text-xl text-muted-foreground">
            Bringing you the best of Mexican cuisine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.02]"
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-bold mb-2 text-primary">
                      {item.name}
                    </h3>
                    <p className="text-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Coming Soon CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get Ready for a <span className="text-primary">Flavor Revolution</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're putting the finishing touches on something amazing. Follow us for updates!
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-xl px-8 py-6 shadow-[var(--shadow-orange)] transition-all duration-300 hover:scale-105"
          >
            Stay Updated
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 text-center">
        <p className="text-muted-foreground">
          © 2025 Tacos Twist. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
