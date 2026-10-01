---
id: "en-php-function-uri-whatwg-url-withport"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::withPort"
title: "Modify the port component"
signature: "public static Uri\\WhatWg\\Url::withPort(int|null $port)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.withport.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify the port component

## Description

```php
public static Uri\WhatWg\Url::withPort(int|null $port)
```

Creates a new URL and modifies its port component.

## Parameters

- **`$port`** — New port component.

## Return Values

The modified `Uri\WhatWg\Url` instance.

## Errors/Exceptions

If the resulting URL is invalid, a Uri\WhatWg\InvalidUrlException is thrown.

## Examples

**`Uri\WhatWg\Url::withPort()` basic example**

```php


<?php
$url = new \Uri\WhatWg\Url("https://example.com:8080");

// 443 is the default port for https, so it is not stored.
$url = $url->withPort(443);
var_dump($url->getPort());

$url = $url->withPort(8443);
var_dump($url->getPort());
?>

   
```

The above example will output:

```text


NULL
int(8443)

   
```

## See Also

 `Uri\WhatWg\Url::getPort()` `Uri\Rfc3986\Uri::withPort()`
