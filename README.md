# gatbsy-image-agilitycms

With the release of [Gatsby V3](https://www.gatsbyjs.com/blog/gatsby-v3/) and the new [Gatsby Image plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-image), we were able to create `gatsby-image-agilitycms`. This is a custom image component that take's images stored within Agility CMS and handles all of the hard parts of displaying responsive images that follow best practices for performance on your website or application.

### Getting Started
There are a few steps you need to take before you start using the `gatsby-image-agilitycms` component.

1. Update the package.json in your Gatsby project to use the Gatsby V3 and install the new Gatsby Image Plugin:
   - `npm install gatsby@latest`
   - `npm install gatsby-plugin-image`

2. Install `gatsby-image-agilitycms` and update the `gatsby-source-agilitycms` plugin to the latest version:
   - `npm install @agility/gatsby-image-agilitycms`
   - `npm install @agility/gatsby-source-agilitycms@latest`

### Using the AgilityImage Component

To use the AgilityImage Component: 

`import { AgilityImage } from "@agility/gatsby-image-agilitycms"`

The AgilityImage Component accepts the following props:

1. `image` = The object of your image from Agility.
5. `layout` = Determines the image sizes that are generated, as well as the resizing behavior of the image itself in the browser:
    - constrained
    - fixed
    - fullWidth

#### Example: 
`<AgilityImage image={image} layout={fullWidth} />`

### Live Example

To view a live example of the `gatsby-image-agilitycms` in action, check out our [Gatsby and Agility CMS Starter.](https://agility-gatsby-starter-gatsbycloud.netlify.app/)

