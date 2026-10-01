---
id: "en-php-guide-imagick-constants"
language: "php"
lang: "en"
category: "guide"
name: "imagick.constants"
title: "Predefined Constants"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`imagick::COLOR_BLACK` (`int`)** — Black color
- **`imagick::COLOR_BLUE` (`int`)** — Blue color
- **`imagick::COLOR_CYAN` (`int`)** — Cyan color
- **`imagick::COLOR_GREEN` (`int`)** — Green color
- **`imagick::COLOR_RED` (`int`)** — Red color
- **`imagick::COLOR_YELLOW` (`int`)** — Yellow color
- **`imagick::COLOR_MAGENTA` (`int`)** — Magenta color
- **`imagick::COLOR_OPACITY` (`int`)** — Color's opacity
- **`imagick::COLOR_ALPHA` (`int`)** — Color's alpha
- **`imagick::COLOR_FUZZ` (`int`)** — Color's fuzz

- **`imagick::DISPOSE_UNRECOGNIZED` (`int`)** — Unrecognized dispose type
- **`imagick::DISPOSE_UNDEFINED` (`int`)** — Undefined dispose type
- **`imagick::DISPOSE_NONE` (`int`)** — No dispose type defined
- **`imagick::DISPOSE_BACKGROUND` (`int`)** — Dispose background
- **`imagick::DISPOSE_PREVIOUS` (`int`)** — Dispose previous

