const _ = require("lodash");

module.exports = function ({ addUtilities, theme }) {
  // Block editor text colour
  const editorColorText = _.map(
    theme("editorColorPalette", {}),
    (value, key) => {
      return {
        [`.has-${key}-text-color`]: {
          color: value,
        },
      };
    }
  );

  // Block editor background colour
  const editorColorBackground = _.map(
    theme("editorColorPalette", {}),
    (value, key) => {
      return {
        [`.has-${key}-background-color`]: {
          backgroundColor: value,
        },
      };
    }
  );

  // Block editor font sizes
  const editorFontSizes = _.map(theme("editorFontSizes", {}), (value, key) => {
    return {
      [`.has-${key}-font-size`]: {
        fontSize: value,
      },
    };
  });

  // Screen reader text
  // https://make.wordpress.org/accessibility/handbook/markup/the-css-class-screen-reader-text/
  const screenReaderText = {
    ".screen-reader-text": {
      border: "0",
      clip: "rect(1px, 1px, 1px, 1px)",
      clipPath: "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px",
      wordWrap: "normal !important",
      "&:focus": {
        position: "static",
        width: "auto",
        height: "auto",
        overflow: "visible",
        clip: "auto",
        whiteSpace: "normal",
      },
    },
  };

  // Alignment utilities
  const alignmentUtilities = {
    ".alignnone": {
      marginLeft: 0,
      marginRight: 0,
      maxWidth: "100%",
      height: "auto",
    },
  };

  // Image captions
  const imageCaptions = {
    ".wp-caption": {
      display: "inline-block",
      "& img": {
        lineHeight: 1,
      },
    },
  };

  addUtilities(
    [
      editorColorText,
      editorColorBackground,
      editorFontSizes,
      screenReaderText,
      alignmentUtilities,
      imageCaptions,
    ],
    {
      respectPrefix: false,
      respectImportant: false,
    }
  );
};
