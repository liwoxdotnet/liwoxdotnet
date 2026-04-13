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
  authorImage?: string;
  blogImageOverlay?: boolean;
  branding: {
    logo: {
      alt: string;
      imageUrl?: string;
    };
    favicon: {
      svg: string;
    };
    colors: {
      themeColor: string;
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: 'LiwoxDotNet',
  description:
    'LiwoxDotNet — Building scalable apps, cloud systems, and automation solutions for modern businesses.',
  
  // ✅ FIXED: no astro env usage
  url: 'https://liwox.net',

  ogImage: '/og-default.svg',

  author: 'LiwoxDotNet',
  email: 'contact@liwox.net',

  address: {
    street: '',
    city: 'Glasgow',
    state: '',
    zip: '',
    country: 'United Kingdom',
  },

  socialLinks: [
    'https://github.com/liwoxdotnet',
    'https://www.linkedin.com',
  ],

  twitter: {
    site: 'https://x.com',
    creator: '@liwox',
  },

  // ✅ FIXED: remove env dependency
  verification: {
    google: '',
    bing: '',
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