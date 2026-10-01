---
id: "en-php-function-uri-whatwg-url-getasciihost"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::getAsciiHost"
title: "Retrieve the host component as an ASCII `string`"
signature: "public string|null Uri\\WhatWg\\Url::getAsciiHost()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.getasciihost.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the host component as an ASCII `string`

## Description

```php
public string|null Uri\WhatWg\Url::getAsciiHost()
```

Retrieves the host component as a `string` using punycode transcription instead of Unicode characters.

## Parameters

This function has no parameters.

## Return Values

Returns the host component as an ASCII `string` if the host component exists, `null` is returned otherwise.

## Examples

**`Uri\WhatWg\Url::getAsciiHost()` basic example**

```php


<?php

$url = new \Uri\WhatWg\Url("https://täst.example.com");

echo $url->getAsciiHost();

   
```

The above example will output:

```text


xn--tst-qla.example.com

   
```

## See Also

 `Uri\WhatWg\Url::getUnicodeHost()` `Uri\WhatWg\Url::withHost()` `Uri\Rfc3986\Uri::getRawHost()` `Uri\Rfc3986\Uri::getHost()`
