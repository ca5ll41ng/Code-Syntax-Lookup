---
id: "en-php-function-uri-rfc3986-uri-withfragment"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::withFragment"
title: "Modify the fragment component"
signature: "public static Uri\\Rfc3986\\Uri::withFragment(string|null $fragment)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.withfragment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify the fragment component

## Description

```php
public static Uri\Rfc3986\Uri::withFragment(string|null $fragment)
```

Creates a new URI and modifies its fragment component.

## Parameters

- **`$fragment`** — New fragment component.

## Return Values

The modified `Uri\Rfc3986\Uri` instance.

## Errors/Exceptions

If the resulting URI is invalid, a Uri\InvalidUriException is thrown.

## Examples

**`Uri\Rfc3986\Uri::withFragment()` basic example**

```php


<?php

$uri = new \Uri\Rfc3986\Uri("https://example.com/#foo");
$uri = $uri->withFragment("bar");

echo $uri->getFragment();

   
```

The above example will output:

```text


bar

   
```

## See Also

 `Uri\Rfc3986\Uri::getFragment()` `Uri\Rfc3986\Uri::getRawFragment()` `Uri\WhatWg\Url::withFragment()`
