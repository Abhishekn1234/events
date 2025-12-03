export default function DripSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden mt-20">

      {/* Dripping Top Wave */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          className="w-full h-40 md:h-56 lg:h-64 block"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#F7E5D6"
            d="M0,64L48,69.3C96,75,192,85,288,122.7C384,160,480,224,576,229.3C672,235,768,181,864,144C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Black section content */}
     <div className="relative z-10 w-full py-20 bg-black flex justify-center items-center">
  <h1 className="text-4xl font-bold text-white tracking-wide text-center">
    #CELEBRATEWITHHUSHLUSH
  </h1>
</div>


    </section>
  );
}
