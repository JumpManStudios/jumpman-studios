export default function Project({name, description, url}: { name: string, description: string, url: string}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>Project description: {description}</p>
            <p>Technologies:
                <ul>
                    <li>Tech 1</li>
                    <li>Tach 2</li>
                    <li>Tach 3</li>
                </ul>
            </p>
            <p>URL: <a href={url}>Link</a></p>
        </div>
    );
};