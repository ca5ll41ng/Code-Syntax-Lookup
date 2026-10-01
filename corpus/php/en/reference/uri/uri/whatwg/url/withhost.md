---
id: "en-php-function-uri-whatwg-url-withhost"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::withHost"
title: "Modify the host component"
signature: "public static Uri\\WhatWg\\Url::withHost(string|null $host)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.withhost.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify the host component

## Description

```php
public static Uri\WhatWg\Url::withHost(string|null $host)
```

Creates a new URL and modifies its host component.

## Parameters

- **`$host`** — New host component.

## Return Values

The modified `Uri\WhatWg\Url` instance.

## Errors/Exceptions

If the resulting URL is invalid, a Uri\WhatWg\InvalidUrlException is thrown.

## Examples

**`Uri\WhatWg\Url::withHost()` basic example**

```php


<?php
$url = new \Uri\WhatWg\Url("https://example.com");
$url = $url->withHost("example.net");

echo $url->getAsciiHost();
?>

   
```

The above example will output:

```text


example.net

   
```

## See Also

 `Uri\WhatWg\Url::getAsciiHost()` `Uri\WhatWg\Url::getUnicodeHost()` `Uri\Rfc3986\Uri::withHost()`
