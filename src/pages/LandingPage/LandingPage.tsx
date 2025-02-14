import LandingPageFeatures from "./LandingPageFeatures";
import LandingPageHero from "./LandingPageHero";
import LandingPagePasskeys from "./LandingPagePasskeys";
import SiteLayout from "~/layouts/SiteLayout";

export function LandingPage() {
  return (
    <SiteLayout>
      <main>
        <LandingPageHero />
        <LandingPageFeatures />
        <LandingPagePasskeys />
      </main>
    </SiteLayout>
  );
}
