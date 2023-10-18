export const experiences: ExperienceYear[] = [
  {
    year: 2023,
    experiences: [
      {
        title: 'Organizer of Data-driven Sustainability Workshop',
        date: new Date('2023-10-13'),
        description:
          'Organized a workshop on the topic of data-driven sustainability at the ESCP Berlin Business School',
      },
      {
        title: 'Celonis Value Realization Expert Certification',
        date: new Date('2023-09-08'),
        description:
          'Successful completion of Celonis Value Realization Expert Partner Certification',
      },
      {
        title: 'Celonis Consultant Star Certification',
        date: new Date('2023-08-04'),
        description: 'Successful completion of Celonis Consultant Bootcamp',
      },
      {
        date: new Date('2023-09-01'),
        title: 'Working student at Capgemini Invent',
        description:
          'From September 2023 until December 2023. Team Enterprise Transformation - Enterprise Data & Analytics with focus on Process Mining',
      },
    ],
  },
  {
    year: 2022,
    experiences: [
      { title: 'Bachelors Degree', date: new Date('2022-02-07') },
      {
        title: 'Celonis Hackathon at digitalCHURCH ',
        date: new Date('2022-04-29'),
        description:
          'Developed a prototype visualization for clusters of process variants',
      },
      {
        title: 'Practical Lab at E.ON',
        date: new Date('2022-08-01'),
        description:
          'Developed a model for market penetration of heatpumps in Germany',
      },
    ],
  },
  {
    year: 2021,
    experiences: [
      {
        title: 'Work as research assistant at RWTH Aachen University',
        date: new Date('2021-05-01'),
        description:
          'From May 2021 until August 2023. Worked on the project "tech4comp"',
      },
      {
        title: 'Work as webmaster for the AVL academic circle',
        date: new Date('2021-10-31'),
      },
    ],
  },
  {
    year: 2020,
    experiences: [
      { title: 'Launch of Cards webpage', date: new Date('2020-02-07') },
    ],
  },
];

export interface ExperienceYear {
  year: number;
  experiences?: Experience[];
}
export interface Experience {
  title: string;
  description?: string;
  date?: Date;
}
