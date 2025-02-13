import LandingPageFeatures from "./LandingPageFeatures";
import LandingPageHero from "./LandingPageHero";
import SiteLayout from "~/layouts/SiteLayout";

export function LandingPage() {
  return (
    <SiteLayout>
      <main>
        <LandingPageHero />
        <LandingPageFeatures />
      </main>
    </SiteLayout>
  );
}
