const cipher = {
  encode: function (text, displacement) {
    if (
      text === '' ||
      displacement === 'null' ||
      text.length === 0 ||
      displacement === 0
    ) {
      throw new TypeError();
    }
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    displacement = ((displacement % 26) + 26) % 26;
    return text.replace(
      /[A-Z]/gi,
      (c) => letters[(letters.indexOf(c) + displacement) % 26]
    );
  },

  decode: function (text, displacement) {
    if (
      text === '' ||
      displacement === 'null' ||
      text.length === 0 ||
      displacement === 0
    ) {
      throw new TypeError();
    }
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    displacement = ((displacement % 26) - 26) % 26;
    return text.replace(
      /[A-Z]/gi,
      (c) => letters[(letters.indexOf(c) - displacement) % 26]
    );
  },
};

export default cipher;
