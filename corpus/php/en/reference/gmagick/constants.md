---
id: "en-php-guide-gmagick-constants"
language: "php"
lang: "en"
category: "guide"
name: "gmagick.constants"
title: "Predefined Constants"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`Gmagick::COLOR_BLACK` (`int`)** — Black
- **`Gmagick::COLOR_BLUE` (`int`)** — Blue
- **`Gmagick::COLOR_CYAN` (`int`)** — Cyan
- **`Gmagick::COLOR_GREEN` (`int`)** — Green
- **`Gmagick::COLOR_RED` (`int`)** — Red
- **`Gmagick::COLOR_YELLOW` (`int`)** — Yellow
- **`Gmagick::COLOR_MAGENTA` (`int`)** — Magenta
- **`Gmagick::COLOR_OPACITY` (`int`)** — Opacity
- **`Gmagick::COLOR_ALPHA` (`int`)** — Alpha
- **`Gmagick::COLOR_FUZZ` (`int`)** — Fuzz

- **`Gmagick::COMPOSITE_DEFAULT` (`int`)** — The default composite operator
- **`Gmagick::COMPOSITE_UNDEFINED` (`int`)** — Undefined composite operator
- **`Gmagick::COMPOSITE_NO` (`int`)** — No composite operator defined
- **`Gmagick::COMPOSITE_ADD` (`int`)** — The result of image + image
- **`Gmagick::COMPOSITE_ATOP` (`int`)** — The result is the same shape as image, with composite image obscuring image where the image shapes overlap
- **`Gmagick::COMPOSITE_BLEND` (`int`)** — Blends the image
- **`Gmagick::COMPOSITE_BUMPMAP` (`int`)** — The same as COMPOSITE_MULTIPLY, except the source is converted to grayscale first.
- **`Gmagick::COMPOSITE_CLEAR` (`int`)** — Makes the target image transparent
- **`Gmagick::COMPOSITE_COLORBURN` (`int`)** — Darkens the destination image to reflect the source image
- **`Gmagick::COMPOSITE_COLORDODGE` (`int`)** — Brightens the destination image to reflect the source image
- **`Gmagick::COMPOSITE_COLORIZE` (`int`)** — Colorizes the target image using the composite image
- **`Gmagick::COMPOSITE_COPYBLACK` (`int`)** — Copies black from the source to target
- **`Gmagick::COMPOSITE_COPYBLUE` (`int`)** — Copies blue from the source to target
- **`Gmagick::COMPOSITE_COPY` (`int`)** — Copies the source image on the target image
- **`Gmagick::COMPOSITE_COPYCYAN` (`int`)** — Copies cyan from the source to target
- **`Gmagick::COMPOSITE_COPYGREEN` (`int`)** — Copies green from the source to target
- **`Gmagick::COMPOSITE_COPYMAGENTA` (`int`)** — Copies magenta from the source to target
- **`Gmagick::COMPOSITE_COPYOPACITY` (`int`)** — Copies opacity from the source to target
- **`Gmagick::COMPOSITE_COPYRED` (`int`)** — Copies red from the source to target
- **`Gmagick::COMPOSITE_COPYYELLOW` (`int`)** — Copies yellow from the source to target
- **`Gmagick::COMPOSITE_DARKEN` (`int`)** — Darkens the target image
- **`Gmagick::COMPOSITE_DSTATOP` (`int`)** — The part of the destination lying inside of the source is composited over the source and replaces the destination
- **`Gmagick::COMPOSITE_DST` (`int`)** — The target is left untouched
- **`Gmagick::COMPOSITE_DSTIN` (`int`)** — The parts inside the source replace the target
- **`Gmagick::COMPOSITE_DSTOUT` (`int`)** — The parts outside the source replace the target
- **`Gmagick::COMPOSITE_DSTOVER` (`int`)** — Target replaces the source
- **`Gmagick::COMPOSITE_DIFFERENCE` (`int`)** — Subtracts the darker of the two constituent colors from the lighter
- **`Gmagick::COMPOSITE_DISPLACE` (`int`)** — Shifts target image pixels as defined by the source
- **`Gmagick::COMPOSITE_DISSOLVE` (`int`)** — Dissolves the source in to the target
- **`Gmagick::COMPOSITE_EXCLUSION` (`int`)** — Produces an effect similar to that of Gmagick::COMPOSITE_DIFFERENCE, but appears as lower contrast
- **`Gmagick::COMPOSITE_HARDLIGHT` (`int`)** — Multiplies or screens the colors, dependent on the source color value
- **`Gmagick::COMPOSITE_HUE` (`int`)** — Modifies the hue of the target as defined by source
- **`Gmagick::COMPOSITE_IN` (`int`)** — Composites source into the target
- **`Gmagick::COMPOSITE_LIGHTEN` (`int`)** — Lightens the target as defined by source
- **`Gmagick::COMPOSITE_LUMINIZE` (`int`)** — Luminizes the target as defined by source
- **`Gmagick::COMPOSITE_MINUS` (`int`)** — Subtracts the source from the target
- **`Gmagick::COMPOSITE_MODULATE` (`int`)** — Modulates the target brightness, saturation and hue as defined by source
- **`Gmagick::COMPOSITE_MULTIPLY` (`int`)** — Multiplies the target to the source
- **`Gmagick::COMPOSITE_OUT` (`int`)** — Composites outer parts of the source on the target
- **`Gmagick::COMPOSITE_OVER` (`int`)** — Composites source over the target
- **`Gmagick::COMPOSITE_OVERLAY` (`int`)** — Overlays the source on the target
- **`Gmagick::COMPOSITE_PLUS` (`int`)** — Adds the source to the target
- **`Gmagick::COMPOSITE_REPLACE` (`int`)** — Replaces the target with the source
- **`Gmagick::COMPOSITE_SATURATE` (`int`)** — Saturates the target as defined by the source
- **`Gmagick::COMPOSITE_SCREEN` (`int`)** — The source and destination are complemented and then multiplied and then replace the destination
- **`Gmagick::COMPOSITE_SOFTLIGHT` (`int`)** — Darkens or lightens the colors, dependent on the source
- **`Gmagick::COMPOSITE_SRCATOP` (`int`)** — The part of the source lying inside of the destination is composited onto the destination
- **`Gmagick::COMPOSITE_SRC` (`int`)** — The source is copied to the destination
- **`Gmagick::COMPOSITE_SRCIN` (`int`)** — The part of the source lying inside of the destination replaces the destination
- **`Gmagick::COMPOSITE_SRCOUT` (`int`)** — The part of the source lying outside of the destination replaces the destination
- **`Gmagick::COMPOSITE_SRCOVER` (`int`)** — The source replaces the destination
- **`Gmagick::COMPOSITE_SUBTRACT` (`int`)** — Subtract the colors in the source image from the destination image
- **`Gmagick::COMPOSITE_THRESHOLD` (`int`)** — The source is composited on the target as defined by source threshold
- **`Gmagick::COMPOSITE_XOR` (`int`)** — The part of the source that lies outside of the destination is combined with the part of the destination that lies outside of the source

