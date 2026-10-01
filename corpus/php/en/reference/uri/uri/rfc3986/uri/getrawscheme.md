---
id: "en-php-function-uri-rfc3986-uri-getrawscheme"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::getRawScheme"
title: "Retrieve the raw scheme component"
signature: "public string|null Uri\\Rfc3986\\Uri::getRawScheme()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.getrawscheme.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the raw scheme component

## Description

```php
public string|null Uri\Rfc3986\Uri::getRawScheme()
```

Retrieves the raw (non-normalized) scheme component.

Hexadecimal triplets are not converted to uppercase, percent-encoded unreserved characters remain encoded, the scheme and host components keep the case they were given in, and dot segments are kept in the path.

## Parameters

This function has no parameters.

## Return Values

Returns the raw scheme component as a `string` if the scheme component exists, `null` is returned otherwise.

## Examples

**`Uri\Rfc3986\Uri::getRawScheme()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com");

echo $uri->getRawScheme();
?>

   
```

The above example will output:

```text


https

   
```

## See Also

 `Uri\Rfc3986\Uri::getScheme()` `Uri\Rfc3986\Uri::withScheme()` `Uri\WhatWg\Url::getScheme()`