- **`imagick::COMPOSITE_DEFAULT` (`int`)** — The default composite operator
- **`imagick::COMPOSITE_UNDEFINED` (`int`)** — Undefined composite operator
- **`imagick::COMPOSITE_NO` (`int`)** — No composite operator defined
- **`imagick::COMPOSITE_ADD` (`int`)** — The result of image + image
- **`imagick::COMPOSITE_ATOP` (`int`)** — The result is the same shape as image, with composite image obscuring image where the image shapes overlap
- **`imagick::COMPOSITE_BLEND` (`int`)** — Blends the image
- **`imagick::COMPOSITE_BUMPMAP` (`int`)** — The same as COMPOSITE_MULTIPLY, except the source is converted to grayscale first.
- **`imagick::COMPOSITE_CLEAR` (`int`)** — Makes the target image transparent
- **`imagick::COMPOSITE_COLORBURN` (`int`)** — Darkens the destination image to reflect the source image
- **`imagick::COMPOSITE_COLORDODGE` (`int`)** — Brightens the destination image to reflect the source image
- **`imagick::COMPOSITE_COLORIZE` (`int`)** — Colorizes the target image using the composite image
- **`imagick::COMPOSITE_COPYBLACK` (`int`)** — Copies black from the source to target
- **`imagick::COMPOSITE_COPYBLUE` (`int`)** — Copies blue from the source to target
- **`imagick::COMPOSITE_COPY` (`int`)** — Copies the source image on the target image
- **`imagick::COMPOSITE_COPYCYAN` (`int`)** — Copies cyan from the source to target
- **`imagick::COMPOSITE_COPYGREEN` (`int`)** — Copies green from the source to target
- **`imagick::COMPOSITE_COPYMAGENTA` (`int`)** — Copies magenta from the source to target
- **`imagick::COMPOSITE_COPYOPACITY` (`int`)** — Copies opacity from the source to target
- **`imagick::COMPOSITE_COPYRED` (`int`)** — Copies red from the source to target
- **`imagick::COMPOSITE_COPYYELLOW` (`int`)** — Copies yellow from the source to target
- **`imagick::COMPOSITE_DARKEN` (`int`)** — Darkens the target image
- **`imagick::COMPOSITE_DSTATOP` (`int`)** — The part of the destination lying inside of the source is composited over the source and replaces the destination
- **`imagick::COMPOSITE_DST` (`int`)** — The target is left untouched
- **`imagick::COMPOSITE_DSTIN` (`int`)** — The parts inside the source replace the target
- **`imagick::COMPOSITE_DSTOUT` (`int`)** — The parts outside the source replace the target
- **`imagick::COMPOSITE_DSTOVER` (`int`)** — Target replaces the source
- **`imagick::COMPOSITE_DIFFERENCE` (`int`)** — Subtracts the darker of the two constituent colors from the lighter
- **`imagick::COMPOSITE_DISPLACE` (`int`)** — Shifts target image pixels as defined by the source
- **`imagick::COMPOSITE_DISSOLVE` (`int`)** — Dissolves the source in to the target
- **`imagick::COMPOSITE_EXCLUSION` (`int`)** — Produces an effect similar to that of imagick::COMPOSITE_DIFFERENCE, but appears as lower contrast
- **`imagick::COMPOSITE_HARDLIGHT` (`int`)** — Multiplies or screens the colors, dependent on the source color value
- **`imagick::COMPOSITE_HUE` (`int`)** — Modifies the hue of the target as defined by source
- **`imagick::COMPOSITE_IN` (`int`)** — Composites source into the target
- **`imagick::COMPOSITE_LIGHTEN` (`int`)** — Lightens the target as defined by source
- **`imagick::COMPOSITE_LUMINIZE` (`int`)** — Luminizes the target as defined by source
- **`imagick::COMPOSITE_MINUS` (`int`)** — Subtracts the source from the target
- **`imagick::COMPOSITE_MODULATE` (`int`)** — Modulates the target brightness, saturation and hue as defined by source
- **`imagick::COMPOSITE_MULTIPLY` (`int`)** — Multiplies the target to the source
- **`imagick::COMPOSITE_OUT` (`int`)** — Composites outer parts of the source on the target
- **`imagick::COMPOSITE_OVER` (`int`)** — Composites source over the target
- **`imagick::COMPOSITE_OVERLAY` (`int`)** — Overlays the source on the target
- **`imagick::COMPOSITE_PLUS` (`int`)** — Adds the source to the target
- **`imagick::COMPOSITE_REPLACE` (`int`)** — Replaces the target with the source
- **`imagick::COMPOSITE_SATURATE` (`int`)** — Saturates the target as defined by the source
- **`imagick::COMPOSITE_SCREEN` (`int`)** — The source and destination are complemented and then multiplied and then replace the destination
- **`imagick::COMPOSITE_SOFTLIGHT` (`int`)** — Darkens or lightens the colors, dependent on the source
- **`imagick::COMPOSITE_SRCATOP` (`int`)** — The part of the source lying inside of the destination is composited onto the destination
- **`imagick::COMPOSITE_SRC` (`int`)** — The source is copied to the destination
- **`imagick::COMPOSITE_SRCIN` (`int`)** — The part of the source lying inside of the destination replaces the destination
- **`imagick::COMPOSITE_SRCOUT` (`int`)** — The part of the source lying outside of the destination replaces the destination
- **`imagick::COMPOSITE_SRCOVER` (`int`)** — The source replaces the destination
- **`imagick::COMPOSITE_SUBTRACT` (`int`)** — Subtract the colors in the source image from the destination image
- **`imagick::COMPOSITE_THRESHOLD` (`int`)** — The source is composited on the target as defined by source threshold
- **`imagick::COMPOSITE_XOR` (`int`)** — The part of the source that lies outside of the destination is combined with the part of the destination that lies outside of the source

- **`imagick::MONTAGEMODE_FRAME` (`int`)**
- **`imagick::MONTAGEMODE_UNFRAME` (`int`)**
- **`imagick::MONTAGEMODE_CONCATENATE` (`int`)**

- **`imagick::STYLE_NORMAL` (`int`)**
- **`imagick::STYLE_ITALIC` (`int`)**
- **`imagick::STYLE_OBLIQUE` (`int`)**
- **`imagick::STYLE_ANY` (`int`)**

- **`imagick::FILTER_UNDEFINED` (`int`)**
- **`imagick::FILTER_POINT` (`int`)**
- **`imagick::FILTER_BOX` (`int`)**
- **`imagick::FILTER_TRIANGLE` (`int`)**
- **`imagick::FILTER_HERMITE` (`int`)**
- **`imagick::FILTER_HANNING` (`int`)**
- **`imagick::FILTER_HAMMING` (`int`)**
- **`imagick::FILTER_BLACKMAN` (`int`)**
- **`imagick::FILTER_GAUSSIAN` (`int`)**
- **`imagick::FILTER_QUADRATIC` (`int`)**
- **`imagick::FILTER_CUBIC` (`int`)**
- **`imagick::FILTER_CATROM` (`int`)**
- **`imagick::FILTER_MITCHELL` (`int`)**
- **`imagick::FILTER_LANCZOS` (`int`)**
- **`imagick::FILTER_BESSEL` (`int`)**
- **`imagick::FILTER_SINC` (`int`)**

