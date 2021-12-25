export interface Social {
  logo: string | { src: string };
  link: string;
}

export class Social implements Social {
  constructor(public logo: string | { src: string }, public link: string) {}
}
