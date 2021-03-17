<span class="badge-npmversion"><a href="https://npmjs.org/package/@agility/gatsby-image-agilitycms" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@agility/gatsby-image-agilitycms.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/@agility/gatsby-image-agilitycms" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@agility/gatsby-image-agilitycms.svg" alt="NPM downloads" /></a></span>

# gatsby-image-agilitycms

With the release of [Gatsby V3](https://www.gatsbyjs.com/blog/gatsby-v3/) and the new [Gatsby Image plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-image), we were able to create `gatsby-image-agilitycms`. This is a custom image component that take's images stored within Agility CMS and handles all of the hard parts of displaying responsive images that follow best practices for performance on your website or application.

## Getting Started
There are a few steps you need to take before you start using the `gatsby-image-agilitycms` component.

1. Update the package.json in your Gatsby project to use the Gatsby V3 and install the new Gatsby Image Plugin:
   - `npm install gatsby@latest`
   - `npm install gatsby-plugin-image`

2. Install `gatsby-image-agilitycms` and update the `gatsby-source-agilitycms` plugin to the latest version:
   - `npm install @agility/gatsby-image-agilitycms`
   - `npm install @agility/gatsby-source-agilitycms@latest`

## Using the AgilityImage Component

To use the AgilityImage Component:

`import { AgilityImage } from "@agility/gatsby-image-agilitycms"`

The AgilityImage Component accepts the following props:

1. `image` = The object of your image from Agility.
5. `layout` = Determines the image sizes that are generated, as well as the resizing behavior of the image itself in the browser:
    - constrained
    - fixed
    - fullWidth

### Example:
`<AgilityImage image={image} layout={fullWidth} />`

## Live Example

To view a live example of the `gatsby-image-agilitycms` in action, check out our [Gatsby and Agility CMS Starter.](https://agility-gatsby-starter-gatsbycloud.netlify.app/)

## Resources
#### Agility CMS
- [Official Site](https://agilitycms.com/)
- [Documentation](https://help.agilitycms.com/hc/en-us)
- [Community Slack Channel](https://agilitycms-community.slack.com/join/shared_invite/enQtNzI2NDc3MzU4Njc2LWI2OTNjZTI3ZGY1NWRiNTYzNmEyNmI0MGZlZTRkYzI3NmRjNzkxYmI5YTZjNTg2ZTk4NGUzNjg5NzY3OWViZGI#/)
- [Agility CMS Gatsby Starter](https://agilitycms.com/starters/blog-with-gatsby)

### Gatsby
- [Official Site](https://www.gatsbyjs.com/)
- [Documentation](https://www.gatsbyjs.com/docs/)
- [Gatsby Source Plugin for Agility CMS](https://github.com/agility/gatsby-source-agilitycms)
