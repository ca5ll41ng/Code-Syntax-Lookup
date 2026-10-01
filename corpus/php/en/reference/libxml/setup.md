---
id: "en-php-guide-libxml-setup"
language: "php"
lang: "en"
category: "guide"
name: "libxml.setup"
title: "Getting Started"
module: "libxml"
source_url: "https://www.php.net/manual/en/libxml.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

{{{ Requirements 

## Requirements

This extension requires [libxml]() >= 2.9.4 as of PHP 8.4.0, libxml >= 2.9.0 prior to PHP 8.4.0, and libxml >= 2.6.0 prior to PHP 8.0.0.

 }}} 

 {{{ Installation PHP >= 7.4 

## Installation for PHP versions >= 7.4

The libxml extension is enabled by default, although it may be disabled with --without-libxml.

PHP uses `pkg-config` to select the right library file, header files, and compile flags to use for libxml2. To ensure that the desired version of libxml2 is selected, the PKG_CONFIG_PATH environment variable may be used to control the search path for `pkg-config` prior to running the configure script: PKG_CONFIG_PATH="/path/to/libxml2/prefix/lib/pkgconfig:/lib/pkgconfig"

 }}} 

 {{{ Installation PHP < 7.4 

## Installation for PHP versions < 7.4

The libxml extension is enabled by default, although it may be disabled with --disable-libxml.

The optional --with-libxml-dir directive is used to specify the location of `libxml` on the system that PHP is being compiled on, otherwise only the default locations are scanned. The `configure` process checks for libxml (specifically, `xml2-config`) in the following order:

1. The location ([DIR]) specified with --with-libxml-dir ([DIR]=`/bin/xml2-config`)
2. `/usr/local/bin/xml2-config`
3. `/usr/bin/xml2-config`

If `configure` cannot find `xml2-config` in the directory specified by --with-libxml-dir, then it'll continue on and check the default locations.

 }}}
