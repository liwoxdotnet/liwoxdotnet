import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from 'astro:env/server';

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  /** Path to author photo (relative to site root, e.g. '/avatar.jpg'). Used in Person schema. */
  authorImage?: string;
  /**
   * Set to false if your blog post images already match your theme color
   * and you don't want the brand color overlay applied on top of them.
   */
  blogImageOverlay?: boolean;
  /**
   * Branding configuration
   * Logo files: Replace SVGs in src/assets/branding/
   * Favicon: Replace in public/favicon.svg
   */
  branding: {
    /** Logo alt text for accessibility */
    logo: {
      alt: string;
      /** Path to logo image for structured data (e.g. '/logo.png'). Add a PNG to public/ and set this. */
      imageUrl?: string;
    };
    /** Favicon path (lives in public/) */
    favicon: {
      svg: string;
    };
    /** Theme colors for manifest and browser UI */
    colors: {
      /** Browser toolbar color (hex) */
      themeColor: string;
      /** PWA splash screen background (hex) */
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: 'LiwoxDotNet',
  description:
    'LiwoxDotNet helps businesses design, build, and scale modern digital systems using DevOps, cloud infrastructure, and clean engineering practices.',
  url: SITE_URL || 'https://liwox.net',
  ogImage: '/og-default.svg',
  author: 'Armstrong Uzoagwa',
  email: 'admin@liwox.net',
  address: {
    street: '',
    city: 'Southport',
    state: 'England',
    zip: '',
    country: 'United Kingdom',
  },
  socialLinks: [
    'https://github.com/ArmstrongLiwox',
    'https://www.linkedin.com/in/armstrong-uzoagwa',
    'https://www.facebook.com/armstrong.uzoagwa',
    'https://twitter.com/ArmStrongUzo',
    'https://www.instagram.com/liwoxdotnet',
    'https://www.youtube.com/@liwoxdotnet',
    'https://www.pinterest.com/liwoxdotnet',
  ],
  twitter: {
    site: 'https://twitter.com/ArmStrongUzo',
    creator: '@ArmStrongUzo',
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },
  authorImage: '/avatar.svg',
  blogImageOverlay: true,
  branding: {
    logo: {
      alt: 'LiwoxDotNet',
      imageUrl: '/favicon.svg',
    },
    favicon: {
      svg: '/favicon.svg',
    },
    colors: {
      themeColor: '#3b82f6',
      backgroundColor: '#ffffff',
    },
  },
};

export default siteConfig;
