const ImageActionCard = ({ src, alt }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative bg-[#F7FAFC]">
        <img
          className="absolute right-0 bottom-0"
          src="/image-clip.webp"
          alt="image clipper"
          height={77}
          width={77}
        />
        <img
          className="w-full h-96 object-cover rounded-2xl"
          src={src}
          alt={alt}
        />
      </div>

      <button className="absolute bottom-0 right-0 w-11 h-11 bg-text rounded-full flex items-center justify-center text-white outline outline-[#F7FAFC] outline-[0.875rem]">
        <svg width="10" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.3846 14.8846L2.88458 27.3846C2.76844 27.5007 2.63057 27.5928 2.47883 27.6557C2.32709 27.7186 2.16445 27.7509 2.00021 27.7509C1.83596 27.7509 1.67333 27.7186 1.52159 27.6557C1.36984 27.5928 1.23197 27.5007 1.11583 27.3846C0.999693 27.2684 0.907568 27.1306 0.844715 26.9788C0.781861 26.8271 0.749512 26.6645 0.749512 26.5002C0.749512 26.336 0.781861 26.1733 0.844715 26.0216C0.907568 25.8698 0.999693 25.732 1.11583 25.6158L12.733 14.0002L1.11583 2.38458C0.88128 2.15003 0.749512 1.83191 0.749512 1.50021C0.749512 1.1685 0.88128 0.850383 1.11583 0.615832C1.35038 0.381281 1.6685 0.249512 2.00021 0.249512C2.33191 0.249512 2.65003 0.381281 2.88458 0.615832L15.3846 13.1158C15.5008 13.2319 15.593 13.3698 15.6559 13.5215C15.7188 13.6733 15.7512 13.8359 15.7512 14.0002C15.7512 14.1645 15.7188 14.3271 15.6559 14.4789C15.593 14.6306 15.5008 14.7685 15.3846 14.8846Z" fill="#FEFEFE" />
        </svg>
      </button>
    </div>
  )
}

export default ImageActionCard