- **`Gmagick::MONTAGEMODE_FRAME` (`int`)**
- **`Gmagick::MONTAGEMODE_UNFRAME` (`int`)**
- **`Gmagick::MONTAGEMODE_CONCATENATE` (`int`)**

- **`Gmagick::STYLE_NORMAL` (`int`)**
- **`Gmagick::STYLE_ITALIC` (`int`)**
- **`Gmagick::STYLE_OBLIQUE` (`int`)**
- **`Gmagick::STYLE_ANY` (`int`)**

- **`Gmagick::FILTER_UNDEFINED` (`int`)**
- **`Gmagick::FILTER_POINT` (`int`)**
- **`Gmagick::FILTER_BOX` (`int`)**
- **`Gmagick::FILTER_TRIANGLE` (`int`)**
- **`Gmagick::FILTER_HERMITE` (`int`)**
- **`Gmagick::FILTER_HANNING` (`int`)**
- **`Gmagick::FILTER_HAMMING` (`int`)**
- **`Gmagick::FILTER_BLACKMAN` (`int`)**
- **`Gmagick::FILTER_GAUSSIAN` (`int`)**
- **`Gmagick::FILTER_QUADRATIC` (`int`)**
- **`Gmagick::FILTER_CUBIC` (`int`)**
- **`Gmagick::FILTER_CATROM` (`int`)**
- **`Gmagick::FILTER_MITCHELL` (`int`)**
- **`Gmagick::FILTER_LANCZOS` (`int`)**
- **`Gmagick::FILTER_BESSEL` (`int`)**
- **`Gmagick::FILTER_SINC` (`int`)**

