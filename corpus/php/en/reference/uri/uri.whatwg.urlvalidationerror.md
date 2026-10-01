---
id: "en-php-guide-class-uri-whatwg-urlvalidationerror"
language: "php"
lang: "en"
category: "guide"
name: "class.uri-whatwg-urlvalidationerror"
title: "The Uri\\WhatWg\\UrlValidationError class"
module: "uri"
source_url: "https://www.php.net/manual/en/class.uri-whatwg-urlvalidationerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Uri\WhatWg\UrlValidationError class

Uri\WhatWg\UrlValidationError

  Introduction  Provides details about errors that were detected when parsing a URL with `Uri\WhatWg\Url`.     Class Synopsis  Uri\WhatWg   `final` `readonly` `UrlValidationError`    `public` `string` `context`   `public` `Uri\WhatWg\UrlValidationErrorType` `type`   `public` `bool` `failure`        Properties 
- **`context`** — The input URL at the point where the error was detected.
- **`type`** — The type of error.
- **`failure`** — If `true` the error caused the URL to be rejected as invalid. If `false` the error is a soft error that was automatically corrected during parsing.