- **`imagick::IMGTYPE_UNDEFINED` (`int`)** — The image type is not known. `Imagick::setImageType()` converts nothing for this value, but still records it on the image.
- **`imagick::IMGTYPE_BILEVEL` (`int`)** — Two colors only. The image is converted to grayscale, its contrast is stretched, and every pixel becomes either black or white depending on whether it is lighter or darker than mid-gray; any alpha channel is discarded.
- **`imagick::IMGTYPE_GRAYSCALE` (`int`)** — Shades of gray. The image is converted to the grayscale colorspace, and any alpha channel is discarded.
- **`imagick::IMGTYPE_GRAYSCALEMATTE` (`int`)** — Shades of gray with an alpha channel. The same as `imagick::IMGTYPE_GRAYSCALE`, except that the alpha channel is kept, and if the image has none, an opaque one is added.
- **`imagick::IMGTYPE_PALETTE` (`int`)** — Indexed color. The image is converted to sRGB and, if it is not already indexed or has more than 256 colors, it is quantized to 256 colors; any alpha channel is discarded.
- **`imagick::IMGTYPE_PALETTEMATTE` (`int`)** — Indexed color with an alpha channel. The image is converted to sRGB, the alpha channel is kept, and if the image has none, an opaque one is added. Unlike `imagick::IMGTYPE_PALETTE`, the colors are quantized even when the image is already indexed, and the alpha channel is included in the quantization.
- **`imagick::IMGTYPE_TRUECOLOR` (`int`)** — Direct color: one red, green, and blue value per pixel, with no palette. The image is converted to sRGB, and any alpha channel is discarded.
- **`imagick::IMGTYPE_TRUECOLORMATTE` (`int`)** — Direct color with an alpha channel. The same as `imagick::IMGTYPE_TRUECOLOR`, except that the alpha channel is kept, and if the image has none, an opaque one is added.
- **`imagick::IMGTYPE_COLORSEPARATION` (`int`)** — One channel per printing ink, with no palette. The image is converted to the CMYK colorspace, and any alpha channel is discarded.
- **`imagick::IMGTYPE_COLORSEPARATIONMATTE` (`int`)** — One channel per printing ink, with no palette, plus an alpha channel. The same as `imagick::IMGTYPE_COLORSEPARATION`, except that the alpha channel is kept, and if the image has none, an opaque one is added.
- **`imagick::IMGTYPE_PALETTEBILEVELMATTE` (`int`)** — Indexed color with a fully transparent or fully opaque alpha channel. The image is converted to sRGB, an opaque alpha channel is added if it has none, that channel alone is reduced to two values, and the colors are then quantized. This is the type of a PNG using binary transparency.
- **`imagick::IMGTYPE_OPTIMIZE` (`int`)** — `Imagick::setImageType()` converts nothing for this value, but still records it on the image.

- **`imagick::RESOLUTION_UNDEFINED` (`int`)**
- **`imagick::RESOLUTION_PIXELSPERINCH` (`int`)**
- **`imagick::RESOLUTION_PIXELSPERCENTIMETER` (`int`)**

- **`imagick::COMPRESSION_UNDEFINED` (`int`)**
- **`imagick::COMPRESSION_NO` (`int`)**
- **`imagick::COMPRESSION_BZIP` (`int`)**
- **`imagick::COMPRESSION_FAX` (`int`)**
- **`imagick::COMPRESSION_GROUP4` (`int`)**
- **`imagick::COMPRESSION_JPEG` (`int`)**
- **`imagick::COMPRESSION_JPEG2000` (`int`)**
- **`imagick::COMPRESSION_LOSSLESSJPEG` (`int`)**
- **`imagick::COMPRESSION_LZW` (`int`)**
- **`imagick::COMPRESSION_RLE` (`int`)**
- **`imagick::COMPRESSION_ZIP` (`int`)**
- **`imagick::COMPRESSION_DXT1` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.0 or higher.
- **`imagick::COMPRESSION_DXT3` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.0 or higher.
- **`imagick::COMPRESSION_DXT5` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.0 or higher.

