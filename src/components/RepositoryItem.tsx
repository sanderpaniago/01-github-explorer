type RepositoryItemProps = {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export default function RepositoryItem({repository}: RepositoryItemProps) {
    return (
        <li>
            <strong>{repository.name ?? "default"}</strong>
            <p>{repository.description}</p>
            <a href={repository.html_url}>Acessar Repositório</a>
        </li>
    );
}
