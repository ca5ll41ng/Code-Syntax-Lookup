---
id: "en-php-function-uri-rfc3986-uri-getscheme"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::getScheme"
title: "Retrieve the normalized scheme component"
signature: "public string|null Uri\\Rfc3986\\Uri::getScheme()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.getscheme.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the normalized scheme component

## Description

```php
public string|null Uri\Rfc3986\Uri::getScheme()
```

Retrieves the normalized scheme component.

Hexadecimal triplets are converted to uppercase, percent-encoded unreserved characters are decoded, the scheme and host components are normalized to lowercase, and dot segments are removed from the path, per RFC 3986.

## Parameters

This function has no parameters.

## Return Values

Returns the normalized scheme component as a `string` if the scheme component exists, `null` is returned otherwise.

## Examples

**`Uri\Rfc3986\Uri::getScheme()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com");

echo $uri->getScheme();
?>

   
```

The above example will output:

```text


https

   
```

## See Also

 `Uri\Rfc3986\Uri::getRawScheme()` `Uri\Rfc3986\Uri::withScheme()` `Uri\WhatWg\Url::getScheme()`
