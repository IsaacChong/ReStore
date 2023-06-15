import { Typography } from "@mui/material";

const frame = {width: '100%', height: '100%'}
const frameContainer = {
  height: "500px",
  marginTop: "3rem"
}

export default function Homepage() {
  return (
    <div style={frameContainer}>
      <h1>Home</h1>
      {/* <iframe
        style={frame}
        src="https://online.fliphtml5.com/biqto/owsn/"
        scrolling="no"
        frameBorder="0"
        seamless
        allowTransparency={true}
        allowFullScreen={true}
      ></iframe> */}
    </div>
  );
}
