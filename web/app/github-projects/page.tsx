import type {GithubProject} from "@shared/types/github-project";
import Link from "next/link";

export default async function ProjectsPage() {
  const response = (await fetch('http://localhost:3001/github-projects'));
  const githubProjects: GithubProject[] = await response.json();
  const projectList = [];
  for(let i = 0; i < githubProjects.length; i++ ){
    projectList.push(<li><Link href={'github-projects/' + githubProjects[i].name}>{githubProjects[i].name}</Link></li>);
  }

  return (
    <div>
      <h1>Projects</h1>
      <ul>{projectList}</ul>
    </div>
  );
};