- **`Gmagick::IMGTYPE_UNDEFINED` (`int`)**
- **`Gmagick::IMGTYPE_BILEVEL` (`int`)**
- **`Gmagick::IMGTYPE_GRAYSCALE` (`int`)**
- **`Gmagick::IMGTYPE_GRAYSCALEMATTE` (`int`)**
- **`Gmagick::IMGTYPE_PALETTE` (`int`)**
- **`Gmagick::IMGTYPE_PALETTEMATTE` (`int`)**
- **`Gmagick::IMGTYPE_TRUECOLOR` (`int`)**
- **`Gmagick::IMGTYPE_TRUECOLORMATTE` (`int`)**
- **`Gmagick::IMGTYPE_COLORSEPARATION` (`int`)**
- **`Gmagick::IMGTYPE_COLORSEPARATIONMATTE` (`int`)**
- **`Gmagick::IMGTYPE_OPTIMIZE` (`int`)**

- **`Gmagick::RESOLUTION_UNDEFINED` (`int`)**
- **`Gmagick::RESOLUTION_PIXELSPERINCH` (`int`)**
- **`Gmagick::RESOLUTION_PIXELSPERCENTIMETER` (`int`)**

- **`Gmagick::COMPRESSION_UNDEFINED` (`int`)**
- **`Gmagick::COMPRESSION_NO` (`int`)**
- **`Gmagick::COMPRESSION_BZIP` (`int`)**
- **`Gmagick::COMPRESSION_FAX` (`int`)**
- **`Gmagick::COMPRESSION_GROUP4` (`int`)**
- **`Gmagick::COMPRESSION_JPEG` (`int`)**
- **`Gmagick::COMPRESSION_JPEG2000` (`int`)**
- **`Gmagick::COMPRESSION_LOSSLESSJPEG` (`int`)**
- **`Gmagick::COMPRESSION_LZW` (`int`)**
- **`Gmagick::COMPRESSION_RLE` (`int`)**
- **`Gmagick::COMPRESSION_ZIP` (`int`)**

- **`Gmagick::PAINT_POINT` (`int`)**
- **`Gmagick::PAINT_REPLACE` (`int`)**
- **`Gmagick::PAINT_FLOODFILL` (`int`)**
- **`Gmagick::PAINT_FILLTOBORDER` (`int`)**
- **`Gmagick::PAINT_RESET` (`int`)**

- **`Gmagick::GRAVITY_NORTHWEST` (`int`)**
- **`Gmagick::GRAVITY_NORTH` (`int`)**
- **`Gmagick::GRAVITY_NORTHEAST` (`int`)**
- **`Gmagick::GRAVITY_WEST` (`int`)**
- **`Gmagick::GRAVITY_CENTER` (`int`)**
- **`Gmagick::GRAVITY_EAST` (`int`)**
- **`Gmagick::GRAVITY_SOUTHWEST` (`int`)**
- **`Gmagick::GRAVITY_SOUTH` (`int`)**
- **`Gmagick::GRAVITY_SOUTHEAST` (`int`)**

