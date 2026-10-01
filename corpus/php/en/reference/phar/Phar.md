---
id: "en-php-guide-class-phar"
language: "php"
lang: "en"
category: "guide"
name: "class.phar"
title: "The Phar class"
module: "phar"
source_url: "https://www.php.net/manual/en/class.phar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Phar class

Phar

   Introduction  The Phar class provides a high-level interface to accessing and creating phar archives.      Class Synopsis    `Phar`   `extends` `RecursiveDirectoryIterator`   `implements` Countable   ArrayAccess      `const` `int` `Phar::BZ2`   `const` `int` `Phar::GZ`   `const` `int` `Phar::NONE`   `const` `int` `Phar::PHAR`   `const` `int` `Phar::TAR`   `const` `int` `Phar::ZIP`   `const` `int` `Phar::COMPRESSED`   `const` `int` `Phar::PHP`   `const` `int` `Phar::PHPS`   `const` `int` `Phar::MD5`   `const` `int` `Phar::OPENSSL`   `const` `int` `Phar::OPENSSL_SHA256`   `const` `int` `Phar::OPENSSL_SHA512`   `const` `int` `Phar::SHA1`   `const` `int` `Phar::SHA256`   `const` `int` `Phar::SHA512`               Changelog 
|  |  |
| --- | --- |
| 8.4.0 | Added support for the Unix timestamp extension for Zip-based archives. |
| 8.0.0 | Meta-data is no longer deserialized upon opening the archive, but is deferred until `Phar::getMetadata()` is called. |

   Notes 
> Prior to PHP 8.0.0, the meta-data was deserialized upon opening the archive. This could lead to security vulnerabilities. Starting with PHP 8.0.0, meta-data is only deserialized when calling `Phar::getMetadata()`, which has options to restrict deserialization for security reasons.
