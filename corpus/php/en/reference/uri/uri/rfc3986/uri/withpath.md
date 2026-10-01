---
id: "en-php-function-uri-rfc3986-uri-withpath"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::withPath"
title: "Modify the path component"
signature: "public static Uri\\Rfc3986\\Uri::withPath(string $path)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.withpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify the path component

## Description

```php
public static Uri\Rfc3986\Uri::withPath(string $path)
```

Creates a new URI and modifies its path component.

## Parameters

- **`$path`** — New path component.

## Return Values

The modified `Uri\Rfc3986\Uri` instance.

## Errors/Exceptions

If the resulting URI is invalid, a Uri\InvalidUriException is thrown.

## Examples

**`Uri\Rfc3986\Uri::withPath()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com/foo/bar");
$uri = $uri->withPath("/baz");

echo $uri->getPath();
?>

   
```

The above example will output:

```text


/baz

   
```

## See Also

 `Uri\Rfc3986\Uri::getPath()` `Uri\Rfc3986\Uri::getRawPath()` `Uri\WhatWg\Url::withPath()`