- **`Gmagick::STRETCH_NORMAL` (`int`)**
- **`Gmagick::STRETCH_ULTRACONDENSED` (`int`)**
- **`Gmagick::STRETCH_CONDENSED` (`int`)**
- **`Gmagick::STRETCH_SEMICONDENSED` (`int`)**
- **`Gmagick::STRETCH_SEMIEXPANDED` (`int`)**
- **`Gmagick::STRETCH_EXPANDED` (`int`)**
- **`Gmagick::STRETCH_EXTRAEXPANDED` (`int`)**
- **`Gmagick::STRETCH_ULTRAEXPANDED` (`int`)**
- **`Gmagick::STRETCH_ANY` (`int`)**

- **`Gmagick::ALIGN_UNDEFINED` (`int`)**
- **`Gmagick::ALIGN_LEFT` (`int`)**
- **`Gmagick::ALIGN_CENTER` (`int`)**
- **`Gmagick::ALIGN_RIGHT` (`int`)**

- **`Gmagick::DECORATION_NO` (`int`)**
- **`Gmagick::DECORATION_UNDERLINE` (`int`)**
- **`Gmagick::DECORATION_OVERLINE` (`int`)**
- **`Gmagick::DECORATION_LINETROUGH` (`int`)**

- **`Gmagick::NOISE_UNIFORM` (`int`)**
- **`Gmagick::NOISE_GAUSSIAN` (`int`)**
- **`Gmagick::NOISE_MULTIPLICATIVEGAUSSIAN` (`int`)**
- **`Gmagick::NOISE_IMPULSE` (`int`)**
- **`Gmagick::NOISE_LAPLACIAN` (`int`)**
- **`Gmagick::NOISE_POISSON` (`int`)**

- **`Gmagick::CHANNEL_UNDEFINED` (`int`)**
- **`Gmagick::CHANNEL_RED` (`int`)**
- **`Gmagick::CHANNEL_GRAY` (`int`)**
- **`Gmagick::CHANNEL_CYAN` (`int`)**
- **`Gmagick::CHANNEL_GREEN` (`int`)**
- **`Gmagick::CHANNEL_MAGENTA` (`int`)**
- **`Gmagick::CHANNEL_BLUE` (`int`)**
- **`Gmagick::CHANNEL_YELLOW` (`int`)**
- **`Gmagick::CHANNEL_ALPHA` (`int`)**
- **`Gmagick::CHANNEL_OPACITY` (`int`)**
- **`Gmagick::CHANNEL_MATTE` (`int`)**
- **`Gmagick::CHANNEL_BLACK` (`int`)**
- **`Gmagick::CHANNEL_INDEX` (`int`)**
- **`Gmagick::CHANNEL_ALL` (`int`)**

- **`Gmagick::METRIC_UNDEFINED` (`int`)**
- **`Gmagick::METRIC_MEANABSOLUTEERROR` (`int`)**
- **`Gmagick::METRIC_MEANSQUAREERROR` (`int`)**
- **`Gmagick::METRIC_PEAKABSOLUTEERROR` (`int`)**
- **`Gmagick::METRIC_PEAKSIGNALTONOISERATIO` (`int`)**
- **`Gmagick::METRIC_ROOTMEANSQUAREDERROR` (`int`)**

- **`Gmagick::PIXEL_CHAR` (`int`)**
- **`Gmagick::PIXEL_DOUBLE` (`int`)**
- **`Gmagick::PIXEL_FLOAT` (`int`)**
- **`Gmagick::PIXEL_INTEGER` (`int`)**
- **`Gmagick::PIXEL_LONG` (`int`)**
- **`Gmagick::PIXEL_QUANTUM` (`int`)**
- **`Gmagick::PIXEL_SHORT` (`int`)**

