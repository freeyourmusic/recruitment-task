type AlbumResult = {
  id: string;
  name: string;
  totalItems: number | null;
  artists: ArtistResult[] | null;
};

type ArtistResult = {
  id: string;
  name: string;
};

type TrackResult = {
  id: string;
  type: "track" | "album";
  track: {
    album: AlbumResult | null;
    artists: ArtistResult[] | null;
    duration: number | null;
    id: string;
    imageUrl: string | null;
    isrc: string | null;
    name: string;
  };
};

type SearchResult = {
  nextParam: string | null;
  results: TrackResult[];
  totalItems: number | null;
};

interface SearchExampleProps {
  jwtToken: string;
}

export function SearchExample({ jwtToken }: SearchExampleProps) {
  // FIRST TASK
  // Using hooks, create ability to search for music tracks using function `searchMusic` (src/utils/searchMusic.ts)
  // Requirements:
  // 1. Should search only after user typed 3 characters
  // 2. Should only search every 500ms between user typing
  // 3. Please use provided types (SearchResult type)

  // SECOND TASK
  // 1. Write endpoint (pages/api/searchLimit.ts file), that returns default limit for search (example, should return limit 5 from API)
  // 2. Use this returned limit in searchMusic function
  return (
    <>
      
    </>
  );
}
