export interface VideoCollection {
    year: number | string;
    videos: Video[];
}

export interface Video {
    title: string;
    url: string;
    src: string;
    id: string;
}
