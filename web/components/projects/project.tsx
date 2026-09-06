export default function Project({name, description, url}: { name: string, description: string, url: string }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>Project description: {description}</p>
            <p>Technologies:</p>
            <ul>
                <li>Tech 1</li>
                <li>Tech 2</li>
                <li>Tech 3</li>
            </ul>
            <p>URL: <a href={url}>Link</a></p>
        </div>
    );
};