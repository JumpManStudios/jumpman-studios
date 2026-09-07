import { GithubProject } from '@shared/types/github-project';

export default function GithubProjectCard(githubProject: GithubProject) {
    const technologiesList = () => {
        const listItems = [];
        for (let i = 0; i < githubProject.technologies.length; i++) {
            listItems.push(<li>{githubProject.technologies[i]}</li>);
        }
        return listItems;
    }

    return (
        <div>
            <h1>{githubProject.name}</h1>
            <p>Project description: {githubProject.description}</p>
            <p>Technologies:</p>
            <ul>
                {technologiesList()}
            </ul>
            <p>URL: <a href={githubProject.url}>Link</a></p>
            <p>Status: {githubProject.status}</p>
        </div>
    );
};