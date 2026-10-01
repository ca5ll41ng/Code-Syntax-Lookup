---
id: "en-php-function-uri-rfc3986-uri-tostring"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::toString"
title: "Recompose the normalized URI"
signature: "public string Uri\\Rfc3986\\Uri::toString()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Recompose the normalized URI

## Description

```php
public string Uri\Rfc3986\Uri::toString()
```

Recomposes the normalized URI to a `string`.

Hexadecimal triplets are converted to uppercase, percent-encoded unreserved characters are decoded, the scheme and host components are normalized to lowercase, and dot segments are removed from the path, per RFC 3986.

## Parameters

This function has no parameters.

## Return Values

Returns the recomposed normalized URI as a `string`.

## Examples

**`Uri\Rfc3986\Uri::toString()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com/foo/bar?baz");

echo $uri->toString();
?>

   
```

The above example will output:

```text


https://example.com/foo/bar?baz

   
```

## See Also

 `Uri\Rfc3986\Uri::toRawString()` `Uri\WhatWg\Url::toAsciiString()` `Uri\WhatWg\Url::toUnicodeString()`
