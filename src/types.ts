export interface Streams {
  audioStreams: AudioStream[];
  dash: string | null;
  description: string;
  dislikes: number;
  duration: number;
  hls: string | null;
  lbryId: string;
  likes: number;
  livestream: boolean;
  proxyUrl: string;
  relatedStreams: Video[];
  subtitles: Subtitle[];
  thumbnailUrl: string;
  title: string;
  uploadedDate: string;
  uploader: string;
  uploaderUrl: string;
  uploaderVerified: boolean;
  videoStreams: VideoStream[];
  views: number;
}

export interface AudioStream {
  bitrate: number;
  codec: string;
  format: string;
  indexEnd: number;
  indexStart: number;
  initStart: number;
  initEnd: number;
  mimeType: string;
  quality: string;
  url: string;
  videoOnly: boolean;
}

export interface Subtitle {
  autoGenerated: boolean;
  code: string;
  mimeType: string;
  name: string;
  url: string;
}

export interface VideoStream {
  bitrate: number;
  codec: string;
  format: string;
  fps: number;
  height: number;
  indexEnd: number;
  indexStart: number;
  initStart: number;
  initEnd: number;
  mimeType: string;
  quality: string;
  url: string;
  videoOnly: boolean;
  width: number;
}

export interface Comments {
  comments: Comment[];
  disabled: boolean;
  nextpage: string;
}

export interface Comment {
  author: string;
  commentId: string;
  commentText: string;
  commentedTime: string;
  commentorUrl: string;
  hearted: boolean;
  likeCount: number;
  pinned: boolean;
  thumbnail: string;
  verified: boolean;
}

export interface Video {
  duration: number;
  thumbnail: string;
  title: string;
  uploadedDate: string;
  uploaderAvatar: string;
  uploaderUrl: string;
  uploaderVerified: boolean;
  uploaderName: string;
  url: string;
  views: number;
  isShort: boolean;
  uploaded: number;
  shortDescription: string;
  type?: string;
}

export interface Channel {
  avatarUrl: string;
  bannerUrl: string;
  description: string;
  id: string;
  name: string;
  tabs: TabInfo[];
  nextpage: string;
  relatedStreams: Video[];
  subscriberCount: number;
  verified: boolean;

  type?: string;
  url?: string;
  thumbnail?: string;
  videos?: number;
}

export interface TabInfo {
  name: string;
  data: string;
}

export interface Tab {
  nextpage: string;
  content: TabResp[];
}

export type TabResp = Video | Channel | Playlist;

export interface NextPageChannel {
  nextpage: string;
  relatedStreams: Video[];
}

export interface Playlist {
  url: string;
  bannerUrl: string;
  name: string;
  nextpage: string;
  relatedStreams: Video[];
  thumbnailUrl?: string;
  uploader?: string;
  uploaderAvatar: string;
  uploaderUrl: string;
  videos: number;

  type?: string;
  thumbnail?: string;
  uploaderName?: string;
  uploaderVerified?: boolean;
  playlistType?: string;
}

export interface NextPagePlaylist {
  nextpage: string;
  relatedStreams: Video[];
}

export interface Sponsors {
  hash: string;
  segments: Segments[];
  videoId: string;
}

export interface Segments {
  UUID: string;
  actionType: string;
  category: string;
  segment: string;
  videoDuration: number;
}

export interface Search {
  nextpage: string;
  items: Item[];
  corrected: boolean;
  suggestion: string | null;
}

export type Item = Video | Channel | Playlist;
