This is a sample application that used next + webpack's buildHttp hook and loads esm modules.

There are three different scenarios in the example

- Loading a esm-module with css-modules.

Most of the esm-modules extract out the css and serve using `unpkg` like antd. But we would like to bundle css too.
So, the css is bundled as css-modules. And these are injected using `iife` into the `DOM`.

And since, NextJS don't have DOM for SSR in the server. We need to turn off `SSR` for the component and need to loaded it as 
dynamic component.

This beats, the SSR advantge but can be used in other cases where SSR is not priority. And no runtime need to be installed for just css.
Like styled-components, styled-system etc.

```jsx
const CardWithCSSModules = dynamic(() => 
  import('https://jscdn.teleporthq.io/product-card_6b939cf1-0df0-4bc5-997e-93c149109fc4.js'), 
{ ssr: false })

// Usage

<CardWithCSSModules />
```

- Loading a esm-module with styled-components

```jsx
import CardWithStyledComponents from 'https://jscdn.teleporthq.io/product-card_0fc4ab9e-f909-49ac-a96d-daf4947fc332.js'
```

Styled Comonents don't need `DOM` unlike `css-modules`. And so, this should work without disabling `SSR`.
But, NextJS and webpack throws a error. Which we can see from screenshot below.

<img src="https://raw.githubusercontent.com/JayaKrishnaNamburu/next-http-react/main/error.png" alt="error screen" />

```
Server Error
TypeError: styled_components__WEBPACK_IMPORTED_MODULE_3__ is not a function
```

But the same error can be worked around by disabling `SSR` for the same component.

```jsx
const CardWithStyledComponentsNoSSR = dynamic(() => 
  import('https://jscdn.teleporthq.io/product-card_0fc4ab9e-f909-49ac-a96d-daf4947fc332.js'), 
{ ssr: false })
```
