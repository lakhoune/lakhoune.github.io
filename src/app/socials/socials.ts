import { Social } from '../models/social.model';

export const socials: Social[] = [
  new Social('bi bi-github', 'https://github.com/lakhoune'),
  new Social('bi bi-envelope-fill', 'mailto:a.b.lakhoune@gmail.com'),
  new Social('bi bi-linkedin', 'https://www.linkedin.com/in/lakhoune/'),
  new Social(
    'bi bi-patch-check-fill',
    'https://www.credly.com/users/ben-lakhoune'
  ),
  new Social('bi bi-twitter', 'https://twitter.com/ben_lakhoune'),
  new Social(
    { src: 'assets/icons/orcid.png' },
    'https://orcid.org/0009-0005-0961-5604'
  ),
];
