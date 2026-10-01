---
id: "en-php-function-uri-rfc3986-uri-getrawhost"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::getRawHost"
title: "Retrieve the raw host component"
signature: "public string|null Uri\\Rfc3986\\Uri::getRawHost()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.getrawhost.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the raw host component

## Description

```php
public string|null Uri\Rfc3986\Uri::getRawHost()
```

Retrieves the raw (non-normalized) host component.

Hexadecimal triplets are not converted to uppercase, percent-encoded unreserved characters remain encoded, the scheme and host components keep the case they were given in, and dot segments are kept in the path.

## Parameters

This function has no parameters.

## Return Values

Returns the raw host component as a `string` if the host component exists, `null` is returned otherwise.

## Examples

**`Uri\Rfc3986\Uri::getRawHost()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com");

echo $uri->getRawHost();
?>

   
```

The above example will output:

```text


example.com

   
```

## See Also

 `Uri\Rfc3986\Uri::getHost()` `Uri\Rfc3986\Uri::withHost()` `Uri\WhatWg\Url::getAsciiHost()` `Uri\WhatWg\Url::getUnicodeHost()`
