---
id: "en-php-guide-lzf-installation"
language: "php"
lang: "en"
category: "guide"
name: "lzf.installation"
title: "Installation"
module: "lzf"
source_url: "https://www.php.net/manual/en/lzf.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

This  extension is not bundled with PHP. Information for installing this PECL extension may be found in the manual chapter titled Installation of PECL extensions. Additional information such as new releases, downloads, source files, maintainer information, and a CHANGELOG, can be located here: [lzf](lzf).

In order to use these functions you must compile PHP with lzf support by using the --with-lzf[=DIR] configure option. You may also pass --enable-lzf-better-compression to optimize LZF for space rather than speed.

Windows users will enable `php_lzf.dll` inside of php.ini in order to use these functions.
