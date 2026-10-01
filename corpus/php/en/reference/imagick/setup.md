---
id: "en-php-guide-imagick-setup"
language: "php"
lang: "en"
category: "guide"
name: "imagick.setup"
title: "Getting Started"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

{{{ Requirements 

## Requirements

## Installation requirements on non-Windows platforms

ImageMagick >= 6.2.4 is required. The amount of file formats supported by Imagick depends entirely upon the amount of formats supported by your ImageMagick installation. For example, Imagemagick requires ghostscript to conduct PDF operations.

 }}} 

 {{{ Installation 

## Installation

This  extension is not bundled with PHP.

Information for installing this PECL extension may be found in the manual chapter titled Installation of PECL extensions. Additional information such as new releases, downloads, source files, maintainer information, and a CHANGELOG, can be located here: [imagick](imagick).

> The official name of this extension is *imagick*.

Windows users can download prebuilt DLL from the [PECL](imagick) website. These packages already contain the extension DLL (`php_imagick.dll`) which needs to be put into the extension_dir. They also contain the ImageMagick DLLs, which need to be put somewhere in the PATH. As of Imagick 3.6.0, they also contain XML configuration files in `config`; to use these instead of the built-in defaults, they need to put into `%USERPROFILE%/.config/ImageMagick`, or alternatively in the path given by the environment variable MAGICK_CONFIGURE_PATH. Refer to the [ImageMagick configuration files documentation](script/resources.php) for further details.

 }}}
