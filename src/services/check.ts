import {pollData} from "../../utils/request";

export const checkService = {
  async checkButtonClicked(data: { messageId: number }) {
    try {
      const res = await pollData('/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }, 1000, 80000);


      return res;
    } catch (e: any) {
      return {error: e.message, data: null};
    }
  },
}
