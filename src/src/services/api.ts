export class ApiThings {
  getMessages = async (): Promise<string[]> => {
    return new Promise<string[]>((res) => {
      setTimeout(() => {
        res(["hej", "peter"]);
      }, 3000);
    });
  };
}

export const api = new ApiThings();
