import React from "react";

const MapEmbeded = () => {
  return (
    <div style={{ background: "#f9f9f9" }}>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Alamat YAPESA
      </h1>
      <h4
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "grey",
        }}
      >
        Jl. Platina NO. 15 Logam, Cijaura, Buahbatu Bandung
      </h4>
      <iframe
        style={{
          width: "100%",
          height: "650px",
          padding: "40px",
        }}
        frameborder="0"
        src="https://maps.google.com/maps?width=1280&amp;height=480&amp;hl=en&amp;q=Jl. Platina No.15, Cijaura, Bandung City, West Java&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
};

export default MapEmbeded;
