---
id: "en-php-function-uri-rfc3986-uri-withscheme"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::withScheme"
title: "Modify the scheme component"
signature: "public static Uri\\Rfc3986\\Uri::withScheme(string|null $scheme)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.withscheme.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify the scheme component

## Description

```php
public static Uri\Rfc3986\Uri::withScheme(string|null $scheme)
```

Creates a new URI and modifies its scheme component.

## Parameters

- **`$scheme`** — New scheme component.

## Return Values

The modified `Uri\Rfc3986\Uri` instance.

## Errors/Exceptions

If the resulting URI is invalid, a Uri\InvalidUriException is thrown.

## Examples

**`Uri\Rfc3986\Uri::withScheme()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com");
$uri = $uri->withScheme("http");

echo $uri->getScheme();
?>

   
```

The above example will output:

```text


http

   
```

## See Also

 `Uri\Rfc3986\Uri::getRawScheme()` `Uri\Rfc3986\Uri::getScheme()` `Uri\WhatWg\Url::withScheme()`
