# gatbsy-image-agilitycms

With the release of [Gatsby V3](https://www.gatsbyjs.com/blog/gatsby-v3/) and the new [Gatsby Image plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-image), we were able to create `gatsby-image-agilitycms`. This is a custom image component that take's images stored within Agility CMS and handles all of the hard parts of displaying responsive images that follow best practices for performance on your website or application.

### Getting Started
There are a few steps you need to take to get started using the `gatsby-image-agilitycms` component:

1. Ensure you're using the latest version of our [Gatsby and Agility CMS Starter](https://github.com/agility/agility-gatsby-starter), or ensure you're using the latest version of our [`gatsby-source-agilitycms`](https://github.com/agility/gatsby-source-agilitycms) plugin in your project.

3. Install `gatsby-image-agilitycms`
   - `npm install @agility/gatsby-image-agilitycms`
   - `yarn add @agility/gatsby-image-agilitycms`

4. Import the AgilityImage Component into the file you wish to use it on:
   - `import { AgilityImage } from "@agility/gatsby-image-agilitycms"`

### Using the AgilityImage Component

The AgilityImage Component accepts the following props:

1. `image` = The object that contains your image
2. `alt` = Alternative text
3. `width` = Change the width of your image
4. `height` = Change the height of your image
5. `layout` = Determines the image sizes that are generated, as well as the resizing behavior of the image itself in the browser:
    - constrained
    - fixed
    - fullWidth
6. `aspectRation` = Forces an image to the specified aspect ratio, cropping if needed

Example: `<AgilityImage image={image} alt="A Cute Kitten" width={500} height={500} layout={fullWidth} />`

### Live Example

To view a live example our the `gatsby-image-agilitycms` in action, check out our [Gatsby and Agility CMS Starter.](https://agility-gatsby-starter-gatsbycloud.netlify.app/)

