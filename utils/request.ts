export async function pollData<T>(
  url: string,
  config: RequestInit,
  interval: number = 1000,
  timeout: number = 80000
): Promise<T> {
  const endTime = Date.now() + timeout;

  const poll = async (resolve: (value: T) => void, reject: (reason?: any) => void) => {
    try {
      const response = await fetch(url, config);

      if (response.status === 200) {
        const res = await response.json();

        if (!res.data) {
          throw new Error(res.error);
        }

        resolve(res);
      } else {
        throw new Error(`Unexpected status: ${response.status}`);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      if (Date.now() < endTime) {
        // Retry after interval if the timeout has not been reached
        setTimeout(() => poll(resolve, reject), interval);
      } else {
        reject(new Error('Polling timed out after 60 seconds'));
      }
    }
  };

  return new Promise(poll);
}
