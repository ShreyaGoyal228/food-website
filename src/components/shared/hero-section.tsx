export default function HeroSection() {
  return (
    <>
      <div className="relative ">
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(0,0,0,0.60)_0%,_rgba(0,0,0,0.40)_100%)]"></div>
        <div className="text-center text-white font-bold text-[28px] sm:text-3xl md:text-4xl lg:text-5xl px-8 sm:px-[50px] md:px-[200px] lg:px-[260px] xl:px-[400px] relative py-[110px] md:py-[170px]  ">
          From Our <span className="text-[#FF4A22]">Kitchen</span> to Your{" "}
          {/* <span className="border-b-2 border-[#149C47] rounded-t-lg"> */}
          Doorstep
          {/* </span> */}.
        </div>

        <div className="whitespace-nowrap text-center bg-white rounded-[18px] absolute top-[95%] left-1/2 -translate-x-[50%] pt-3 lg:pt-[19px] pb-[5px] px-[58px] md:px-[80px] lg:px-[131px] text-[#FF4A22] text-sm md:text-base lg:text-xl font-bold">
          What’s on your mind?
        </div>
        {/* <div className="flex flex-row items-center justify-between">
            <div className="text-[#202020] text-base md:text-xl font-bold">
              What’s on your mind?
            </div>
            <ClearFilter />
          </div> */}
      </div>
    </>
  );
}
