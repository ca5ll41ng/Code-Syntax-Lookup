---
id: "en-php-function-uri-whatwg-url-parse"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::parse"
title: "Parse a URL"
signature: "public static static|null Uri\\WhatWg\\Url::parse(string $uri, Uri\\WhatWg\\Url|null $baseUrl = null, array $errors = null)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.parse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parse a URL

## Description

```php
public static static|null Uri\WhatWg\Url::parse(string $uri, Uri\WhatWg\Url|null $baseUrl = null, array $errors = null)
```

Parses a URL.

## Parameters

- **`$uri`** — A URL string to parse, for instance `https://example.com/foo`. A relative-URL string such as `/foo` is only accepted when `$baseUrl` is given.
- **`$baseUrl`** — When a `string` is passed, `$uri` is applied on `$baseUrl`, if `$uri` is a relative-URL string. If either `null` is passed, or `$uri` is a not a relative-URL string, then `$baseUrl` doesn't have any effect.
- **`$errors`** — An `array` to pass a list of `Uri\WhatWg\UrlValidationError` instances by reference to provide extended information about the errors triggered during parsing.

## Return Values

Returns a `Uri\WhatWg\Url` instance on success, or `null` on failure.

## Examples

**`Uri\WhatWg\Url::parse()` basic example**

```php


<?php

$url = \Uri\WhatWg\Url::parse("https://example.com");

if ($url !== null) {
    echo "Valid URL: " . $url->toAsciiString();
} else {
    echo "Invalid URL";
}

   
```

The above example will output:

```text


Valid URL: https://example.com/

   
```

## See Also

 `Uri\WhatWg\Url::__construct()` `Uri\WhatWg\Url::resolve()` `Uri\Rfc3986\Uri::parse()`
