export async function fetchTutorials() {
    return await fetch('/api/tutorials').then(res => res.json());
}