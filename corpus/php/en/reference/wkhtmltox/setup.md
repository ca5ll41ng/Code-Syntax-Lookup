---
id: "en-php-guide-wkhtmltox-setup"
language: "php"
lang: "en"
category: "guide"
name: "wkhtmltox.setup"
title: "Getting Started"
module: "wkhtmltox"
source_url: "https://www.php.net/manual/en/wkhtmltox.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

## Requirements

libwkhtmltox source and binary releases are distributed at [wkhtmltopdf.org]().

> Windows users need to take the additional step of adding `wkhtmltox.dll` to their PATH.

## Installation

The source code of this extension, and binaries for Windows are hosted by [github](krakjoe/wkhtmltox),

Fetching the source code and building the extension:

```text

   
git clone https://github.com/krakjoe/wkhtmltox
cd wkhtmltox
phpize
./configure --with-wkhtmltox=/path/to/wkhtmltox/installation
make
sudo make install
   
   
```

Fetching updates and rebuilding the extension:

```text

   
cd wkhtmltox
phpize --clean
git pull origin master
phpize
./configure --with-wkhtmltox=/path/to/wkhtmltox/installation
make
sudo make install
   
   
```
