---
id: "en-php-function-uri-rfc3986-uri-torawstring"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::toRawString"
title: "Recompose the raw URI"
signature: "public string Uri\\Rfc3986\\Uri::toRawString()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.torawstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Recompose the raw URI

## Description

```php
public string Uri\Rfc3986\Uri::toRawString()
```

Recomposes the raw (non-normalized) URI to a `string`.

Hexadecimal triplets are not converted to uppercase, percent-encoded unreserved characters remain encoded, the scheme and host components keep the case they were given in, and dot segments are kept in the path.

An IPv6 host is an exception: it is recomposed from its parsed form, and is therefore returned fully expanded and in lowercase, whatever notation the input used.

## Parameters

This function has no parameters.

## Return Values

Returns the recomposed raw URI as a `string`.

## Examples

**`Uri\Rfc3986\Uri::toRawString()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com/foo/bar?baz");

echo $uri->toRawString();
?>

   
```

The above example will output:

```text


https://example.com/foo/bar?baz

   
```

## See Also

 `Uri\Rfc3986\Uri::toString()` `Uri\WhatWg\Url::toAsciiString()` `Uri\WhatWg\Url::toUnicodeString()`
