export interface Project {
  title: string;
  subtitle?: string;
  previewImgSrc: string;
  page: {
    href: string;
    description?: string;
  };
  source?: {
    logo?: string;
    href: string;
  };
}
