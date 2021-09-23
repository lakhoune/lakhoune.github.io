import { Project } from '../models/project.model';

export const projects: Project[] = [
  {
    title: 'MobSOS Evaluation Center',
    subtitle: 'Community Analytics',
    previewImgSrc: 'assets/mobsos-preview.png',
    page: {
      href: 'https://sbf-dev.tech4comp.dbis.rwth-aachen.de/monitor/join/9f003333c529895fd5aba1fd0e25c32ce9a3c006c261424b55f7a2968ebc556d61823055009e8ee85c28b86f4131c4a329c0a93612c5782b5195e169b0c8034d/i5.las2peer.services.tmitocar.TmitocarService/senpai',
      description: 'Current Project',
    },
    source: {
      href: 'https://github.com/rwth-acis/mobsos-evaluation-center',
    },
  },
  {
    title: 'StudyGrow Cards',
    subtitle: 'Digital Flashcards',
    previewImgSrc: 'assets/cards.website.preview.png',
    page: {
      href: 'https://studydrive.me',
      description:
        'Past Project. This application can be used to create flashcards and share them with the community',
    },
  },
];
