import useData from "@/hooks/useData.ts";

export type Platform = {
    id: number,
    name: string,
    slug: string,
    image_background: string,
    image: string,
}
const usePlatforms = 
    () => useData<Platform>("/platforms");
export default usePlatforms;