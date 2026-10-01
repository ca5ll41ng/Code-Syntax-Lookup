---
id: "en-php-function-uri-whatwg-url-withfragment"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::withFragment"
title: "Modify the fragment component"
signature: "public static Uri\\WhatWg\\Url::withFragment(string|null $fragment)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.withfragment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify the fragment component

## Description

```php
public static Uri\WhatWg\Url::withFragment(string|null $fragment)
```

Creates a new URL and modifies its fragment component.

## Parameters

- **`$fragment`** — New fragment component.

## Return Values

The modified `Uri\WhatWg\Url` instance.

## Errors/Exceptions

If the resulting URL is invalid, a Uri\WhatWg\InvalidUrlException is thrown.

## Examples

**`Uri\WhatWg\Url::withFragment()` basic example**

```php


<?php
$url = new \Uri\WhatWg\Url("https://example.com/#foo");
$url = $url->withFragment("bar");

echo $url->getFragment();
?>

   
```

The above example will output:

```text


bar

   
```

## See Also

 `Uri\WhatWg\Url::getFragment()` `Uri\Rfc3986\Uri::withFragment()`
