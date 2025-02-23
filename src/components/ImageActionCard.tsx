import { ChevronRight } from "lucide-react";

const ImageActionCard = ({ src, alt }) => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-96 object-cover rounded-2xl"
      />

      <button className="absolute bottom-1.5 right-1.5 w-14 h-14 bg-text rounded-full flex items-center justify-center text-white outline-white outline outline-[1rem]">
        <ChevronRight />
      </button>
    </div>
  )
}

export default ImageActionCard
