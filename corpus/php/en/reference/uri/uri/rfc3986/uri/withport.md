---
id: "en-php-function-uri-rfc3986-uri-withport"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::withPort"
title: "Modify the port component"
signature: "public static Uri\\Rfc3986\\Uri::withPort(int|null $port)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.withport.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify the port component

## Description

```php
public static Uri\Rfc3986\Uri::withPort(int|null $port)
```

Creates a new URI and modifies its port component.

## Parameters

- **`$port`** — New port component.

## Return Values

The modified `Uri\Rfc3986\Uri` instance.

## Errors/Exceptions

If the resulting URI is invalid, a Uri\InvalidUriException is thrown.

## Examples

**`Uri\Rfc3986\Uri::withPort()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com:8080");
$uri = $uri->withPort(443);

echo $uri->getPort();
?>

   
```

The above example will output:

```text


443

   
```

## See Also

 `Uri\Rfc3986\Uri::getPort()` `Uri\WhatWg\Url::withPort()`
