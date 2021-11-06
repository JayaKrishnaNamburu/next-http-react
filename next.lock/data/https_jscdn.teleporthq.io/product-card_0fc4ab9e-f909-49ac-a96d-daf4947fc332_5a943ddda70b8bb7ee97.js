// build/product-card.jsx
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// build/style.js
import { variant } from "styled-system";
var TOKENS = {
  DlSpaceSpaceTwounits: "32px",
  DlRadiusRadiusRadius4: "4px",
  DlColorGrayWhite: "#FFFFFF",
  DlSpaceSpaceFiveunits: "80px",
  DlSizeSizeXxlarge: "288px",
  DlRadiusRadiusRound: "50%",
  DlSizeSizeMedium: "96px",
  DlSizeSizeSmall: "48px",
  DlColorPrimary300: "#0074F0",
  DlSpaceSpaceHalfunit: "8px",
  DlColorDanger700: "#E14747",
  DlColorSuccess300: "#199033",
  DlSizeSizeMaxwidth: "1400px",
  DlColorDanger300: "#A22020",
  DlSpaceSpaceThreeunits: "48px",
  DlColorGrayBlack: "#000000",
  DlRadiusRadiusRadius2: "2px",
  DlSpaceSpaceSixunits: "96px",
  DlColorPrimary500: "#14A9FF",
  DlSpaceSpaceFourunits: "64px",
  DlColorDanger500: "#BF2626",
  DlSpaceSpaceOneandhalfunits: "24px",
  DlSizeSizeXlarge: "192px",
  DlColorGray700: "#999999",
  DlColorSuccess500: "#32A94C",
  DlColorPrimary700: "#85DCFF",
  DlColorGray500: "#595959",
  DlSpaceSpaceUnit: "16px",
  DlColorPrimary100: "#003EB3",
  DlSizeSizeXsmall: "16px",
  DlSizeSizeLarge: "144px",
  DlColorGray900: "#D9D9D9",
  DlColorSuccess700: "#4CC366",
  DlRadiusRadiusRadius8: "8px"
};
var projectStyleVariants = variant({
  prop: "projVariant",
  variants: {
    "button": {
      "color": TOKENS.DlColorGrayBlack,
      "display": "inline-block",
      "padding": "0.5rem 1rem",
      "border-color": TOKENS.DlColorGrayBlack,
      "border-width": "1px",
      "border-radius": "4px",
      "background-color": TOKENS.DlColorGrayWhite
    },
    "input": {
      "color": TOKENS.DlColorGrayBlack,
      "cursor": "auto",
      "padding": "0.5rem 1rem",
      "border-color": TOKENS.DlColorGrayBlack,
      "border-width": "1px",
      "border-radius": "4px",
      "background-color": TOKENS.DlColorGrayWhite
    },
    "textarea": {
      "color": TOKENS.DlColorGrayBlack,
      "cursor": "auto",
      "padding": "0.5rem",
      "border-color": TOKENS.DlColorGrayBlack,
      "border-width": "1px",
      "border-radius": "4px",
      "background-color": TOKENS.DlColorGrayWhite
    },
    "teleport-menu-burger": {
      "display": "flex",
      "align-items": "center",
      "justify-content": "center"
    },
    "teleport-menu-mobile": {
      "top": "0px",
      "left": "0px",
      "width": "100%",
      "height": "100vh",
      "z-index": "100",
      "display": "none",
      "padding": "32px",
      "position": "absolute",
      "flex-direction": "column",
      "justify-content": "space-between",
      "background-color": "#fff"
    },
    "teleport-menu-close": {
      "display": "flex",
      "align-items": "center",
      "justify-content": "center"
    },
    "teleport-show": {
      "display": "flex !important"
    },
    "content": {
      "font-size": "16px",
      "font-family": "Inter",
      "font-weight": "400",
      "line-height": "1.15",
      "text-transform": "none",
      "text-decoration": "none"
    },
    "heading": {
      "font-size": "32px",
      "font-family": "Inter",
      "font-weight": "700",
      "line-height": "1.15",
      "text-transform": "none",
      "text-decoration": "none"
    }
  }
});

