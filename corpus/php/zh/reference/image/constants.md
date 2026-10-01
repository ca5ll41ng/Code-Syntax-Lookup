---
id: "zh-php-guide-image-constants"
language: "php"
lang: "zh"
category: "guide"
name: "image.constants"
title: "预定义常量"
module: "image"
source_url: "https://www.php.net/manual/zh/image.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`GD_VERSION` (`string`)** — PHP 编译所依据的 GD 版本。
- **`GD_MAJOR_VERSION` (`int`)** — PHP 编译所依据的 GD 大版本。
- **`GD_MINOR_VERSION` (`int`)** — PHP 编译所依据的 GD 小版本。
- **`GD_RELEASE_VERSION` (`int`)** — PHP 编译所依据的 GD 发布版本。
- **`GD_EXTRA_VERSION` (`string`)** — PHP 编译所依据的 GD 扩展版本（beta/rc..）。
- **`GD_BUNDLED` (`int`)** — 当使用绑定版本的 GD 时，此值为 1，反之为 0。
- **`IMG_AVIF` (`int`)** — Used as a return value by `imagetypes()` — （自 PHP 8.1.0 起可用）
- **`IMG_BMP` (`int`)** — Used as a return value by `imagetypes()`
- **`IMG_GIF` (`int`)** — Used as a return value by `imagetypes()`
- **`IMG_JPG` (`int`)** — Used as a return value by `imagetypes()`
- **`IMG_JPEG` (`int`)** — Used as a return value by `imagetypes()`
  > 本常量值同 `IMG_JPG`


- **`IMG_PNG` (`int`)** — Used as a return value by `imagetypes()`
- **`IMG_TGA` (`int`)** — Used as a return value by `imagetypes()` — （自 PHP 7.4.0 起可用）
- **`IMG_WBMP` (`int`)** — Used as a return value by `imagetypes()`
- **`IMG_XPM` (`int`)** — Used as a return value by `imagetypes()`
- **`IMG_WEBP` (`int`)** — Used as a return value by `imagetypes()` — （自 PHP 7.0.10 起可用）
- **`IMG_WEBP_LOSSLESS` (`int`)** — （自 PHP 8.1.0 起可用）
- **`IMG_COLOR_TILED` (`int`)** — Special color option which can be used instead of a color allocated with `imagecolorallocate()` or `imagecolorallocatealpha()`.
- **`IMG_COLOR_STYLED` (`int`)** — Special color option which can be used instead of a color allocated with `imagecolorallocate()` or `imagecolorallocatealpha()`.
- **`IMG_COLOR_BRUSHED` (`int`)** — Special color option which can be used instead of a color allocated with `imagecolorallocate()` or `imagecolorallocatealpha()`.
- **`IMG_COLOR_STYLEDBRUSHED` (`int`)** — Special color option which can be used instead of a color allocated with `imagecolorallocate()` or `imagecolorallocatealpha()`.
- **`IMG_COLOR_TRANSPARENT` (`int`)** — Special color option which can be used instead of a color allocated with `imagecolorallocate()` or `imagecolorallocatealpha()`.
- **`IMG_AFFINE_TRANSLATE` (`int`)** — An affine transformation type constant used by the `imageaffinematrixget()` function.
- **`IMG_AFFINE_SCALE` (`int`)** — An affine transformation type constant used by the `imageaffinematrixget()` function.
- **`IMG_AFFINE_ROTATE` (`int`)** — An affine transformation type constant used by the `imageaffinematrixget()` function.
- **`IMG_AFFINE_SHEAR_HORIZONTAL` (`int`)** — An affine transformation type constant used by the `imageaffinematrixget()` function.
- **`IMG_AFFINE_SHEAR_VERTICAL` (`int`)** — An affine transformation type constant used by the `imageaffinematrixget()` function.
- **`IMG_ARC_ROUNDED` (`int`)** — A style constant used by the `imagefilledarc()` function.
  > 此常量值同 `IMG_ARC_PIE`


