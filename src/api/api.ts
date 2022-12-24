export class Api {
  private endpointUrl: string = process.env.ENDPOINT_URL;
  constructor(private path: string) {}
  async fetch() {
    const response = await fetch(`${this.endpointUrl}${this.path}`);
    return await response.json();
  }
}
