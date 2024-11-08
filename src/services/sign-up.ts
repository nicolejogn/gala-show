export const signUpService = {
  async signUpUser(data: { email: string; password: string }) {
    try {
      const res = await fetch('/api', {
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
