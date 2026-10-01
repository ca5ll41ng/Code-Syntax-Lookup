---
id: "en-php-function-uri-rfc3986-uri-gethost"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::getHost"
title: "Retrieve the normalized host component"
signature: "public string|null Uri\\Rfc3986\\Uri::getHost()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.gethost.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the normalized host component

## Description

```php
public string|null Uri\Rfc3986\Uri::getHost()
```

Retrieves the normalized host component.

Hexadecimal triplets are converted to uppercase, percent-encoded unreserved characters are decoded, the scheme and host components are normalized to lowercase, and dot segments are removed from the path, per RFC 3986.

## Parameters

This function has no parameters.

## Return Values

Returns the normalized host component as a `string` if the host component exists, `null` is returned otherwise.

## Examples

**`Uri\Rfc3986\Uri::getHost()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com");

echo $uri->getHost();
?>

   
```

The above example will output:

```text


example.com

   
```

## See Also

 `Uri\Rfc3986\Uri::getRawHost()` `Uri\Rfc3986\Uri::withHost()` `Uri\WhatWg\Url::getAsciiHost()` `Uri\WhatWg\Url::getUnicodeHost()`
