---
id: "en-php-function-uri-rfc3986-uri-getrawpath"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::getRawPath"
title: "Retrieve the raw path component"
signature: "public string Uri\\Rfc3986\\Uri::getRawPath()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.getrawpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the raw path component

## Description

```php
public string Uri\Rfc3986\Uri::getRawPath()
```

Retrieves the raw (non-normalized) path component.

Hexadecimal triplets are not converted to uppercase, percent-encoded unreserved characters remain encoded, the scheme and host components keep the case they were given in, and dot segments are kept in the path.

## Parameters

This function has no parameters.

## Return Values

Returns the raw path component as a `string`.

## Examples

**`Uri\Rfc3986\Uri::getRawPath()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com/foo/bar");

echo $uri->getRawPath();
?>

   
```

The above example will output:

```text


/foo/bar

   
```

## See Also

 `Uri\Rfc3986\Uri::getPath()` `Uri\Rfc3986\Uri::withPath()` `Uri\WhatWg\Url::getPath()`
