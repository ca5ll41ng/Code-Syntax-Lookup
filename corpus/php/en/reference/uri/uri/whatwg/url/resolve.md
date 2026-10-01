---
id: "en-php-function-uri-whatwg-url-resolve"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::resolve"
title: "Resolve a URL with the current object as the base URL"
signature: "public static Uri\\WhatWg\\Url::resolve(string $uri, array $softErrors = null)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.resolve.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Resolve a URL with the current object as the base URL

## Description

```php
public static Uri\WhatWg\Url::resolve(string $uri, array $softErrors = null)
```

Resolves a valid URL string - which may potentially be a relative-URL string - with the current object as the base URL.

## Parameters

- **`$uri`** — A valid URL string (e.g. `/foo` or `https://example.com/foo`) to apply on the current object.
- **`$softErrors`** — An `array` to pass a list of `Uri\WhatWg\UrlValidationError` instances by reference to provide extended information about the soft errors triggered during reference resolution.

## Return Values

A new `Uri\WhatWg\Url` instance.

## Errors/Exceptions

If the resulting URL is invalid, a Uri\WhatWg\InvalidUrlException is thrown.

## Examples

**`Uri\WhatWg\Url::resolve()` basic example**

```php


<?php
$url = new \Uri\WhatWg\Url("https://example.com");
$url = $url->resolve("/foo");

echo $url->toAsciiString();
?>

   
```

The above example will output:

```text


https://example.com/foo

   
```

## See Also

 `Uri\WhatWg\Url::__construct()` `Uri\WhatWg\Url::parse()` `Uri\Rfc3986\Uri::resolve()`
