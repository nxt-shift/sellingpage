const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export interface WaitlistData {
  email: string;
  company?: string;
  phone?: string;
  role?: string;
  sector?: string;
}

export interface WaitlistResponse {
  id: string;
  email: string;
  createdAt: string;
}

export async function submitToWaitlist(
  data: WaitlistData
): Promise<WaitlistResponse> {
  const res = await fetch(`${API_URL}/waitlist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `Request failed with status ${res.status}`);
  }

  return res.json();
}
