---
id: "en-php-guide-radius-examples"
language: "php"
lang: "en"
category: "guide"
name: "radius.examples"
title: "Examples"
module: "radius"
source_url: "https://www.php.net/manual/en/radius.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

FIXME: Copy&paste the examples from this "package" 

Howto start?

- get a radius resource
- configure the library
- create the request
- put attributes
- send the request
- receive attributes
- close the radius resource (optional)

Take also a look at the examples in this package.

The package contains an example php script. This script demonstrates howto authenticate with radius using PAP or CHAP (md5). If you authenticate with Microsoft Radius servers then its not possible to use CHAP (md5). If you would like to authenticate with Microsoft Servers you have to use MS-CHAPv1 or MS-CHAPv2, but its more complicated, because you need md4, sha1 and des to generate the right data. The enclosed examples demonstrate all authentication-methods, including MS-CHAPv1 and MS-CHAPv2. To get the MS-CHAP to work you need the mcrypt and the mhash extension, starting with version 1.2 of the package, the mcrypt extension is no longer needed.
