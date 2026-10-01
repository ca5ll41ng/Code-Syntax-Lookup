---
id: "en-php-guide-mhash-installation"
language: "php"
lang: "en"
category: "guide"
name: "mhash.installation"
title: "Installation"
module: "mhash"
source_url: "https://www.php.net/manual/en/mhash.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

You need to compile PHP with the --with-mhash[=DIR] parameter to enable this extension. DIR is the mhash installation directory.

As of PHP 5.3.0, the mhash extension is emulated thru the Hash extension. This makes the mhash installation directory have no effect, and requires the hash extension enabled to make the mhash support available.