- **`imagick::PAINT_POINT` (`int`)**
- **`imagick::PAINT_REPLACE` (`int`)**
- **`imagick::PAINT_FLOODFILL` (`int`)**
- **`imagick::PAINT_FILLTOBORDER` (`int`)**
- **`imagick::PAINT_RESET` (`int`)**

- **`imagick::GRAVITY_NORTHWEST` (`int`)**
- **`imagick::GRAVITY_NORTH` (`int`)**
- **`imagick::GRAVITY_NORTHEAST` (`int`)**
- **`imagick::GRAVITY_WEST` (`int`)**
- **`imagick::GRAVITY_CENTER` (`int`)**
- **`imagick::GRAVITY_EAST` (`int`)**
- **`imagick::GRAVITY_SOUTHWEST` (`int`)**
- **`imagick::GRAVITY_SOUTH` (`int`)**
- **`imagick::GRAVITY_SOUTHEAST` (`int`)**

- **`imagick::STRETCH_NORMAL` (`int`)**
- **`imagick::STRETCH_ULTRACONDENSED` (`int`)**
- **`imagick::STRETCH_CONDENSED` (`int`)**
- **`imagick::STRETCH_SEMICONDENSED` (`int`)**
- **`imagick::STRETCH_SEMIEXPANDED` (`int`)**
- **`imagick::STRETCH_EXPANDED` (`int`)**
- **`imagick::STRETCH_EXTRAEXPANDED` (`int`)**
- **`imagick::STRETCH_ULTRAEXPANDED` (`int`)**
- **`imagick::STRETCH_ANY` (`int`)**

- **`imagick::ALIGN_UNDEFINED` (`int`)**
- **`imagick::ALIGN_LEFT` (`int`)**
- **`imagick::ALIGN_CENTER` (`int`)**
- **`imagick::ALIGN_RIGHT` (`int`)**

- **`imagick::DECORATION_NO` (`int`)**
- **`imagick::DECORATION_UNDERLINE` (`int`)**
- **`imagick::DECORATION_OVERLINE` (`int`)**
- **`imagick::DECORATION_LINETROUGH` (`int`)**

- **`imagick::NOISE_UNIFORM` (`int`)**
- **`imagick::NOISE_GAUSSIAN` (`int`)**
- **`imagick::NOISE_MULTIPLICATIVEGAUSSIAN` (`int`)**
- **`imagick::NOISE_IMPULSE` (`int`)**
- **`imagick::NOISE_LAPLACIAN` (`int`)**
- **`imagick::NOISE_POISSON` (`int`)**
- **`imagick::NOISE_RANDOM` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.6 or higher.

- **`imagick::CHANNEL_UNDEFINED` (`int`)**
- **`imagick::CHANNEL_RED` (`int`)**
- **`imagick::CHANNEL_GRAY` (`int`)**
- **`imagick::CHANNEL_CYAN` (`int`)**
- **`imagick::CHANNEL_GREEN` (`int`)**
- **`imagick::CHANNEL_MAGENTA` (`int`)**
- **`imagick::CHANNEL_BLUE` (`int`)**
- **`imagick::CHANNEL_YELLOW` (`int`)**
- **`imagick::CHANNEL_ALPHA` (`int`)**
- **`imagick::CHANNEL_OPACITY` (`int`)**
- **`imagick::CHANNEL_MATTE` (`int`)**
- **`imagick::CHANNEL_BLACK` (`int`)**
- **`imagick::CHANNEL_INDEX` (`int`)**
- **`imagick::CHANNEL_ALL` (`int`)**
- **`imagick::CHANNEL_DEFAULT` (`int`)**

