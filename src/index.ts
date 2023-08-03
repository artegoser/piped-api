import got from "got";
import { Video } from "./responses.interface";

export class PipedAPI {
  host: string;
  constructor(host: string = "https://pipedapi.kavin.rocks") {
    this.host = host;
  }

  /**
   * Retrieves data from the specified URL.
   *
   * @param {string} url - The URL from which to retrieve data.
   * @return {Promise<any>} - A Promise that resolves to the parsed JSON data.
   */
  private async _get(url: string) {
    const data = await got.get(`${this.host}${url}`);
    return JSON.parse(data.body);
  }

  /**
   * Retrieves the trending videos for a specific region.
   *
   * @param {string} region - The region for which to retrieve trending videos.
   * @return {Promise<Video[]>} - A promise that resolves to an array of Video objects representing the trending videos.
   */
  async trending(region: string): Promise<Video[]> {
    return await this._get(`/trending?region=${region}`);
  }
}
