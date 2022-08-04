import styles from "./layout.module.css";
import Link from "next/link";
import Greeting from "./greeting";
import Resume from "./resume";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

export const siteTitle = "Leck Tang";

export default function Layout({ children, home }) {
  const background = {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
  };

  const foreground = {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="inset center">
        <div className={styles.container}>{home ? <Greeting /> : ""}</div>
      </div>
    ),
  };

  const gradientOverlay = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  };

  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[background, headline, foreground, gradientOverlay]}
        className="full"
      />
      <div className={styles.containerresume}>
        {home ? <Resume /> : ""}
        <main class="py-4">{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </ParallaxProvider>
  );
}
