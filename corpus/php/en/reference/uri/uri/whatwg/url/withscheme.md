---
id: "en-php-function-uri-whatwg-url-withscheme"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::withScheme"
title: "Modify the scheme component"
signature: "public static Uri\\WhatWg\\Url::withScheme(string $scheme)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.withscheme.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify the scheme component

## Description

```php
public static Uri\WhatWg\Url::withScheme(string $scheme)
```

Creates a new URL and modifies its scheme component.

## Parameters

- **`$scheme`** — New scheme component.

## Return Values

The modified `Uri\WhatWg\Url` instance.

## Errors/Exceptions

If the resulting URL is invalid, a Uri\WhatWg\InvalidUrlException is thrown.

## Examples

**`Uri\WhatWg\Url::withScheme()` basic example**

```php


<?php
$url = new \Uri\WhatWg\Url("https://example.com");
$url = $url->withScheme("http");

echo $url->getScheme();
?>

   
```

The above example will output:

```text


http

   
```

## See Also

 `Uri\WhatWg\Url::getScheme()` `Uri\Rfc3986\Uri::withScheme()`
