const GalleryData = {
  valleting: {
    title: "Maintenance Clean",
    items: [
      {
        id: 1,
        type: "image",
        before: "/v1.jpeg", // Changed from beforeVideo to match component
        after: "/v2.jpeg",
      },
      {
        id: 2,
        type: "image",
        before: "/v4.jpeg",
        after: "/v3.jpeg",
      },
      {
        id: 3,
        type: "image",
        before: "/v7.jpeg",
        after: "/v6.jpeg",
      },
    ],
  },
  DeepRestoration: {
    title: "Maintenance Clean",
    items: [
      {
        id: 1,
        type: "video",
        before: "/db1.mp4", // Key is "before"
        after: "/da1.mp4",  // Key is "after"
      },
      {
        id: 1,
        type: "video",
        before: "/db2.mp4", // Key is "before"
        after: "/da2.mp4",  // Key is "after"
      },
      {
        id: 1,
        type: "video",
        before: "/da11.mp4", // Key is "before"
        after: "/a3.mp4",  // Key is "after"
      },
      {
        id: 1,
        type: "video",
        before: "/db4.mp4", // Key is "before"
        after: "/a8.mp4",  // Key is "after"
      },
    ],
  },
  PaintCorrection: {
    title: "Paint Correction",
    items: [
      {
        id: 1,
        type: "video",
        before: "/pb1.mp4",
        after: "/pa1.mp4",
      },
      {
        id: 2,
        type: "video",
        before: "/pb2.mp4",
        after: "/pa2.mp4",
      },
    ],
  },
};

export default GalleryData;