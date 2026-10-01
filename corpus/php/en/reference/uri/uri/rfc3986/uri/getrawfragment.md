---
id: "en-php-function-uri-rfc3986-uri-getrawfragment"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::getRawFragment"
title: "Retrieve the raw fragment component"
signature: "public string|null Uri\\Rfc3986\\Uri::getRawFragment()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.getrawfragment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the raw fragment component

## Description

```php
public string|null Uri\Rfc3986\Uri::getRawFragment()
```

Retrieves the raw (non-normalized) fragment component.

Hexadecimal triplets are not converted to uppercase, percent-encoded unreserved characters remain encoded, the scheme and host components keep the case they were given in, and dot segments are kept in the path.

## Parameters

This function has no parameters.

## Return Values

Returns the raw fragment component as a `string` if the fragment component exists, `null` is returned otherwise.

## Examples

**`Uri\Rfc3986\Uri::getRawFragment()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com#foo=bar");

echo $uri->getRawFragment();
?>

   
```

The above example will output:

```text


foo=bar

   
```

## See Also

 `Uri\Rfc3986\Uri::getFragment()` `Uri\Rfc3986\Uri::withFragment()` `Uri\WhatWg\Url::getFragment()`
