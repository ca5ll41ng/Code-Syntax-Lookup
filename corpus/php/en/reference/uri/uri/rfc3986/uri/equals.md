---
id: "en-php-function-uri-rfc3986-uri-equals"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::equals"
title: "Check if two URIs are equivalent"
signature: "public bool Uri\\Rfc3986\\Uri::equals(Uri\\Rfc3986\\Uri $uri, Uri\\UriComparisonMode $comparisonMode = Uri\\UriComparisonMode::ExcludeFragment)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.equals.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if two URIs are equivalent

## Description

```php
public bool Uri\Rfc3986\Uri::equals(Uri\Rfc3986\Uri $uri, Uri\UriComparisonMode $comparisonMode = Uri\UriComparisonMode::ExcludeFragment)
```

Checks if two URIs are equivalent.

## Parameters

- **`$uri`** — URI to compare the current URI against.
- **`$comparisonMode`** — Whether the fragment component is taken into account of the comparison (`Uri\UriComparisonMode::IncludeFragment`) or not (`Uri\UriComparisonMode::ExcludeFragment`). By default, the fragment is excluded.

## Return Values

Returns `true` if the two URIs are equivalent, or `false` otherwise.

## Examples

**`Uri\Rfc3986\Uri::equals()` basic example**

```php


<?php
$uri1 = new \Uri\Rfc3986\Uri("https://example.com");
$uri2 = new \Uri\Rfc3986\Uri("HTTPS://example.com");

var_dump($uri1->equals($uri2));
?>

   
```

The above example will output:

```text


bool(true)

   
```

## See Also

 `Uri\WhatWg\Url::equals()`
