import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Recycle, Users, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import heroImage from "@/assets/ecole-maria-hero.jpg";

export default function Home() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Ecole Maria - Recyclage"
          className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg animate-slide-in-left leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 drop-shadow-md animate-slide-in-right [animation-delay:200ms] px-2">
            {t("hero.subtitle")}
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-bounce-in [animation-delay:400ms] text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 touch-manipulation"
            onClick={() => navigate("/project")}
          >
            {t("hero.cta")}
          </Button>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="container mx-auto px-4 sm:px-6 -mt-12 sm:-mt-16 relative z-20 mb-12 sm:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <Card className="bg-card hover:shadow-lg transition-all hover:-translate-y-1 md:hover:-translate-y-2 scroll-reveal touch-manipulation">
            <CardContent className="pt-5 sm:pt-6 pb-5 sm:pb-6 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Recycle className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2">{t("project.implementation")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("project.implementation.desc")}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-all hover:-translate-y-1 md:hover:-translate-y-2 scroll-reveal [transition-delay:100ms] touch-manipulation">
            <CardContent className="pt-5 sm:pt-6 pb-5 sm:pb-6 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2">{t("project.awareness")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("project.awareness.desc")}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-all hover:-translate-y-1 md:hover:-translate-y-2 scroll-reveal [transition-delay:200ms] touch-manipulation sm:col-span-2 md:col-span-1">
            <CardContent className="pt-5 sm:pt-6 pb-5 sm:pb-6 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2">{t("project.mobilization")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("project.mobilization.desc")}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Canva Presentation Section */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 scroll-reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
              {t("home.presentation.title")}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              {t("home.presentation.subtitle")}
            </p>
          </div>
          
          <div className="relative scroll-fade-left">
            <div className="relative w-full h-0 pb-[56.25%] rounded-lg sm:rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.16)] transition-all duration-500 bg-card border border-border/50">
              <iframe
                loading="lazy"
                className="absolute w-full h-full top-0 left-0 border-0"
                src="https://www.canva.com/design/DAG5CGlo4U8/e8TE7nOlF8W-8b7pUdDrPg/view?embed"
                allowFullScreen
                allow="fullscreen"
                title="How To Recycle Waste Presentation"
              />
            </div>
            <div className="text-center mt-3 sm:mt-4 px-4">
              <a
                href="https://www.canva.com/design/DAG5CGlo4U8/e8TE7nOlF8W-8b7pUdDrPg/view?utm_content=DAG5CGlo4U8&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block touch-manipulation"
              >
                How To Recycle Waste {t("home.presentation.by")} Yahia Ikni
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
