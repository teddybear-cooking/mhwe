type Credentials = { email: string; password: string };

export async function login(creds: Credentials) {
  // Placeholder: integrate with Firebase/JWT later
  // For now, mimic a successful login response
  return { userId: "demo-user", email: creds.email };
}

export async function register(creds: Credentials) {
  // Placeholder: integrate with Firebase/JWT later
  return { userId: "new-user", email: creds.email };
}

export function logout() {
  // Placeholder logout
  return true;
}