export const Home = () => {
  return (
    <div
      className="gradient-background"
      style={{
        width: "100vw",
        height: "100vh",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p className="font-bold text-4xl leading-normal text-center " >
        Hello! I am a ☺self-taught designer <br />good at creating graphics,
        <br />
        video-editing and also skilled <br />in creating animations✌︎.
        <br />I was working previously at {" "}
        <a 
          href="https://www.swiggy.com/swiggy-instamart"
          target="_blank"
          rel="noreferrer"
        >
          Swiggy Instamart
        </a>
        .
      </p>
    </div>
  );
};
