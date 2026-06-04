/** Central registry of stock image paths (Pexels CDN, hotlink-permitted). */
export const px = (path: string, w = 1200) =>
  `https://images.pexels.com/photos/${path}?auto=compress&cs=tinysrgb&w=${w}`;

export const IMG = {
  factory: "31352672/pexels-photo-31352672.jpeg",
  hall: "14804699/pexels-photo-14804699.jpeg",
  cnc: "8865187/pexels-photo-8865187.jpeg",
  line: "34221993/pexels-photo-34221993.jpeg",
  worker: "11765538/pexels-photo-11765538.jpeg",
  caps: "31115985/pexels-photo-31115985/free-photo-of-close-up-of-white-plastic-screw-caps-in-bulk.jpeg",
  lids: "28248443/pexels-photo-28248443/free-photo-of-tetra-pak-lids.jpeg",
  syringes: "7722570/pexels-photo-7722570.jpeg",
  shoes: "13524778/pexels-photo-13524778.jpeg",
  pellets: "19757403/pexels-photo-19757403/free-photo-of-pile-of-pellets.jpeg",
  granules:
    "34286024/pexels-photo-34286024/free-photo-of-recycled-plastic-granules-in-hand-outdoors.jpeg",
} as const;
