const _ = require("lodash");

module.exports = function ({ addUtilities, theme }) {
  const margin = theme("margin");
  const screens = theme("screens");
  const fontSize = theme("fontSize");
  const colors = theme("colors");

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

  const editorFontSizes = _.map(theme("editorFontSizes", {}), (value, key) => {
    return {
      [`.has-${key}-font-size`]: {
        fontSize: value,
      },
    };
  });

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

  const alignmentUtilities = {
    ".alignnone": {
      marginLeft: 0,
      marginRight: 0,
      maxWidth: "100%",
      height: "auto",
    },
    ".aligncenter": {
      display: "block",
      margin: `${margin[2] || "0.5rem"} auto`,
    },
    [`@media (min-width: ${screens.sm || "640px"})`]: {
      ".alignleft": {
        float: "left",
        marginRight: margin[2] || "0.5rem",
      },
      ".alignright": {
        float: "right",
        marginLeft: margin[2] || "0.5rem",
      },
    },
  };

  const imageCaptions = {
    ".wp-caption": {
      display: "inline-block",
      "& img": {
        marginBottom: margin[2] || "0.5rem",
        lineHeight: 1,
      },
    },
    ".wp-caption-text": {
      fontSize: fontSize.sm || "0.9rem",
      color: (colors.gray && colors.gray[600]) || "#718096",
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