- **`IMG_ARC_PIE` (`int`)** — A style constant used by the `imagefilledarc()` function.
- **`IMG_ARC_CHORD` (`int`)** — A style constant used by the `imagefilledarc()` function.
- **`IMG_ARC_NOFILL` (`int`)** — A style constant used by the `imagefilledarc()` function.
- **`IMG_ARC_EDGED` (`int`)** — A style constant used by the `imagefilledarc()` function.
- **`IMG_GD2_RAW` (`int`)** — A type constant used by the `imagegd2()` function.
- **`IMG_GD2_COMPRESSED` (`int`)** — A type constant used by the `imagegd2()` function.
- **`IMG_EFFECT_REPLACE` (`int`)** — Alpha blending effect used by the `imagelayereffect()` function.
- **`IMG_EFFECT_ALPHABLEND` (`int`)** — Alpha blending effect used by the `imagelayereffect()` function.
- **`IMG_EFFECT_NORMAL` (`int`)** — Alpha blending effect used by the `imagelayereffect()` function.
- **`IMG_EFFECT_OVERLAY` (`int`)** — Alpha blending effect used by the `imagelayereffect()` function.
- **`IMG_EFFECT_MULTIPLY` (`int`)** — Alpha blending effect used by the `imagelayereffect()` function.
- **`IMG_FILTER_NEGATE` (`int`)** — Special GD filter used by the `imagefilter()` function.
- **`IMG_FILTER_GRAYSCALE` (`int`)** — Special GD filter used by the `imagefilter()` function.
- **`IMG_FILTER_BRIGHTNESS` (`int`)** — Special GD filter used by the `imagefilter()` function.
- **`IMG_FILTER_CONTRAST` (`int`)** — Special GD filter used by the `imagefilter()` function.
- **`IMG_FILTER_COLORIZE` (`int`)** — Special GD filter used by the `imagefilter()` function.
- **`IMG_FILTER_EDGEDETECT` (`int`)** — Special GD filter used by the `imagefilter()` function.
- **`IMG_FILTER_GAUSSIAN_BLUR` (`int`)** — Special GD filter used by the `imagefilter()` function.
- **`IMG_FILTER_SELECTIVE_BLUR` (`int`)** — Special GD filter used by the `imagefilter()` function.
- **`IMG_FILTER_EMBOSS` (`int`)** — Special GD filter used by the `imagefilter()` function.
- **`IMG_FILTER_MEAN_REMOVAL` (`int`)** — Special GD filter used by the `imagefilter()` function.
- **`IMG_FILTER_SMOOTH` (`int`)** — Special GD filter used by the `imagefilter()` function.
- **`IMG_FILTER_PIXELATE` (`int`)** — Special GD filter used by the `imagefilter()` function.
- **`IMG_FILTER_SCATTER` (`int`)** — Special GD filter used by the `imagefilter()` function. — （自 PHP 7.4.0 版本可用）
- **`IMAGETYPE_GIF` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_JPEG` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_JPEG2000` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_PNG` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_SWF` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_PSD` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_BMP` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_WBMP` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_XBM` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_TIFF_II` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_TIFF_MM` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_IFF` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_JB2` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_JPC` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_JP2` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_JPX` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_SWC` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_ICO` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_WEBP` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions. — (从 PHP 7.1.0 开始支持)
- **`IMAGETYPE_AVIF` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions. — （自 PHP 8.1.0 起可用）
- **`IMAGETYPE_UNKNOWN` (`int`)** — Image type constant used by the `image_type_to_mime_type()` and `image_type_to_extension()` functions.
- **`IMAGETYPE_COUNT` (`int`)** — 可用于 `image_type_to_mime_type()` 和 `image_type_to_extension()` 函数的图像类型常量编号（包括 unknown 类型）。
- **`PNG_NO_FILTER` (`int`)** — A special PNG filter, used by the `imagepng()` function.
- **`PNG_FILTER_NONE` (`int`)** — A special PNG filter, used by the `imagepng()` function.
- **`PNG_FILTER_SUB` (`int`)** — A special PNG filter, used by the `imagepng()` function.
- **`PNG_FILTER_UP` (`int`)** — A special PNG filter, used by the `imagepng()` function.
- **`PNG_FILTER_AVG` (`int`)** — A special PNG filter, used by the `imagepng()` function.
- **`PNG_FILTER_PAETH` (`int`)** — A special PNG filter, used by the `imagepng()` function.
- **`PNG_ALL_FILTERS` (`int`)** — A special PNG filter, used by the `imagepng()` function.
- **`IMG_FLIP_VERTICAL` (`int`)** — Used together with `imageflip()`, available as of PHP 5.5.0.
- **`IMG_FLIP_HORIZONTAL` (`int`)** — Used together with `imageflip()`, available as of PHP 5.5.0.
- **`IMG_FLIP_BOTH` (`int`)** — Used together with `imageflip()`, available as of PHP 5.5.0.
- **`IMG_BELL` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_BESSEL` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_BILINEAR_FIXED` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_BICUBIC` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_BICUBIC` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_BLACKMAN` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_BOX` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_BSPLINE` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_CATMULLROM` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_GAUSSIAN` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_GENERALIZED_CUBIC` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_HERMITE` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_HAMMING` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_HANNING` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_MITCHELL` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_POWER` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_QUADRATIC` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_SINC` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_NEAREST_NEIGHBOUR` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_WEIGHTED4` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_TRIANGLE` (`int`)** — Used together with `imagesetinterpolation()`, available as of PHP 5.5.0.
- **`IMG_CROP_BLACK` (`int`)** — 裁剪出黑色背景。
- **`IMG_CROP_DEFAULT` (`int`)** — 等同于 `IMG_CROP_TRANSPARENT`。在 PHP 7.4.0 之前，如果图像没有透明色，则捆绑的 libgd 将恢复为 `IMG_CROP_SIDES`。
- **`IMG_CROP_SIDES` (`int`)** — 使用图像的 4 个角尝试检测要裁剪的背景。
- **`IMG_CROP_THRESHOLD` (`int`)** — 使用指定 `$threshold` 和 `$color` 裁切图片。
- **`IMG_CROP_TRANSPARENT` (`int`)** — 裁剪出透明背景。
- **`IMG_CROP_WHITE` (`int`)** — 裁剪出白色背景。
