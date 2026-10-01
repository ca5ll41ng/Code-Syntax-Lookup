---
id: "en-php-function-uri-rfc3986-uri-withhost"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::withHost"
title: "Modify the host component"
signature: "public static Uri\\Rfc3986\\Uri::withHost(string|null $host)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.withhost.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify the host component

## Description

```php
public static Uri\Rfc3986\Uri::withHost(string|null $host)
```

Creates a new URI and modifies its host component.

## Parameters

- **`$host`** — New host component.

## Return Values

The modified `Uri\Rfc3986\Uri` instance.

## Errors/Exceptions

If the resulting URI is invalid, a Uri\InvalidUriException is thrown.

## Examples

**`Uri\Rfc3986\Uri::withHost()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com");
$uri = $uri->withHost("example.net");

echo $uri->getHost();
?>

   
```

The above example will output:

```text


example.net

   
```

## See Also

 `Uri\Rfc3986\Uri::getHost()` `Uri\Rfc3986\Uri::getRawHost()` `Uri\WhatWg\Url::withHost()`
