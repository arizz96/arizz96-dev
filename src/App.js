import logo from './logo.jpg';
import data from './data.json';
import './App.css';
import ReactJson from 'react-json-view'
import * as Space from "react-spaces";
// test
function App() {
  return (
    <Space.ViewPort style={{ backgroundColor: "#282C34" }} scrollable={true}>
      <Space.Top size="15%">
        <Space.Top size="40%">
          <p style={{
            textAlign: "center",
            fontFamily: "Menlo, Consolas, DejaVu Sans Mono, monospace",
            fontSize: "2.5vh",
            fontStyle: "italic",
            color: "rgb(92, 99, 112)"
          }}>
            // Alessandro Rizzo
          </p>
        </Space.Top>
        <Space.Fill>
          <img src={logo} alt="logo" width="auto" height="100%" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
        </Space.Fill>
      </Space.Top>
      <Space.Fill scrollable={true}>
        <ReactJson
          name={"arizz96-website"}
          style={{
            padding: "2vh",
            fontFamily: "Menlo, Consolas, DejaVu Sans Mono, monospace",
            fontSize: "2.3vh"
          }}
          displayDataTypes={false}
          displayObjectSize={false}
          collapseStringsAfterLength={false}
          enableClipboard={false}
          iconStyle={"triangle"}
          src={data}
          shouldCollapse={({ src, namespace, type }) =>
            namespace.length > 1 && namespace[1] !== "home"
          }
          theme={{
            base00: "#282C34", // background
            base01: "",
            base02: "rgb(171, 178, 191)", // lines
            base03: "",
            base04: "",
            base05: "",
            base06: "",
            base07: "rgb(224, 108, 117)", // keys
            base08: "",
            base09: "rgb(209, 154, 102)", // values
            base0A: "",
            base0B: "",
            base0C: "rgb(171, 178, 191)", // array object number
            base0D: "rgb(171, 178, 191)", // collapsing indicator - open
            base0E: "rgb(171, 178, 191)", // collapsing indicator - closed
            base0F: ""
        }}
        />
      </Space.Fill>
      <Space.Bottom
        size="18%"
        style={{
          padding: "2vh",
          textAlign: "center",
          fontFamily: "Menlo, Consolas, DejaVu Sans Mono, monospace",
          fontSize: "1.6vh",
          fontStyle: "italic",
          color: "rgb(92, 99, 112)"
        }}
        >
        /*
        <br />
        I'm aware that this site isn't as pretty as you may expect...
        <br />
        ...but I'm a backend developer and this seems to be a nice way to create a funny portfolio website from scratch.
        <br />
        */
      </Space.Bottom>
    </Space.ViewPort>
  );
}

export default App;
