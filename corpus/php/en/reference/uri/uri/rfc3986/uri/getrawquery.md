---
id: "en-php-function-uri-rfc3986-uri-getrawquery"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::getRawQuery"
title: "Retrieve the raw query component"
signature: "public string|null Uri\\Rfc3986\\Uri::getRawQuery()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.getrawquery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the raw query component

## Description

```php
public string|null Uri\Rfc3986\Uri::getRawQuery()
```

Retrieves the raw (non-normalized) query component.

Hexadecimal triplets are not converted to uppercase, percent-encoded unreserved characters remain encoded, the scheme and host components keep the case they were given in, and dot segments are kept in the path.

## Parameters

This function has no parameters.

## Return Values

Returns the raw query component as a `string` if the query component exists, `null` is returned otherwise.

## Examples

**`Uri\Rfc3986\Uri::getRawQuery()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com?foo=bar");

echo $uri->getRawQuery();
?>

   
```

The above example will output:

```text


foo=bar

   
```

## See Also

 `Uri\Rfc3986\Uri::getQuery()` `Uri\Rfc3986\Uri::withQuery()` `Uri\WhatWg\Url::getQuery()`
