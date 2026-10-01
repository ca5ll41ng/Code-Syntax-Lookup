---
id: "en-php-function-uri-rfc3986-uri-getport"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::getPort"
title: "Retrieve the normalized port component"
signature: "public int|null Uri\\Rfc3986\\Uri::getPort()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.getport.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the normalized port component

## Description

```php
public int|null Uri\Rfc3986\Uri::getPort()
```

Retrieves the normalized port component.

## Parameters

This function has no parameters.

## Return Values

Returns the normalized port component as an `integer` if the port component exists, `null` is returned otherwise.

## Examples

**`Uri\Rfc3986\Uri::getPort()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com:443");

echo $uri->getPort();
?>

   
```

The above example will output:

```text


443

   
```

## See Also

 `Uri\Rfc3986\Uri::withPort()` `Uri\WhatWg\Url::getPort()`
