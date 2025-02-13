import LandingPageHero from "./LandingPageHero";
import SiteLayout from "~/layouts/SiteLayout";

export function LandingPage() {
  return (
    <SiteLayout>
      <main>
        <LandingPageHero />
      </main>
    </SiteLayout>
  );
}