- **`imagick::METRIC_UNDEFINED` (`int`)**
- **`imagick::METRIC_MEANABSOLUTEERROR` (`int`)**
- **`imagick::METRIC_MEANSQUAREERROR` (`int`)**
- **`imagick::METRIC_PEAKABSOLUTEERROR` (`int`)**
- **`imagick::METRIC_PEAKSIGNALTONOISERATIO` (`int`)**
- **`imagick::METRIC_ROOTMEANSQUAREDERROR` (`int`)**

- **`imagick::PIXEL_CHAR` (`int`)**
- **`imagick::PIXEL_DOUBLE` (`int`)**
- **`imagick::PIXEL_FLOAT` (`int`)**
- **`imagick::PIXEL_INTEGER` (`int`)** — Only available for ImageMagick < 7.
- **`imagick::PIXEL_LONG` (`int`)**
- **`imagick::PIXEL_QUANTUM` (`int`)**
- **`imagick::PIXEL_SHORT` (`int`)**

- **`imagick::EVALUATE_UNDEFINED` (`int`)**
- **`imagick::EVALUATE_ADD` (`int`)**
- **`imagick::EVALUATE_AND` (`int`)**
- **`imagick::EVALUATE_DIVIDE` (`int`)**
- **`imagick::EVALUATE_LEFTSHIFT` (`int`)**
- **`imagick::EVALUATE_MAX` (`int`)**
- **`imagick::EVALUATE_MIN` (`int`)**
- **`imagick::EVALUATE_MULTIPLY` (`int`)**
- **`imagick::EVALUATE_OR` (`int`)**
- **`imagick::EVALUATE_RIGHTSHIFT` (`int`)**
- **`imagick::EVALUATE_SET` (`int`)**
- **`imagick::EVALUATE_SUBTRACT` (`int`)**
- **`imagick::EVALUATE_XOR` (`int`)**
- **`imagick::EVALUATE_POW` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.4 or higher.
- **`imagick::EVALUATE_LOG` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.4 or higher.
- **`imagick::EVALUATE_THRESHOLD` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.4 or higher.
- **`imagick::EVALUATE_THRESHOLDBLACK` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.4 or higher.
- **`imagick::EVALUATE_THRESHOLDWHITE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.4 or higher.
- **`imagick::EVALUATE_GAUSSIANNOISE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.4 or higher.
- **`imagick::EVALUATE_IMPULSENOISE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.4 or higher.
- **`imagick::EVALUATE_LAPLACIANNOISE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.4 or higher.
- **`imagick::EVALUATE_MULTIPLICATIVENOISE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.4 or higher.
- **`imagick::EVALUATE_POISSONNOISE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.4 or higher.
- **`imagick::EVALUATE_UNIFORMNOISE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.4 or higher.
- **`imagick::EVALUATE_COSINE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.4 or higher.
- **`imagick::EVALUATE_SINE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.4 or higher.
- **`imagick::EVALUATE_ADDMODULUS` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.4 or higher.

- **`imagick::COLORSPACE_UNDEFINED` (`int`)**
- **`imagick::COLORSPACE_RGB` (`int`)**
- **`imagick::COLORSPACE_GRAY` (`int`)**
- **`imagick::COLORSPACE_TRANSPARENT` (`int`)**
- **`imagick::COLORSPACE_OHTA` (`int`)**
- **`imagick::COLORSPACE_LAB` (`int`)**
- **`imagick::COLORSPACE_XYZ` (`int`)**
- **`imagick::COLORSPACE_YCBCR` (`int`)**
- **`imagick::COLORSPACE_YCC` (`int`)**
- **`imagick::COLORSPACE_YIQ` (`int`)**
- **`imagick::COLORSPACE_YPBPR` (`int`)**
- **`imagick::COLORSPACE_YUV` (`int`)**
- **`imagick::COLORSPACE_CMYK` (`int`)**
- **`imagick::COLORSPACE_SRGB` (`int`)**
- **`imagick::COLORSPACE_HSB` (`int`)**
- **`imagick::COLORSPACE_HSL` (`int`)**
- **`imagick::COLORSPACE_HWB` (`int`)**
- **`imagick::COLORSPACE_REC601LUMA` (`int`)**
- **`imagick::COLORSPACE_REC709LUMA` (`int`)**
- **`imagick::COLORSPACE_LOG` (`int`)**
- **`imagick::COLORSPACE_CMY` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.2 or higher.

- **`imagick::VIRTUALPIXELMETHOD_UNDEFINED` (`int`)**
- **`imagick::VIRTUALPIXELMETHOD_BACKGROUND` (`int`)**
- **`imagick::VIRTUALPIXELMETHOD_CONSTANT` (`int`)**
- **`imagick::VIRTUALPIXELMETHOD_EDGE` (`int`)**
- **`imagick::VIRTUALPIXELMETHOD_MIRROR` (`int`)**
- **`imagick::VIRTUALPIXELMETHOD_TILE` (`int`)**
- **`imagick::VIRTUALPIXELMETHOD_TRANSPARENT` (`int`)**
- **`imagick::VIRTUALPIXELMETHOD_MASK` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.2 or higher.
- **`imagick::VIRTUALPIXELMETHOD_BLACK` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.2 or higher.
- **`imagick::VIRTUALPIXELMETHOD_GRAY` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.2 or higher.
- **`imagick::VIRTUALPIXELMETHOD_WHITE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.2 or higher.
- **`imagick::VIRTUALPIXELMETHOD_HORIZONTALTILE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.3 or higher.
- **`imagick::VIRTUALPIXELMETHOD_VERTICALTILE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.3 or higher.

