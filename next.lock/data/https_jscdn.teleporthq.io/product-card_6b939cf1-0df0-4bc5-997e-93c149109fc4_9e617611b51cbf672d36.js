// build/product-card.jsx
import React from "react";
import PropTypes from "prop-types";

// esbuild-css-modules-plugin-namespace:/var/folders/k2/x6kf23013ys65_pmjbl2rj780000gn/T/tmp-7193-Je1VnnUUgBXS/teleport-registry-packer/build/style.module.css.js
var digest = "4df2606a801378bc7aee0061787436d3651bdc72f04d77eca42c46baac24ef6b";
var css = `:root {
  --dl-color-gray-500: #595959;
  --dl-color-gray-700: #999999;
  --dl-color-gray-900: #D9D9D9;
  --dl-size-size-large: 144px;
  --dl-size-size-small: 48px;
  --dl-color-danger-300: #A22020;
  --dl-color-danger-500: #BF2626;
  --dl-color-danger-700: #E14747;
  --dl-color-gray-black: #000000;
  --dl-color-gray-white: #FFFFFF;
  --dl-size-size-medium: 96px;
  --dl-size-size-xlarge: 192px;
  --dl-size-size-xsmall: 16px;
  --dl-space-space-unit: 16px;
  --dl-color-primary-100: #003EB3;
  --dl-color-primary-300: #0074F0;
  --dl-color-primary-500: #14A9FF;
  --dl-color-primary-700: #85DCFF;
  --dl-color-success-300: #199033;
  --dl-color-success-500: #32A94C;
  --dl-color-success-700: #4CC366;
  --dl-size-size-xxlarge: 288px;
  --dl-size-size-maxwidth: 1400px;
  --dl-radius-radius-round: 50%;
  --dl-space-space-halfunit: 8px;
  --dl-space-space-sixunits: 96px;
  --dl-space-space-twounits: 32px;
  --dl-radius-radius-radius2: 2px;
  --dl-radius-radius-radius4: 4px;
  --dl-radius-radius-radius8: 8px;
  --dl-space-space-fiveunits: 80px;
  --dl-space-space-fourunits: 64px;
  --dl-space-space-threeunits: 48px;
  --dl-space-space-oneandhalfunits: 24px;
}
._button_181b6_37 {
  color: var(--dl-color-gray-black);
  display: inline-block;
  padding: 0.5rem 1rem;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: 4px;
  background-color: var(--dl-color-gray-white);
}
._input_181b6_46 {
  color: var(--dl-color-gray-black);
  cursor: auto;
  padding: 0.5rem 1rem;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: 4px;
  background-color: var(--dl-color-gray-white);
}
._textarea_181b6_55 {
  color: var(--dl-color-gray-black);
  cursor: auto;
  padding: 0.5rem;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: 4px;
  background-color: var(--dl-color-gray-white);
}
._teleport-menu-burger_181b6_64 {
  display: flex;
  align-items: center;
  justify-content: center;
}
._teleport-menu-mobile_181b6_69 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
._teleport-menu-close_181b6_82 {
  display: flex;
  align-items: center;
  justify-content: center;
}
._teleport-show_181b6_87 {
  display: flex !important;
}
._content_181b6_90 {
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  line-height: 1.15;
  text-transform: none;
  text-decoration: none;
}
._heading_181b6_98 {
  font-size: 32px;
  font-family: Inter;
  font-weight: 700;
  line-height: 1.15;
  text-transform: none;
  text-decoration: none;
}
`;
(function() {
  if (!document.getElementById(digest)) {
    var el = document.createElement("style");
    el.id = digest;
    el.textContent = css;
    document.head.appendChild(el);
  }
})();
var style_module_css_default = { "button": "_button_181b6_37", "input": "_input_181b6_46", "textarea": "_textarea_181b6_55", "teleport-menu-burger": "_teleport-menu-burger_181b6_64", "teleportMenuBurger": "_teleport-menu-burger_181b6_64", "teleport-menu-mobile": "_teleport-menu-mobile_181b6_69", "teleportMenuMobile": "_teleport-menu-mobile_181b6_69", "teleport-menu-close": "_teleport-menu-close_181b6_82", "teleportMenuClose": "_teleport-menu-close_181b6_82", "teleport-show": "_teleport-show_181b6_87", "teleportShow": "_teleport-show_181b6_87", "content": "_content_181b6_90", "heading": "_heading_181b6_98" };

