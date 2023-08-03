import Image from "./Image";

const Categories = () => {
  const arr = [
    {
      src: "https://s3-alpha-sig.figma.com/img/43ba/221c/f9bab8a9c6bd5fa24afab58238be9a4e?Expires=1691971200&Signature=c5bU-yrh-aMjSVdruCajQGblLv7yWbTOTQUMZJnk7ffunyH5OVHfyuirbjYgpQLQS9-ms1vPVCUiFDXMNzjFC0eRiZHEEFUwJepW4H7OyYec9lNDrnt24fn1yypcTxQYw9shlfBi9xpfL7oNsMuIR~JcE-yjNqyPprMt0XJfnLsz-Mm43N0GUd6vKZKvMTKQzHSBF6es8PA4dl4yVGNvLRjR~7Io36AGGYb1cJhHZbQrSTK~QGuR8ftjtJe~RBlmuynoeov7cKTk0h1n--yAEQCIZqkmEkJZdDCfcvV4xxl92Dl5xJ847i6ZhCjJwbSivrlny888BYUmmHSma0yemw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      alt: "img",
      href: "/jackets",
      label: "Jackets",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/8368/821e/a115beb2ec5b12500bb7b8a33ecbf5cd?Expires=1691971200&Signature=SZcq-QjuxZ8bTZew~oAdOr5pEVLNnhyWa8GGZKvk2IsHA0XFqqXWwTjeXV1dld04~71xhJfh4cwg8ZCU3xCLkqnGJt2Wm~RBoXq0v0PrInC0GRl0rtuAegkTkihAMibkUkfTXt5ACs7CdPHJZ7lZl-AO8iFkQ2dGhpm6C73ghUesnO9ja3xXBfNin9B0t0prmScq3gLLW0p10UaVjSF~ZS51gsQnk7lyGaaNov3GAf3JzfQjlCS2K8F-Xq3lTxHb~joUy8A9U1pRb8mrgdLD4DBg9lTzXTsuGen2mJg9BIsAju0omBYyK3GRaIqAqa8BwOjy89q8zhGIDwrUiJkyWQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      alt: "img",
      href: "/shoes",
      label: "Shoes",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/6de8/91e4/16f413aaaed1d6a5037e7a35036a998b?Expires=1691971200&Signature=flk-v8rR1lPju7U6JgLHxwykqGm00OoD-pWR4QRH0Tl5~zbQIhfnMK5QA9o3yaGIc3UCzhAyPe5j4lYAebYWQKsM4al6QF6tSSvzzUDgrQG52iTzc2ZVxs40lFVysnIbKJLVTbmhvW4amGA4xx2oanFasjSmgbqTtl3ohLZKoSQF7-pKbKCWT07S7mvg6niBFHHVRDobdBbobqEBE782Btl0vJ1M34cZoPmJ245tMtJBlDEWoWebaboKfXoAk86thEuPVWov6B7MBj5eKD9PYRCrxezz6ahX873JS7O1WCW-HQcFZNu8sRJeQW0Yfu-F7Mul7-TNJ5rajtugHToXXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      alt: "img",
      href: "/bags",
      label: "Bags",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/29a3/d08c/8390c6270b6fc4b1c06e37e3e137af31?Expires=1691971200&Signature=OEbul6UGMwlthc9GwagrhoAUcAlyzzIkmPhrCgD0e2KYIPYedmd9F~yYRlZyR8LV4NxKciF78yooh2IXJAdMdC8wV~N~s2wZQUDtYBFW~0W2wt6HFwelcz4Scy1AJHcxNPUk3RREWi1bQGDGYdPTLnYxANDMK0VKWiSsZPJVnzGfOHGG7V4L6so-~ZyTSQmJ64hxauQzyDqBs7HD2dA1y~FGaM3ZgGziVwGx1c0oBwxW-CN4sjsch7Z1PhjM6u~G26XrZ1TsGdFIbEwYzESmtAmSdUOlskOZrhC59JhTJ6BZOdo2wth3KT87kogYHCZBYGt3croZx6und06U-3YFSw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      alt: "img",
      href: "/t-shirts",
      label: "T-shirts",
    },
  ];

  return (
    <div className="grid grid-cols-4 place-items-stretch object-fill overflow-hidden pb-20 ">
      {arr.map((x) => (
        <Image img={x} />
      ))}
    </div>
  );
};

export default Categories;
