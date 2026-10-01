---
id: "en-php-function-uri-rfc3986-uri-getfragment"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::getFragment"
title: "Retrieve the normalized fragment component"
signature: "public string|null Uri\\Rfc3986\\Uri::getFragment()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.getfragment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the normalized fragment component

## Description

```php
public string|null Uri\Rfc3986\Uri::getFragment()
```

Retrieves the normalized fragment component.

Hexadecimal triplets are converted to uppercase, percent-encoded unreserved characters are decoded, the scheme and host components are normalized to lowercase, and dot segments are removed from the path, per RFC 3986.

## Parameters

This function has no parameters.

## Return Values

Returns the normalized fragment component as a `string` if the fragment component exists, `null` is returned otherwise.

## Examples

**`Uri\Rfc3986\Uri::getFragment()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://example.com#foo=bar");

echo $uri->getFragment();
?>

   
```

The above example will output:

```text


foo=bar

   
```

## See Also

 `Uri\Rfc3986\Uri::getRawFragment()` `Uri\Rfc3986\Uri::withFragment()` `Uri\WhatWg\Url::getFragment()`
