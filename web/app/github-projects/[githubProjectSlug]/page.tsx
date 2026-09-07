import {GithubProject} from "@shared/types/github-project";

export default function GithubProjectDetailsPage(githubProject: GithubProject) {
    return <h1>{githubProject.name}</h1>
}