// esbuild-css-modules-plugin-namespace:/var/folders/k2/x6kf23013ys65_pmjbl2rj780000gn/T/tmp-7193-Je1VnnUUgBXS/teleport-registry-packer/build/product-card.module.css.js
var digest2 = "e21fb4b663b7e91622944a471142fb767f0d94afd556094588beaa35998e93b1";
var css2 = `._container_lss6z_1 {
  display: flex;
  position: relative;
  max-width: 600px;
  align-items: center;
  flex-direction: column;
}
._image_lss6z_8 {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: top;
}
._container1_lss6z_14 {
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-twounits);
  min-width: 50%;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
._container2_lss6z_23 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
  justify-content: flex-start;
}
._container3_lss6z_33 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
._text_lss6z_39 {
  color: var(--dl-color-gray-black);
  margin-bottom: var(--dl-space-space-halfunit);
  text-transform: uppercase;
}
._container4_lss6z_44 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
._text1_lss6z_49 {
  font-size: 40px;
  margin-right: var(--dl-space-space-halfunit);
}
._text2_lss6z_53 {
  font-size: 40px;
  font-weight: 300;
}
._text3_lss6z_57 {
  color: var(--dl-color-gray-700);
}
._text4_lss6z_60 {
  color: var(--dl-color-gray-500);
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
._container5_lss6z_65 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
}
._button_lss6z_73 {
  color: var(--dl-color-gray-white);
  display: flex;
  font-style: normal;
  transition: 0.3s;
  align-items: center;
  font-weight: 600;
  border-color: var(--dl-color-success-700);
  background-color: var(--dl-color-success-700);
}
._button_lss6z_73:hover {
  border-color: var(--dl-color-success-300);
  background-color: var(--dl-color-success-300);
}
._button1_lss6z_87 {
  display: flex;
  border-color: var(--dl-color-gray-700);
  flex-direction: row;
}
._icon_lss6z_92 {
  fill: var(--dl-color-danger-700);
  width: 24px;
  height: 24px;
  transition: 0.3s;
}
._icon_lss6z_92:hover {
  transform: scale(1.1);
}
@media(max-width: 767px) {
  ._container1_lss6z_14 {
    width: 100%;
    justify-content: space-between;
  }
}
`;
(function() {
  if (!document.getElementById(digest2)) {
    var el = document.createElement("style");
    el.id = digest2;
    el.textContent = css2;
    document.head.appendChild(el);
  }
})();
var product_card_module_css_default = { "container": "_container_lss6z_1", "image": "_image_lss6z_8", "container1": "_container1_lss6z_14", "container2": "_container2_lss6z_23", "container3": "_container3_lss6z_33", "text": "_text_lss6z_39", "container4": "_container4_lss6z_44", "text1": "_text1_lss6z_49", "text2": "_text2_lss6z_53", "text3": "_text3_lss6z_57", "text4": "_text4_lss6z_60", "container5": "_container5_lss6z_65", "button": "_button_lss6z_73", "button1": "_button1_lss6z_87", "icon": "_icon_lss6z_92" };

// build/product-card.jsx
var ProductCard = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: product_card_module_css_default["container"]
  }, /* @__PURE__ */ React.createElement("img", {
    alt: "image",
    src: props.image,
    className: product_card_module_css_default["image"]
  }), /* @__PURE__ */ React.createElement("div", {
    className: product_card_module_css_default["container1"]
  }, /* @__PURE__ */ React.createElement("div", {
    className: product_card_module_css_default["container2"]
  }, /* @__PURE__ */ React.createElement("div", {
    className: product_card_module_css_default["container3"]
  }, /* @__PURE__ */ React.createElement("h1", {
    className: product_card_module_css_default["text"]
  }, props.title)), /* @__PURE__ */ React.createElement("div", {
    className: product_card_module_css_default["container4"]
  }, /* @__PURE__ */ React.createElement("span", {
    className: product_card_module_css_default["text1"]
  }, props.price), /* @__PURE__ */ React.createElement("span", {
    className: product_card_module_css_default["text2"]
  }, "$")), /* @__PURE__ */ React.createElement("span", {
    className: product_card_module_css_default["text3"]
  }, props.category), /* @__PURE__ */ React.createElement("span", {
    className: product_card_module_css_default["text4"]
  }, props.description)), /* @__PURE__ */ React.createElement("div", {
    className: product_card_module_css_default["container5"]
  }, /* @__PURE__ */ React.createElement("button", {
    className: ` ${product_card_module_css_default["button"]} ${style_module_css_default["button"]} `
  }, "Add to cart"), /* @__PURE__ */ React.createElement("button", {
    className: ` ${product_card_module_css_default["button1"]} ${style_module_css_default["button"]} `
  }, /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 1024 1024",
    className: product_card_module_css_default["icon"]
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M755.188 64c-107.63 0-200.258 87.554-243.164 179-42.938-91.444-135.578-179-243.216-179-148.382 0-268.808 120.44-268.808 268.832 0 301.846 304.5 380.994 512.022 679.418 196.154-296.576 511.978-387.206 511.978-679.418 0-148.392-120.43-268.832-268.812-268.832z"
  }))))));
};
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