- **`Gmagick::COLORSPACE_UNDEFINED` (`int`)**
- **`Gmagick::COLORSPACE_RGB` (`int`)**
- **`Gmagick::COLORSPACE_GRAY` (`int`)**
- **`Gmagick::COLORSPACE_TRANSPARENT` (`int`)**
- **`Gmagick::COLORSPACE_OHTA` (`int`)**
- **`Gmagick::COLORSPACE_LAB` (`int`)**
- **`Gmagick::COLORSPACE_XYZ` (`int`)**
- **`Gmagick::COLORSPACE_YCBCR` (`int`)**
- **`Gmagick::COLORSPACE_YCC` (`int`)**
- **`Gmagick::COLORSPACE_YIQ` (`int`)**
- **`Gmagick::COLORSPACE_YPBPR` (`int`)**
- **`Gmagick::COLORSPACE_YUV` (`int`)**
- **`Gmagick::COLORSPACE_CMYK` (`int`)**
- **`Gmagick::COLORSPACE_SRGB` (`int`)**
- **`Gmagick::COLORSPACE_HSB` (`int`)**
- **`Gmagick::COLORSPACE_HSL` (`int`)**
- **`Gmagick::COLORSPACE_HWB` (`int`)**
- **`Gmagick::COLORSPACE_REC601LUMA` (`int`)**
- **`Gmagick::COLORSPACE_REC709LUMA` (`int`)**
- **`Gmagick::COLORSPACE_LOG` (`int`)**

- **`Gmagick::VIRTUALPIXELMETHOD_UNDEFINED` (`int`)**
- **`Gmagick::VIRTUALPIXELMETHOD_BACKGROUND` (`int`)**
- **`Gmagick::VIRTUALPIXELMETHOD_CONSTANT` (`int`)**
- **`Gmagick::VIRTUALPIXELMETHOD_EDGE` (`int`)**
- **`Gmagick::VIRTUALPIXELMETHOD_MIRROR` (`int`)**
- **`Gmagick::VIRTUALPIXELMETHOD_TILE` (`int`)**
- **`Gmagick::VIRTUALPIXELMETHOD_TRANSPARENT` (`int`)**

- **`Gmagick::PREVIEW_UNDEFINED` (`int`)**
- **`Gmagick::PREVIEW_ROTATE` (`int`)**
- **`Gmagick::PREVIEW_SHEAR` (`int`)**
- **`Gmagick::PREVIEW_ROLL` (`int`)**
- **`Gmagick::PREVIEW_HUE` (`int`)**
- **`Gmagick::PREVIEW_SATURATION` (`int`)**
- **`Gmagick::PREVIEW_BRIGHTNESS` (`int`)**
- **`Gmagick::PREVIEW_GAMMA` (`int`)**
- **`Gmagick::PREVIEW_SPIFF` (`int`)**
- **`Gmagick::PREVIEW_DULL` (`int`)**
- **`Gmagick::PREVIEW_GRAYSCALE` (`int`)**
- **`Gmagick::PREVIEW_QUANTIZE` (`int`)**
- **`Gmagick::PREVIEW_DESPECKLE` (`int`)**
- **`Gmagick::PREVIEW_REDUCENOISE` (`int`)**
- **`Gmagick::PREVIEW_ADDNOISE` (`int`)**
- **`Gmagick::PREVIEW_SHARPEN` (`int`)**
- **`Gmagick::PREVIEW_BLUR` (`int`)**
- **`Gmagick::PREVIEW_THRESHOLD` (`int`)**
- **`Gmagick::PREVIEW_EDGEDETECT` (`int`)**
- **`Gmagick::PREVIEW_SPREAD` (`int`)**
- **`Gmagick::PREVIEW_SOLARIZE` (`int`)**
- **`Gmagick::PREVIEW_SHADE` (`int`)**
- **`Gmagick::PREVIEW_RAISE` (`int`)**
- **`Gmagick::PREVIEW_SEGMENT` (`int`)**
- **`Gmagick::PREVIEW_SWIRL` (`int`)**
- **`Gmagick::PREVIEW_IMPLODE` (`int`)**
- **`Gmagick::PREVIEW_WAVE` (`int`)**
- **`Gmagick::PREVIEW_OILPAINT` (`int`)**
- **`Gmagick::PREVIEW_CHARCOALDRAWING` (`int`)**
- **`Gmagick::PREVIEW_JPEG` (`int`)**

