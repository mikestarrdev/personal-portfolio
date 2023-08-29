import { MajorProjectDetails } from '../types/ProjectDetails';
import { Languages } from '../types/technologies';

export const majorProjectDetails: MajorProjectDetails[] = [
  {
    title: 'AirSwap Voter Rewards',
    description:
      'Voters can stake tokens through the app, vote on on-chain proposals, and then claim rewards from a pool. (App is still a work in progress)',
    thumbnail: 'voter-rewards.png',
    videoLink: undefined,
    github: 'https://github.com/airswap/airswap-voter-rewards',
    link: 'https://airswap.io',
    technologies: [
      Languages.TypeScript,
      Languages.React,
      Languages.StyledComponents,
    ],
  },
  {
    title: 'AirSwap Web',
    description: 'A decentralized protocol that has facilitated trades worth over $3.68 billion in value.',
    thumbnail: 'airswap.png',
    videoLink: undefined,
    github: 'https://github.com/airswap/airswap-web',
    link: 'https://airswap.io',
    technologies: [
      Languages.TypeScript,
      Languages.React,
      Languages.StyledComponents,
    ],
  },
  {
    title: 'Kaching',
    description: 'Hackathon project utilizing account abstraction, enabling seamless sign-in via Google or Discord and secure cryptocurrency transfers between users.',
    thumbnail: 'kaching.png',
    videoLink: 'https://vimeo.com/817957065',
    github: 'https://github.com/personnamedmike/KachingETHDenver',
    link: 'https://kaching-eth-denver-trkd.vercel.app/',
    technologies: [
      Languages.TypeScript,
      Languages.JavaScript,
      Languages.NodeJs,
      Languages.NextJs,
      Languages.RestApi,
      Languages.ChakraUI,
      Languages.Vercel,
    ],
  },
  {
    title: 'Rite of Moloch',
    description: 'HR for DAOs users can stake tokens to a cohort, signaling commitment and accountability to the community they wish to join. Community admin’ can track the onboarding of new members to a DAO.',
    thumbnail: 'rom.png',
    videoLink: 'https://vimeo.com/802525256',
    github: 'https://github.com/rite-of-moloch/RiteOfMoloch-v1.0',
    link: 'https://rom.wtf',
    technologies: [
      Languages.TypeScript,
      Languages.JavaScript,
      Languages.NextJs,
      Languages.GraphQL,
      Languages.ChakraUI,
      Languages.Vercel,
    ],
  },
  {
    title: 'WrapETH',
    description: 'UI which allows users to wrap and unwrap ETH with no fees.',
    thumbnail: 'wrapeth.png',
    videoLink: 'https://vimeo.com/766531266',
    github: 'https://github.com/raid-guild/wrapeth',
    link: 'https://wrapeth.com',
    technologies: [
      Languages.TypeScript,
      Languages.JavaScript,
      Languages.NextJs,
      Languages.RestApi,
      Languages.ChakraUI,
    ],
  },
  {
    title: 'Summit',
    description: 'App which aggregates lectures from various conferences.',
    github: null,
    link: 'https://withsummit.xyz/',
    technologies: [
      Languages.TypeScript,
      Languages.JavaScript,
      Languages.NextJs,
      Languages.GraphQL,
      Languages.ChakraUI,
    ],
    contributions: [
      'Upgraded design with Chakra-UI',
      'Implemented infinite scroll feature which uses React-Query library to pull data from backend server',
      'Built filter and search features which pass in dynamic variables to Hasura GraphQL queries',
    ],
  },
  {
    title: 'Raid Guild Design System',
    description: 'Design system used to brand projects built by the DAO RaidGuild.',
    github: 'https://github.com/raid-guild/design-system',
    link: 'https://github.com/raid-guild/design-system',
    technologies: [
      Languages.TypeScript,
      Languages.ChakraUI,
      Languages.Storybook,
    ],
    contributions: [
      'Integrated React-Hook-Form with Chakra-UI NumberInput component',
      'Updated Connect Wallet button for rainbowKit integration',
    ],
  },
  {
    title: 'Octav3',
    description: 'Make money from your music NFTs. This was a hackathon project for the ETHGlobal “Metabolism” hackathon in August 2022.',
    github: null,
    link: 'https://www.octav3.com/',
    technologies: [
      Languages.JavaScript,
      Languages.React,
      Languages.TailwindCSS,
    ],
    contributions: [
      'Built components with TailwindCSS',
      'Initialize project with Next.js',
    ],
  },
];
