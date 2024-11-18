export const connection = {
  async withoutActions(data: { [key: string]: any }) {
    try {
      const res = await fetch('/api/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        return {data: await res.json(), error: null};
      }
      return {data: null, error: null};
    } catch (e: any) {
      return {error: e.message, data: null};
    }
  },
  async withActions(data: { [key: string]: any }) {
    try {
      const res = await fetch('/api/sign-in', {
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
