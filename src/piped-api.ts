import axios from "axios";
import {
  Channel,
  Comments,
  NextPageChannel,
  NextPagePlaylist,
  Playlist,
  Search,
  Sponsors,
  Streams,
  Video,
} from "./responses.interface";

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
    const data = await axios.get(`${this.host}${url}`);
    return data.data;
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

  /**
   * Retrieves the streams for a given video ID.
   *
   * @param {string} videoId - The ID of the video.
   * @return {Promise<Streams>} A promise that resolves to the streams for the given video ID.
   */
  async streams(videoId: string): Promise<Streams> {
    return await this._get(`/streams/${videoId}`);
  }

  /**
   * Retrieves comments for a specific video.
   *
   * @param {string} videoId - The ID of the video for which to retrieve comments.
   * @param {string} nextpage - The JSON encoded nextpage variable, to be sent as a query string (optional).
   * @returns {Promise<Comments>} A Promise that resolves to the comments for the video.
   */
  async comments(videoId: string, nextpage?: string): Promise<Comments> {
    return nextpage
      ? await this._get(`/nextpage/comments/${videoId}?nextpage=${nextpage}`)
      : await this._get(`/comments/${videoId}`);
  }

  /**
   * Retrieves a channel by its ID.
   *
   * @param {string} id - The ID of the channel to retrieve.
   * @param {string} nextpage - The JSON encoded nextpage variable, to be sent as a query string (optional).
   * @return {Promise<Channel | NextPageChannel>} A Promise that resolves to the retrieved Channel object.
   */
  async channel(
    id: string,
    nextpage?: string
  ): Promise<Channel | NextPageChannel> {
    return nextpage
      ? await this._get(`/nextpage/channel/${id}?nextpage=${nextpage}`)
      : await this._get(`/channel/${id}`);
  }

  /**
   * Retrieves a channel by its name.
   *
   * @param {string} name - The name of the channel.
   * @return {Promise<Channel>} A promise that resolves to the channel object.
   */
  async channelByName(name: string): Promise<Channel> {
    return await this._get(`/c/${name}`);
  }

  /**
   * Retrieves a user by their name.
   *
   * @param {string} name - The name of the user.
   * @return {Promise<Channel>} A Promise that resolves to the user's channel.
   */
  async user(name: string): Promise<Channel> {
    return await this._get(`/user/${name}`);
  }

  /**
   * Retrieves a playlist based on its ID.
   *
   * @param {string} id - The ID of the playlist to retrieve.
   * @param {string} nextpage - The token for the next page of results (optional).
   * @return {Promise<Playlist | NextPagePlaylist>} A Promise that resolves to a Playlist or NextPagePlaylist object.
   */
  async playlist(
    id: string,
    nextpage?: string
  ): Promise<Playlist | NextPagePlaylist> {
    return nextpage
      ? await this._get(`/nextpage/playlists/${id}?nextpage=${nextpage}`)
      : await this._get(`/playlists/${id}`);
  }

  /**
   * Retrieves suggestions based on the given query.
   *
   * @param {string} query - The query string to search for suggestions.
   * @return {Promise<string[]>} A promise that resolves to an array of string suggestions.
   */
  async suggestions(query: string): Promise<string[]> {
    return await this._get(`/suggestions?query=${query}`);
  }

  /**
   * Retrieves sponsors based on the provided ID and category.
   *
   * @param {string} id - The ID of the video.
   * @param {string[]} category - The category of sponsors you would like to skip. Example: ["sponsor"].
   * @return {Promise<Sponsors>} A promise that resolves to the sponsors.
   */
  async sponsors(
    id: string,
    category: string[] = ["sponsor"]
  ): Promise<Sponsors> {
    return await this._get(
      `/sponsors/${id}?category=${JSON.stringify(category)}`
    );
  }

  /**
   * Searches videos for a given query with an optional filter.
   *
   * @param {string} query - The query to search for.
   * @param {string} [filter="all"] - The optional filter to apply.
   * @returns {Promise<Search>} - A Promise that resolves to the search results.
   */
  async search(query: string, filter: string = "all"): Promise<Search> {
    return await this._get(`/search?q=${query}&filter=${filter}`);
  }
}
