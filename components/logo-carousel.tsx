"use client"

interface LogoCarouselProps {
  logos: { src: string; alt: string }[]
}

export function LogoCarousel({ logos }: LogoCarouselProps) {
  // Duplicate logos to create a seamless loop effect
  const duplicatedLogos = [...logos, ...logos]

  // Calculate animation duration based on the number of unique logos
  // This makes the speed consistent regardless of how many logos there are
  const animationDuration = `${logos.length * 3}s` // 3 seconds per logo, adjust for desired speed

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div
        className="flex animate-scroll-logos"
        style={{
          animationDuration: animationDuration,
          width: "max-content",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            // Reverted to px-0 for horizontal padding, removing negative margin
            className="flex-shrink-0 w-1/5 sm:w-1/6 md:w-1/7 lg:w-1/8 px-0 flex items-center justify-center"
          >
            <img
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              className="max-w-[160px] max-h-[160px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
