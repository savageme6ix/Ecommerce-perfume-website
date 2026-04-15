import type { Perfume } from "./types";

interface FeaturedCollectionProps {
  perfumes: Perfume[];
}

const Perfumes = ({ perfumes }: FeaturedCollectionProps) => {
  return (
    <div>Perfumes</div>
  )
}

export default Perfumes