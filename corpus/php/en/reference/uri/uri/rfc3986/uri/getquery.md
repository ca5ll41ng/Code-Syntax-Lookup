---
id: "en-php-function-uri-rfc3986-uri-getquery"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::getQuery"
title: "Retrieve the normalized query component"
signature: "public string|null Uri\\Rfc3986\\Uri::getQuery()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.getquery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the normalized query component

## Description

```php
public string|null Uri\Rfc3986\Uri::getQuery()
```

Retrieves the normalized query component.

Hexadecimal triplets are converted to uppercase, percent-encoded unreserved characters are decoded, the scheme and host components are normalized to lowercase, and dot segments are removed from the path, per RFC 3986.

## Parameters

This function has no parameters.

## Return Values

Returns the normalized query component as a `string` if the query component exists, `null` is returned otherwise.

## Examples

**`Uri\Rfc3986\Uri::getQuery()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com?foo=bar");

echo $uri->getQuery();
?>

   
```

The above example will output:

```text


foo=bar

   
```

## See Also

 `Uri\Rfc3986\Uri::getRawQuery()` `Uri\Rfc3986\Uri::withQuery()` `Uri\WhatWg\Url::getQuery()`
