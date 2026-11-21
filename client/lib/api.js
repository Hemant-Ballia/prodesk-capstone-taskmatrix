const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const apiFetch = async (endpoint, options = {}) => {
  const { headers = {}, body, ...rest } = options;

  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body && typeof body === 'object' ? JSON.stringify(body) : body,
    ...rest,
  });

  const data = await res.json().catch(() => null);

  return { ok: res.ok, status: res.status, data };
};

export default apiFetch;
