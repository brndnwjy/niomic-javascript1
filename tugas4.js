const tinggiBadan = () => {
  let tinggi_budi = 180;
  let tinggi_andi = 188;
  let tinggi_siti = 182;

  let tertinngi, kedua, terpendek;

  if (tinggi_budi > tinggi_andi && tinggi_budi > tinggi_siti) {
    tertinggi = "budi";
    if (tinggi_andi > tinggi_siti) {
      kedua = "andi";
      terpendek = "siti";
    } else {
      kedua = "andi";
      terpendek = "siti";
    }
  } else if (tinggi_andi > tinggi_siti) {
    tertinggi = "andi";
    if (tinggi_budi > tinggi_siti) {
      kedua = "budi";
      terpendek = "siti";
    } else {
      kedua = "siti";
      terpendek = "budi";
    }
  } else {
    tertinggi = "siti";
    if (tinggi_budi > tinggi_andi) {
      kedua = "budi";
      terpendek = "andi";
    } else {
      kedua = "andi";
      terpendek = "budi";
    }
  }

  console.log(tertinggi, kedua, terpendek);
};

tinggiBadan();
