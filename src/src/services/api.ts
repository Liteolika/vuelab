export class ApiThings {
  getMessages = async (): Promise<string[]> => {
    return new Promise<string[]>((res) => {
      setTimeout(() => {
        res(["hej", "peter"]);
      }, 2000);
    });
  };
}

export const api = new ApiThings();
