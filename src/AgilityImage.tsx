
import * as React from "react"
import { GatsbyImage, getImageData, getLowResolutionImageURL, GatsbyImageProps, IGetImageDataArgs, ImageFormat } from "gatsby-plugin-image"
import { FunctionComponent } from "react"


function urlBuilder({ baseUrl, width, height, format, options }) {
	return `${baseUrl}?w=${width}&h=${height}`
}

const  getAgilityImageData = ({
	image,
	width,
	height,
	layout,
	backgroundColor,
	breakpoints,
	formats,
	aspectRatio,
	options }) => {



  return getImageData({
    baseUrl: image.url,
    sourceWidth: image.width,
    sourceHeight: image.height,
	width,
    height,
    layout,
    backgroundColor,
	breakpoints,
	formats,
    aspectRatio,
    options,
    urlBuilder,
    pluginName: "gatsby-agility-image",
    // TODO: when we support auto-format/content negotiation, pass this as the formats array
    //formats: ["auto"],
	placeholderURL: `${image.url}?w=${20}&q=60`,
  })

}

export interface AgilityImageObj {
	url: string,
	label:string | null,
	height: number,
	width: number
}

export interface AgilityImageProps
  //This is the type for your image data function
  extends IGetImageDataArgs,
    // We omit "image" because that's the prop that we generate,
    Omit<GatsbyImageProps, "image"> {
	image: AgilityImageObj

}

export const AgilityImage: FunctionComponent<AgilityImageProps> = ({ image,
	width,
	height,
	layout,
	backgroundColor,
	aspectRatio,
	options,
	formats,
	breakpoints,
	... props }) => {

	const imageData = getAgilityImageData({ image,
		width,
		height,
		layout,
		backgroundColor,
		formats,
		breakpoints,
		aspectRatio,
		options })

	const alt = image.label || props.alt || ""

	return <GatsbyImage  image={imageData} alt={alt} {...props} />
}

module.exports = {
	 AgilityImage
}
