---
id: "en-php-guide-class-uri-whatwg-invalidurlexception"
language: "php"
lang: "en"
category: "guide"
name: "class.uri-whatwg-invalidurlexception"
title: "The Uri\\WhatWg\\InvalidUrlException class"
module: "uri"
source_url: "https://www.php.net/manual/en/class.uri-whatwg-invalidurlexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Uri\WhatWg\InvalidUrlException class

Uri\WhatWg\InvalidUrlException

  Introduction  Indicates that a given URL is invalid or that an operation would result in an invalid URL according to the [WHATWG URL Standard]().     Class Synopsis  Uri\WhatWg   InvalidUrlException   `extends` `Uri\InvalidUriException`    `public` `readonly` `array` `errors`            Properties 
- **`errors`** — An `array` of `Uri\WhatWg\UrlValidationError` objects.
