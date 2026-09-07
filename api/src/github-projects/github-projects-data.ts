import type { GithubProject } from '@shared/types/github-project.ts';

let github_projects_data: GithubProject[];
github_projects_data  = [
  {
    id: 1,
    name: 'fact-bank-resume-builder',
    description:
      'A job-hunt workflow template for tailoring resumes and cover letters from a fact bank while tracking applications.',
    url: 'https://github.com/JumpManStudios/fact-bank-resume-builder',
    technologies: ['Python', 'MCP', 'Pandoc'],
    status: 'Active',
  },
  {
    id: 2,
    name: 'drummer-ai-public',
    description:
      'AI-assisted drum generation engine that analyzes guitar riffs, retrieves matching rhythmic grooves, and generates DAW-ready MIDI.',
    url: 'https://github.com/JumpManStudios/drummer-ai-public',
    technologies: ['Python', 'Audio Analysis', 'MIDI', 'REAPER', 'Retrieval'],
    status: 'Active',
  },
  {
    id: 3,
    name: 'coding-agent-workspace',
    description:
      'Provider-neutral workspace for AI coding agents with portable skills, project instructions, reusable workflows, and session records.',
    url: 'https://github.com/JumpManStudios/coding-agent-workspace',
    technologies: ['AI Agents', 'Codex', 'Claude Code', 'Markdown'],
    status: 'Active',
  },
  {
    id: 4,
    name: 'jumpman-studios',
    description:
      'Full-stack JumpMan Studios platform built as a hands-on project using Next.js, React, NestJS, Node.js, and AWS-native services.',
    url: 'https://github.com/JumpManStudios/jumpman-studios',
    technologies: [
      'Next.js',
      'React',
      'NestJS',
      'Node.js',
      'TypeScript',
      'AWS',
    ],
    status: 'In Progress',
  },
];

export default github_projects_data;