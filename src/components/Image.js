const Image = () => {
  return (
    <div className="relative">
      <img
        src="https://s3-alpha-sig.figma.com/img/43ba/221c/f9bab8a9c6bd5fa24afab58238be9a4e?Expires=1691971200&Signature=c5bU-yrh-aMjSVdruCajQGblLv7yWbTOTQUMZJnk7ffunyH5OVHfyuirbjYgpQLQS9-ms1vPVCUiFDXMNzjFC0eRiZHEEFUwJepW4H7OyYec9lNDrnt24fn1yypcTxQYw9shlfBi9xpfL7oNsMuIR~JcE-yjNqyPprMt0XJfnLsz-Mm43N0GUd6vKZKvMTKQzHSBF6es8PA4dl4yVGNvLRjR~7Io36AGGYb1cJhHZbQrSTK~QGuR8ftjtJe~RBlmuynoeov7cKTk0h1n--yAEQCIZqkmEkJZdDCfcvV4xxl92Dl5xJ847i6ZhCjJwbSivrlny888BYUmmHSma0yemw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="img"
      ></img>

      <div className="absolute opacity-0 hover:opacity-70  align-middle transition-transform duration-100 ease-linear translate(-50%,-50%)  inset-0 text-center  bg-black ">
        <div className="text-xl text-white ">Coats</div>
      </div>
    </div>
  );
};

export default Image;