- **`imagick::PREVIEW_UNDEFINED` (`int`)**
- **`imagick::PREVIEW_ROTATE` (`int`)**
- **`imagick::PREVIEW_SHEAR` (`int`)**
- **`imagick::PREVIEW_ROLL` (`int`)**
- **`imagick::PREVIEW_HUE` (`int`)**
- **`imagick::PREVIEW_SATURATION` (`int`)**
- **`imagick::PREVIEW_BRIGHTNESS` (`int`)**
- **`imagick::PREVIEW_GAMMA` (`int`)**
- **`imagick::PREVIEW_SPIFF` (`int`)**
- **`imagick::PREVIEW_DULL` (`int`)**
- **`imagick::PREVIEW_GRAYSCALE` (`int`)**
- **`imagick::PREVIEW_QUANTIZE` (`int`)**
- **`imagick::PREVIEW_DESPECKLE` (`int`)**
- **`imagick::PREVIEW_REDUCENOISE` (`int`)**
- **`imagick::PREVIEW_ADDNOISE` (`int`)**
- **`imagick::PREVIEW_SHARPEN` (`int`)**
- **`imagick::PREVIEW_BLUR` (`int`)**
- **`imagick::PREVIEW_THRESHOLD` (`int`)**
- **`imagick::PREVIEW_EDGEDETECT` (`int`)**
- **`imagick::PREVIEW_SPREAD` (`int`)**
- **`imagick::PREVIEW_SOLARIZE` (`int`)**
- **`imagick::PREVIEW_SHADE` (`int`)**
- **`imagick::PREVIEW_RAISE` (`int`)**
- **`imagick::PREVIEW_SEGMENT` (`int`)**
- **`imagick::PREVIEW_SWIRL` (`int`)**
- **`imagick::PREVIEW_IMPLODE` (`int`)**
- **`imagick::PREVIEW_WAVE` (`int`)**
- **`imagick::PREVIEW_OILPAINT` (`int`)**
- **`imagick::PREVIEW_CHARCOALDRAWING` (`int`)**
- **`imagick::PREVIEW_JPEG` (`int`)**

- **`imagick::RENDERINGINTENT_UNDEFINED` (`int`)**
- **`imagick::RENDERINGINTENT_SATURATION` (`int`)**
- **`imagick::RENDERINGINTENT_PERCEPTUAL` (`int`)**
- **`imagick::RENDERINGINTENT_ABSOLUTE` (`int`)**
- **`imagick::RENDERINGINTENT_RELATIVE` (`int`)**

- **`imagick::INTERLACE_UNDEFINED` (`int`)**
- **`imagick::INTERLACE_NO` (`int`)**
- **`imagick::INTERLACE_LINE` (`int`)**
- **`imagick::INTERLACE_PLANE` (`int`)**
- **`imagick::INTERLACE_PARTITION` (`int`)**
- **`imagick::INTERLACE_GIF` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.4 or higher.
- **`imagick::INTERLACE_JPEG` (`int`)**
- **`imagick::INTERLACE_PNG` (`int`)**

