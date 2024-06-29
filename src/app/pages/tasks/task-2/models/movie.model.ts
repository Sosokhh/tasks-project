export interface Movie {
  id: string;
  image: Image | null;
  title: string;
  titleType: string;
  year: number;
}


interface Image {
  height: number;
  id: string;
  url: string;
  width: number;
}
