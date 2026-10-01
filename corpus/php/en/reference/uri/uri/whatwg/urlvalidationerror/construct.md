---
id: "en-php-function-uri-whatwg-urlvalidationerror-construct"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\UrlValidationError::__construct"
title: "Construct a UrlValidationError object"
signature: "public Uri\\WhatWg\\UrlValidationError::__construct(string $context, Uri\\WhatWg\\UrlValidationErrorType $type, bool $failure)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-urlvalidationerror.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a UrlValidationError object

## Description

```php
public Uri\WhatWg\UrlValidationError::__construct(string $context, Uri\WhatWg\UrlValidationErrorType $type, bool $failure)
```

Constructs a `Uri\WhatWg\UrlValidationError` object.

## Parameters

- **`$context`** — The input URL at the point where the error was detected.
- **`$type`** — The type of error.
- **`$failure`** — If `true` the error caused the URL to be rejected as invalid. If `false` the error is a soft error that was automatically corrected during parsing.
