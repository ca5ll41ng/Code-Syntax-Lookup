---
id: "en-php-guide-ds-setup"
language: "php"
lang: "en"
category: "guide"
name: "ds.setup"
title: "Getting Started"
module: "ds"
source_url: "https://www.php.net/manual/en/ds.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

## Requirements

PHP 7 is required by both the extension and the compatibility polyfill.

## Installation

The easiest way to install the extension is via [PECL](ds)

```text


pecl install ds

   
```

You can also build directly from source:

```text


# Dependencies you might need to install
# sudo apt-get install git build-essential php7.0-dev

git clone https://github.com/php-ds/extension "php-ds"
cd php-ds

# Build and install the extension
phpize
./configure
make
make install

# Clean up the build files
make clean
phpize --clean

   
```

> If you're using Composer, it's highly recommended that you include [php-ds/php-ds](php-ds/php-ds) in your project so that your code is still functional in an environment where the extension is not installed. The extension will take priority if installed.
