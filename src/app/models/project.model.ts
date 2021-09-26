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

export class Project implements Project {
  constructor(
    public title: string,
    public previewImgSrc: string,
    public page: {
      href: string;
      description?: string;
    },
    public subtitle?: string,
    public source?: {
      logo?: string;
      href: string;
    }
  ) {}
}

export class EmptyProject implements Project {
  title = '';
  subtitle = '';
  previewImgSrc = '';
  page = {
    href: '',
    description: '',
  };
  source = {
    logo: '',
    href: '',
  };
  constructor() {}
}