// build/product-card.jsx
var ProductCard = (props) => {
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Image, {
    alt: "image",
    src: props.image
  }), /* @__PURE__ */ React.createElement(Container1, null, /* @__PURE__ */ React.createElement(Container2, null, /* @__PURE__ */ React.createElement(Container3, null, /* @__PURE__ */ React.createElement(Text, null, props.title)), /* @__PURE__ */ React.createElement(Container4, null, /* @__PURE__ */ React.createElement(Text1, null, props.price), /* @__PURE__ */ React.createElement(Text2, null, "$")), /* @__PURE__ */ React.createElement(Text3, null, props.category), /* @__PURE__ */ React.createElement(Text4, null, props.description)), /* @__PURE__ */ React.createElement(Container5, null, /* @__PURE__ */ React.createElement(Button, {
    projVariant: "button"
  }, "Add to cart"), /* @__PURE__ */ React.createElement(Button1, {
    projVariant: "button"
  }, /* @__PURE__ */ React.createElement(Icon, {
    viewBox: "0 0 1024 1024"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M755.188 64c-107.63 0-200.258 87.554-243.164 179-42.938-91.444-135.578-179-243.216-179-148.382 0-268.808 120.44-268.808 268.832 0 301.846 304.5 380.994 512.022 679.418 196.154-296.576 511.978-387.206 511.978-679.418 0-148.392-120.43-268.832-268.812-268.832z"
  }))))));
};
var Container = styled("div")({
  display: "flex",
  "max-width": "600px",
  position: "relative",
  "align-items": "center",
  "flex-direction": "column"
});
var Image = styled("img")({
  width: "100%",
  height: "300px",
  "object-fit": "cover",
  "object-position": "top"
});
var Container1 = styled("div")({
  flex: "1",
  display: "flex",
  padding: TOKENS.DlSpaceSpaceTwounits,
  "min-width": "50%",
  "align-items": "flex-start",
  "flex-direction": "column",
  "justify-content": "center",
  "@media(max-width: 767px)": {
    width: "100%",
    "justify-content": "space-between"
  }
});
var Container2 = styled("div")({
  flex: "0 0 auto",
  width: "auto",
  height: "auto",
  display: "flex",
  "align-items": "flex-start",
  "margin-bottom": TOKENS.DlSpaceSpaceTwounits,
  "flex-direction": "column",
  "justify-content": "flex-start"
});
var Container3 = styled("div")({
  display: "flex",
  "align-items": "flex-start",
  "flex-direction": "column",
  "justify-content": "center"
});
var Text = styled("h1")({
  color: TOKENS.DlColorGrayBlack,
  "margin-bottom": TOKENS.DlSpaceSpaceHalfunit,
  "text-transform": "uppercase"
});
var Container4 = styled("div")({
  display: "flex",
  "align-items": "center",
  "justify-content": "flex-start"
});
var Text1 = styled("span")({
  "font-size": "40px",
  "margin-right": TOKENS.DlSpaceSpaceHalfunit
});
var Text2 = styled("span")({
  "font-size": "40px",
  "font-weight": "300"
});
var Text3 = styled("span")({
  color: TOKENS.DlColorGray700
});
var Text4 = styled("span")({
  color: TOKENS.DlColorGray500,
  "margin-top": TOKENS.DlSpaceSpaceOneandhalfunits,
  "margin-bottom": TOKENS.DlSpaceSpaceOneandhalfunits
});
var Container5 = styled("div")({
  flex: "0 0 auto",
  width: "100%",
  display: "flex",
  "align-items": "stretch",
  "flex-direction": "row",
  "justify-content": "space-between"
});
var Button = styled("button")(projectStyleVariants, {
  color: TOKENS.DlColorGrayWhite,
  display: "flex",
  "font-style": "normal",
  "align-items": "center",
  "font-weight": "600",
  transition: "0.3s",
  "border-color": TOKENS.DlColorSuccess700,
  "background-color": TOKENS.DlColorSuccess700,
  "&:hover": {
    "border-color": TOKENS.DlColorSuccess300,
    "background-color": TOKENS.DlColorSuccess300
  }
});
var Button1 = styled("button")(projectStyleVariants, {
  display: "flex",
  "border-color": TOKENS.DlColorGray700,
  "flex-direction": "row"
});
var Icon = styled("svg")({
  fill: TOKENS.DlColorDanger700,
  width: "24px",
  height: "24px",
  transition: "0.3s",
  "&:hover": {
    transform: "scale(1.1)"
  }
});
ProductCard.defaultProps = {
  title: "Item Title",
  price: "99",
  category: "category",
  image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHNob2V8ZW58MHx8fHwxNjM2MTE2MDE1&ixlib=rb-1.2.1&h=300",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...",
  rootClassName: ""
};
ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string
};
var product_card_default = ProductCard;
export {
  product_card_default as default
};
