---
id: "en-php-guide-class-phardata"
language: "php"
lang: "en"
category: "guide"
name: "class.phardata"
title: "The PharData class"
module: "phar"
source_url: "https://www.php.net/manual/en/class.phardata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The PharData class

PharData

   Introduction  The PharData class provides a high-level interface to accessing and creating non-executable tar and zip archives. Because these archives do not contain a stub and cannot be executed by the phar extension, it is possible to create and manipulate regular zip and tar files using the PharData class even if `phar.readonly` php.ini setting is `1`.      Class Synopsis    `PharData`   `extends` `RecursiveDirectoryIterator`   `implements` Countable   ArrayAccess
