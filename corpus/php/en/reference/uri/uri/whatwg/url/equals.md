---
id: "en-php-function-uri-whatwg-url-equals"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::equals"
title: "Check if two URLs are equivalent"
signature: "public bool Uri\\WhatWg\\Url::equals(Uri\\WhatWg\\Url $url, Uri\\UriComparisonMode $comparisonMode = Uri\\UriComparisonMode::ExcludeFragment)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.equals.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if two URLs are equivalent

## Description

```php
public bool Uri\WhatWg\Url::equals(Uri\WhatWg\Url $url, Uri\UriComparisonMode $comparisonMode = Uri\UriComparisonMode::ExcludeFragment)
```

Checks if two URLs are equivalent.

## Parameters

- **`$url`** — URL to compare the current URL against.
- **`$comparisonMode`** — Whether the fragment component is taken into account of the comparison (`Uri\UriComparisonMode::IncludeFragment`) or not (`Uri\UriComparisonMode::ExcludeFragment`). By default, the fragment is excluded.

## Return Values

Returns `true` if the two URLs are equivalent, or `false` otherwise.

## Examples

**`Uri\WhatWg\Url::equals()` basic example**

```php


<?php
$url1 = new \Uri\WhatWg\Url("https://example.com");
$url2 = new \Uri\WhatWg\Url("HTTPS://example.com");

var_dump($url1->equals($url2));
?>

   
```

The above example will output:

```text


bool(true)

   
```

## See Also

 `Uri\Rfc3986\Uri::equals()`
