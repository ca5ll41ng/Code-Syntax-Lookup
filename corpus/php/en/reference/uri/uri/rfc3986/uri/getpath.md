---
id: "en-php-function-uri-rfc3986-uri-getpath"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::getPath"
title: "Retrieve the normalized path component"
signature: "public string Uri\\Rfc3986\\Uri::getPath()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.getpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the normalized path component

## Description

```php
public string Uri\Rfc3986\Uri::getPath()
```

Retrieves the normalized path component.

Hexadecimal triplets are converted to uppercase, percent-encoded unreserved characters are decoded, the scheme and host components are normalized to lowercase, and dot segments are removed from the path, per RFC 3986.

## Parameters

This function has no parameters.

## Return Values

Returns the normalized path component as a `string`.

## Examples

**`Uri\Rfc3986\Uri::getPath()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com/foo/bar");

echo $uri->getPath();
?>

   
```

The above example will output:

```text


/foo/bar

   
```

## See Also

 `Uri\Rfc3986\Uri::getRawPath()` `Uri\Rfc3986\Uri::withPath()` `Uri\WhatWg\Url::getPath()`
