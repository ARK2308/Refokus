import React from "react";
import Marquee from "./Marquee";

const Marquees = () => {
  const images = [
    [
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f71_633c14899b819b7aafbbcde1_627a8da607be73fd13e76134_basf.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071ef8_633c148a12c2cf0d8c755473_61957d908c68e7c692fe642e_haufe.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab22d_633c148a8b25dcfcd2e387b2_61957e512832dbf5efe8cdc6_mural.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6666ed38989e70633b7658b5_Singularity_logo.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f0ff430a1585cff47451_botify-black.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aab7dc661744003a210_logo-black.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",
    ],
    [
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f71_633c14899b819b7aafbbcde1_627a8da607be73fd13e76134_basf.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071ef8_633c148a12c2cf0d8c755473_61957d908c68e7c692fe642e_haufe.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab22d_633c148a8b25dcfcd2e387b2_61957e512832dbf5efe8cdc6_mural.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6666ed38989e70633b7658b5_Singularity_logo.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f0ff430a1585cff47451_botify-black.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aab7dc661744003a210_logo-black.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",
    ],
  ];

  return (
    <div className="mt-32 py-8">
      {images.map((item, index) => (
        <Marquee key={index} imagesurls={item} />
      ))}
    </div>
  );
};

export default Marquees;