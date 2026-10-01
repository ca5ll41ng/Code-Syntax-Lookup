---
id: "en-php-function-uri-whatwg-url-construct"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::__construct"
title: "Construct the Url object"
signature: "public Uri\\WhatWg\\Url::__construct(string $uri, Uri\\WhatWg\\Url|null $baseUrl = null, array $softErrors = null)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct the Url object

## Description

```php
public Uri\WhatWg\Url::__construct(string $uri, Uri\WhatWg\Url|null $baseUrl = null, array $softErrors = null)
```

Constructs the `Uri\WhatWg\Url` object.

## Parameters

- **`$uri`** — A URL string to parse, for instance `https://example.com/foo`. A relative-URL string such as `/foo` is only accepted when `$baseUrl` is given.
- **`$baseUrl`** — When a `string` is passed, `$uri` is applied on `$baseUrl`, if `$uri` is a relative-URL string. If either `null` is passed, or `$uri` is a not a relative-URL string, then `$baseUrl` doesn't have any effect.
- **`$softErrors`** — An `array` to pass a list of `Uri\WhatWg\UrlValidationError` instances by reference to provide extended information about the errors triggered during parsing.

## Errors/Exceptions

If the resulting URL is invalid, a Uri\WhatWg\InvalidUrlException is thrown.

## See Also

 `Uri\WhatWg\Url::parse()` `Uri\WhatWg\Url::resolve()` `Uri\Rfc3986\Uri::__construct()`
