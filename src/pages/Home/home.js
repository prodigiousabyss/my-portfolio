// import pc from '../../mugShot.png'

export const Home = () => {
  return (
    <div
      className="gradient-background"
      style={{
        width: "100vw",
        height: "100vh",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <img src={pc} alt=""  style={{ width: '40rem'}}/> */}
      <p
        style={{
          fontFamily: "cabin",
          fontSize: "2rem",
          lineHeight: "3rem",
          textAlign: "center",
        }}
      >
        Hello! I am a self-taught designer good at creating graphics,
        <br />
        video-editing and also skilled in creating animations.
        <br />I was working previously at 💼{" "}
        <a
          href="https://www.swiggy.com/swiggy-instamart"
          target="_blank"
          rel="noreferrer"
          style={{ color: "orange", textDecoration: "none" }}
        >
          Swiggy Instamart
        </a>
        .
      </p>
      {/* <svg  className="GradientBox" viewBox='0 0 321 321' xmlns='http://www.w3.org/2000/svg'>
      <filter id='noiseFilter'>
      <feTurbulence 
      type='fractalNoise' 
      baseFrequency='10' 
      numOctaves='6' 
      stitchTiles='stitch'/>
      </filter>
  
      <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
      </svg> */}
    </div>
  );
};
