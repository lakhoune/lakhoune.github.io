import { Project } from '../models/project.model';

export const projects: Project[] = [
  {
    title: 'Automatic Conformance Checking',
    previewImgSrc: 'assets/acc.png',
    page: {
      href: 'http://conformance-checking.hvehged4gdaucchf.westeurope.azurecontainer.io',
      description:
        'A framework providing automatic conformance diagnostics on event logs uploaded to Celonis. (A Celonis account and application key is required)',
    },
    source: {
      href: 'https://github.com/lakhoune/Automatic-Conformance-Checking',
    },
  },
  {
    title: 'Social Bot Framework',
    subtitle: 'Bot modeling and development',
    previewImgSrc: 'assets/sbf-preview.webp',
    page: {
      href: 'https://sbf-dev.tech4comp.dbis.rwth-aachen.de',
      description:
        'A framework for building bots for social media platforms. It provides an intuitive approach to bot development',
    },
    source: {
      href: 'https://github.com/rwth-acis/Social-Bot-Framework',
    },
  },
  {
    title: 'MobSOS Evaluation Center',
    subtitle: 'Community Analytics',
    previewImgSrc: 'assets/mobsos-preview.webp',
    page: {
      href: 'https://monitor.tech4comp.dbis.rwth-aachen.de/welcome',
      description:
        'MobSOS is a framework for community information systems (CIS) success modeling. The goal is to increase success awareness in a community.',
    },
    source: {
      href: 'https://github.com/rwth-acis/mobsos-evaluation-center',
    },
  },
  {
    title: 'StudyGrow Cards',
    subtitle: 'Digital Flashcards',
    previewImgSrc: 'assets/cards-preview.webp',
    page: {
      href: 'https://cards.leier.lu/',
      description:
        'This application can be used to create flashcards and share them with the community',
    },
    source: {
      href: 'https://github.com/StudyGrow/Cards',
    },
  },
  {
    title: 'This website',
    subtitle: 'My personal website, which you are currently visiting',
    previewImgSrc: 'assets/website-preview.png',
    page: {
      href: 'https://lakhoune.com/',
      description:
        'This website is built with Angular and hosted on GitHub Pages. It is a single page application (SPA) and uses the Angular Material UI library. The source code is available on GitHub, along with a CI/CD pipeline. Feel free to use this website as a template for your own website, but please give credit where credit is due :) ',
    },
    source: {
      href: 'https://github.com/lakhoune/lakhoune.github.io',
    },
  },
  {
    title: 'Wifi-QR',
    subtitle: 'Quickly share your Wifi credentials',
    previewImgSrc: 'assets/wifi-qr.jpg',
    page: {
      href: 'https://lakhoune.com/wifi-qr/',
      description:
        'This application can be used to generate a QR code containing your Wifi credentials. This way, you can easily share your Wifi with your friends.',
    },
    source: {
      href: 'https://github.com/lakhoune/lakhoune.github.io',
    },
  },
];