- **`imagick::FILLRULE_UNDEFINED` (`int`)**
- **`imagick::FILLRULE_EVENODD` (`int`)**
- **`imagick::FILLRULE_NONZERO` (`int`)**

- **`imagick::PATHUNITS_UNDEFINED` (`int`)**
- **`imagick::PATHUNITS_USERSPACE` (`int`)**
- **`imagick::PATHUNITS_USERSPACEONUSE` (`int`)**
- **`imagick::PATHUNITS_OBJECTBOUNDINGBOX` (`int`)**

- **`imagick::LINECAP_UNDEFINED` (`int`)**
- **`imagick::LINECAP_BUTT` (`int`)**
- **`imagick::LINECAP_ROUND` (`int`)**
- **`imagick::LINECAP_SQUARE` (`int`)**

- **`imagick::LINEJOIN_UNDEFINED` (`int`)**
- **`imagick::LINEJOIN_MITER` (`int`)**
- **`imagick::LINEJOIN_ROUND` (`int`)**
- **`imagick::LINEJOIN_BEVEL` (`int`)**

- **`imagick::RESOURCETYPE_UNDEFINED` (`int`)**
- **`imagick::RESOURCETYPE_AREA` (`int`)** — Set the maximum width * height of an image that can reside in the pixel cache memory.
- **`imagick::RESOURCETYPE_DISK` (`int`)** — Set maximum amount of disk space in bytes permitted for use by the pixel cache.
- **`imagick::RESOURCETYPE_FILE` (`int`)** — Set maximum number of open pixel cache files.
- **`imagick::RESOURCETYPE_MAP` (`int`)** — Set maximum amount of memory map in bytes to allocate for the pixel cache.
- **`imagick::RESOURCETYPE_MEMORY` (`int`)** — Set maximum amount of memory in bytes to allocate for the pixel cache from the heap.
- **`imagick::RESOURCETYPE_THREAD` (`int`)** — Set maximum parallel threads. This constant is available if Imagick has been compiled against ImageMagick version 6.7.8 or higher.

- **`imagick::LAYERMETHOD_UNDEFINED` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.2.9 or higher.
- **`imagick::LAYERMETHOD_COALESCE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.2.9 or higher.
- **`imagick::LAYERMETHOD_COMPAREANY` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.2.9 or higher.
- **`imagick::LAYERMETHOD_COMPARECLEAR` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.2.9 or higher.
- **`imagick::LAYERMETHOD_COMPAREOVERLAY` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.2.9 or higher.
- **`imagick::LAYERMETHOD_DISPOSE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.2.9 or higher.
- **`imagick::LAYERMETHOD_OPTIMIZE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.2.9 or higher.
- **`imagick::LAYERMETHOD_OPTIMIZEPLUS` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.2.9 or higher.
- **`imagick::LAYERMETHOD_OPTIMIZEIMAGE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.0 or higher.
- **`imagick::LAYERMETHOD_OPTIMIZETRANS` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.0 or higher.
- **`imagick::LAYERMETHOD_REMOVEDUPS` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.0 or higher.
- **`imagick::LAYERMETHOD_REMOVEZERO` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.0 or higher.
- **`imagick::LAYERMETHOD_COMPOSITE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.0 or higher.
- **`imagick::LAYERMETHOD_MERGE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.7 or higher.
- **`imagick::LAYERMETHOD_FLATTEN` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.7 or higher.
- **`imagick::LAYERMETHOD_MOSAIC` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.7 or higher.

- **`imagick::ORIENTATION_UNDEFINED` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.0 or higher.
- **`imagick::ORIENTATION_TOPLEFT` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.0 or higher.
- **`imagick::ORIENTATION_TOPRIGHT` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.0 or higher.
- **`imagick::ORIENTATION_BOTTOMRIGHT` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.0 or higher.
- **`imagick::ORIENTATION_BOTTOMLEFT` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.0 or higher.
- **`imagick::ORIENTATION_LEFTTOP` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.0 or higher.
- **`imagick::ORIENTATION_RIGHTTOP` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.0 or higher.
- **`imagick::ORIENTATION_RIGHTBOTTOM` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.0 or higher.
- **`imagick::ORIENTATION_LEFTBOTTOM` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.0 or higher.

