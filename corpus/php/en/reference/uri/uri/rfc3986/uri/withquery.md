---
id: "en-php-function-uri-rfc3986-uri-withquery"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::withQuery"
title: "Modify the query component"
signature: "public static Uri\\Rfc3986\\Uri::withQuery(string|null $query)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.withquery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify the query component

## Description

```php
public static Uri\Rfc3986\Uri::withQuery(string|null $query)
```

Creates a new URI and modifies its query component.

## Parameters

- **`$query`** — New query component.

## Return Values

The modified `Uri\Rfc3986\Uri` instance.

## Errors/Exceptions

If the resulting URI is invalid, a Uri\InvalidUriException is thrown.

## Examples

**`Uri\Rfc3986\Uri::withQuery()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com?foo=bar");
$uri = $uri->withQuery("foo=baz");

echo $uri->getQuery();
?>

   
```

The above example will output:

```text


foo=baz

   
```

## See Also

 `Uri\Rfc3986\Uri::getRawQuery()` `Uri\Rfc3986\Uri::getQuery()` `Uri\WhatWg\Url::withQuery()`
