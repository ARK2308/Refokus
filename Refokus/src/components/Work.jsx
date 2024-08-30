import React from "react";

const Work = () => {
  var images = [
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/667c85a1151f26218228b9d3_Refokus.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://uploads-ssl.webflow.com/6344011f1f60536298c069e1/63653671c45eaa47bb313fe0_weglot-magic-Awwwards%2B%2528B%2529.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86a8a9b4a0505553454_Arqitel%20-%204%203.webp",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/64621c0e5c577ed6395fff5c/64678393378009379fe7901f_refocus-services-og.webp",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://uploads-ssl.webflow.com/6332139f3e84c50140de0cf2/6449bc1f1b3089dbbf11fc4b_9351a8ab-dc4d-472d-bfd3-5cf5beb54464.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/64621c0e5c577ed6395fff5c/64672fc94fc50fa4ab5082d2_Refukos-Showcase-og.webp",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ];
  return (
    <div className="w-full mt-10 ">
      <div className=" relative max-w-screen-lg mx-auto text-center ">
        <h1 className="text-[30vw] leading-none font-medium tracking-tight select-none ">
          work
        </h1>
        <div className="absolute top-0 left-0 w-full h-full ">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  className="absolute w-60 rounded-lg-translate-x-[50%] rounded-lg shadow-2xl -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
