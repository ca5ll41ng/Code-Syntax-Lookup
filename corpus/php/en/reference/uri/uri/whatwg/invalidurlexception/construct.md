---
id: "en-php-function-uri-whatwg-invalidurlexception-construct"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\InvalidUrlException::__construct"
title: "Construct an InvalidUrlException object"
signature: "public Uri\\WhatWg\\InvalidUrlException::__construct(string $message = \"\", array $errors = [], int $code = 0, Throwable|null $previous = null)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-invalidurlexception.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct an InvalidUrlException object

## Description

```php
public Uri\WhatWg\InvalidUrlException::__construct(string $message = "", array $errors = [], int $code = 0, Throwable|null $previous = null)
```

Constructs a `Uri\WhatWg\InvalidUrlException` object.

## Parameters

- **`$message`** — Exception message.
- **`$errors`** — An `array` of `Uri\WhatWg\UrlValidationError` objects.
- **`$code`** — Exception code.
- **`$previous`** — The previous exception used for exception chaining.
