export async function login(userData) {
    return await fetch('/api/login', { method: 'POST', body: JSON.stringify(userData) }).then(res => res.json());
}

export async function signup({ email, password }) {
    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        return await response.json();
    } catch (error) {
        return { success: false, message: 'Signup failed' };
    }
}