- **`Gmagick::RENDERINGINTENT_UNDEFINED` (`int`)**
- **`Gmagick::RENDERINGINTENT_SATURATION` (`int`)**
- **`Gmagick::RENDERINGINTENT_PERCEPTUAL` (`int`)**
- **`Gmagick::RENDERINGINTENT_ABSOLUTE` (`int`)**
- **`Gmagick::RENDERINGINTENT_RELATIVE` (`int`)**

- **`Gmagick::FILLRULE_UNDEFINED` (`int`)**
- **`Gmagick::FILLRULE_EVENODD` (`int`)**
- **`Gmagick::FILLRULE_NONZERO` (`int`)**

- **`Gmagick::PATHUNITS_UNDEFINED` (`int`)**
- **`Gmagick::PATHUNITS_USERSPACE` (`int`)**
- **`Gmagick::PATHUNITS_USERSPACEONUSE` (`int`)**
- **`Gmagick::PATHUNITS_OBJECTBOUNDINGBOX` (`int`)**

- **`Gmagick::LINECAP_UNDEFINED` (`int`)**
- **`Gmagick::LINECAP_BUTT` (`int`)**
- **`Gmagick::LINECAP_ROUND` (`int`)**
- **`Gmagick::LINECAP_SQUARE` (`int`)**

- **`Gmagick::LINEJOIN_UNDEFINED` (`int`)**
- **`Gmagick::LINEJOIN_MITER` (`int`)**
- **`Gmagick::LINEJOIN_ROUND` (`int`)**
- **`Gmagick::LINEJOIN_BEVEL` (`int`)**

- **`Gmagick::RESOURCETYPE_UNDEFINED` (`int`)**
- **`Gmagick::RESOURCETYPE_AREA` (`int`)**
- **`Gmagick::RESOURCETYPE_DISK` (`int`)**
- **`Gmagick::RESOURCETYPE_FILE` (`int`)**
- **`Gmagick::RESOURCETYPE_MAP` (`int`)**
- **`Gmagick::RESOURCETYPE_MEMORY` (`int`)**

- **`Gmagick::ORIENTATION_UNDEFINED` (`int`)**
- **`Gmagick::ORIENTATION_TOPLEFT` (`int`)**
- **`Gmagick::ORIENTATION_TOPRIGHT` (`int`)**
- **`Gmagick::ORIENTATION_BOTTOMRIGHT` (`int`)**
- **`Gmagick::ORIENTATION_BOTTOMLEFT` (`int`)**
- **`Gmagick::ORIENTATION_LEFTTOP` (`int`)**
- **`Gmagick::ORIENTATION_RIGHTTOP` (`int`)**
- **`Gmagick::ORIENTATION_RIGHTBOTTOM` (`int`)**
- **`Gmagick::ORIENTATION_LEFTBOTTOM` (`int`)**

- **`Gmagick::INTERLACE_UNDEFINED` (`int`)**
- **`Gmagick::INTERLACE_NO` (`int`)**
- **`Gmagick::INTERLACE_NONE` (`int`)**
- **`Gmagick::INTERLACE_LINE` (`int`)**
- **`Gmagick::INTERLACE_PLANE` (`int`)**
- **`Gmagick::INTERLACE_PARTITION` (`int`)**