- **`imagick::DISTORTION_UNDEFINED` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.6 or higher.
- **`imagick::DISTORTION_AFFINE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.6 or higher.
- **`imagick::DISTORTION_AFFINEPROJECTION` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.6 or higher.
- **`imagick::DISTORTION_ARC` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.6 or higher.
- **`imagick::DISTORTION_BILINEAR` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.6 or higher.
- **`imagick::DISTORTION_PERSPECTIVE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.6 or higher.
- **`imagick::DISTORTION_PERSPECTIVEPROJECTION` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.6 or higher.
- **`imagick::DISTORTION_SCALEROTATETRANSLATE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.6 or higher.
- **`imagick::DISTORTION_POLYNOMIAL` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::DISTORTION_POLAR` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::DISTORTION_DEPOLAR` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::DISTORTION_BARREL` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::DISTORTION_BARRELINVERSE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::DISTORTION_SHEPARDS` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::DISTORTION_SENTINEL` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.

- **`imagick::ALPHACHANNEL_ACTIVATE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.8 or higher.
- **`imagick::ALPHACHANNEL_DEACTIVATE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.8 or higher.
- **`imagick::ALPHACHANNEL_RESET` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.8 or higher.
- **`imagick::ALPHACHANNEL_SET` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.8 or higher.
- **`imagick::ALPHACHANNEL_UNDEFINED` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::ALPHACHANNEL_COPY` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::ALPHACHANNEL_EXTRACT` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::ALPHACHANNEL_OPAQUE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::ALPHACHANNEL_SHAPE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::ALPHACHANNEL_TRANSPARENT` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::ALPHACHANNEL_BACKGROUND` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.5.3 or higher.
- **`imagick::ALPHACHANNEL_REMOVE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.7.8 or higher.
- **`imagick::ALPHACHANNEL_ASSOCIATE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.9.0 or higher.
- **`imagick::ALPHACHANNEL_DISSOCIATE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.9.0 or higher.
- **`imagick::ALPHACHANNEL_ON` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 7.0.0 or higher.
- **`imagick::ALPHACHANNEL_OFF` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 7.0.0 or higher.
- **`imagick::ALPHACHANNEL_DISCRETE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 7.0.0 or higher.

- **`imagick::SPARSECOLORMETHOD_UNDEFINED` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::SPARSECOLORMETHOD_BARYCENTRIC` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::SPARSECOLORMETHOD_BILINEAR` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::SPARSECOLORMETHOD_POLYNOMIAL` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::SPARSECOLORMETHOD_SPEPARDS` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::SPARSECOLORMETHOD_VORONOI` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.

- **`imagick::FUNCTION_UNDEFINED` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.9 or higher.
- **`imagick::FUNCTION_POLYNOMIAL` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.9 or higher.
- **`imagick::FUNCTION_SINUSOID` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.9 or higher.

- **`imagick::INTERPOLATE_UNDEFINED` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.2 or higher.
- **`imagick::INTERPOLATE_AVERAGE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.2 or higher.
- **`imagick::INTERPOLATE_BICUBIC` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.2 or higher.
- **`imagick::INTERPOLATE_BILINEAR` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.2 or higher.
- **`imagick::INTERPOLATE_FILTER` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.2 or higher.
- **`imagick::INTERPOLATE_INTEGER` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.2 or higher.
- **`imagick::INTERPOLATE_MESH` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.2 or higher.
- **`imagick::INTERPOLATE_NEARESTNEIGHBOR` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.2 or higher.
- **`imagick::INTERPOLATE_SPLINE` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.3.4 or higher.

- **`imagick::DITHERMETHOD_UNDEFINED` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::DITHERMETHOD_NO` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::DITHERMETHOD_RIEMERSMA` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
- **`imagick::DITHERMETHOD_FLOYDSTEINBERG` (`int`)** — This constant is available if Imagick has been compiled against ImageMagick version 6.4.6 or higher.
