---
id: "en-php-guide-phar-constants"
language: "php"
lang: "en"
category: "guide"
name: "phar.constants"
title: "Predefined Constants"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

| Constant | Value | Description |
| --- | --- | --- |
| `Phar::NONE` (`int`) | 0x00000000 | no compression |
| `Phar::COMPRESSED` (`int`) | 0x0000F000 | bitmask that can be used with file flags to determine if any compression is present |
| `Phar::GZ` (`int`) | 0x00001000 | zlib (gzip) compression |
| `Phar::BZ2` (`int`) | 0x00002000 | bzip2 compression |

| Constant | Value | Description |
| --- | --- | --- |
| `Phar::PHAR` (`int`) | 1 | phar file format |
| `Phar::TAR` (`int`) | 2 | tar file format |
| `Phar::ZIP` (`int`) | 3 | zip file format |

| Constant | Value | Description |
| --- | --- | --- |
| `Phar::MD5` (`int`) | 0x0001 | signature with md5 hash algorithm |
| `Phar::SHA1` (`int`) | 0x0002 | signature with sha1 hash algorithm |
| `Phar::SHA256` (`int`) | 0x0003 | signature with sha256 hash algorithm (requires hash extension) |
| `Phar::SHA512` (`int`) | 0x0004 | signature with sha512 hash algorithm (requires hash extension) |
| `Phar::OPENSSL` (`int`) | 0x0010 | signature with OpenSSL public/private key pair. This is a true, asymmetric key signature. |
| `Phar::OPENSSL_SHA256` (`int`) |  |  |
| `Phar::OPENSSL_SHA512` (`int`) |  |  |

| Constant | Value | Description |
| --- | --- | --- |
| `Phar::PHP` (`int`) | 0 | used to instruct the mimeoverrides parameter of `Phar::webPhar()` that the extension should be parsed as a PHP file |
| `Phar::PHPS` (`int`) | 1 | used to instruct the mimeoverrides parameter of `Phar::webPhar()` that the extension should be parsed as a PHP source file through `highlight_file()` |
