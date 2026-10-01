---
id: "en-php-function-uri-whatwg-url-getport"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::getPort"
title: "Retrieve the port component"
signature: "public int|null Uri\\WhatWg\\Url::getPort()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.getport.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the port component

## Description

```php
public int|null Uri\WhatWg\Url::getPort()
```

Retrieves the port component.

## Parameters

This function has no parameters.

## Return Values

Returns the port component as an `integer` if the port component exists, `null` is returned otherwise.

## Examples

**`Uri\WhatWg\Url::getPort()` basic example**

```php


<?php
$url = new \Uri\WhatWg\Url("https://example.com:8080");
var_dump($url->getPort());

// 443 is the default port for https, so it is not stored.
$url = new \Uri\WhatWg\Url("https://example.com:443");
var_dump($url->getPort());
?>

   
```

The above example will output:

```text


int(8080)
NULL

   
```

## See Also

 `Uri\WhatWg\Url::withPort()` `Uri\Rfc3986\Uri::getPort()`
