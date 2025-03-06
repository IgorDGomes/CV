async function getRepos(repo: string) {
    const response = await fetch(`https://api.github.com/repos/IgorDGomes/${repo}`);
    const data = response.json();

    return data;
}

export { getRepos }