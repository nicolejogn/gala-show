export const verifyService = {
  async verifyUser(data: { email: string; code: string }) {
    try {
      const res = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        return await res.json()
      }
      return {data: null, error: null};
    } catch (e: any) {
      return {error: e.message, data: null};
    }
  },
}
