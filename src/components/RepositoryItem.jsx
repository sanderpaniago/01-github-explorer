export default function RepositoryItem({repository}) {
    return (
        <li>
            <strong>{repository.name ?? "default"}</strong>
            <p>{repository.description}</p>
            <a href={repository.html_url}>Acessar Repositório</a>
        </li>
    );
}
