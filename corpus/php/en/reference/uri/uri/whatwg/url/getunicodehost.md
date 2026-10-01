---
id: "en-php-function-uri-whatwg-url-getunicodehost"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::getUnicodeHost"
title: "Retrieve the host component as an Unicode `string`"
signature: "public string|null Uri\\WhatWg\\Url::getUnicodeHost()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.getunicodehost.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the host component as an Unicode `string`

## Description

```php
public string|null Uri\WhatWg\Url::getUnicodeHost()
```

Retrieves the host component as a `string`, which may contain Unicode characters.

## Parameters

This function has no parameters.

## Return Values

Returns the host component as a Unicode `string` if the host component exists, `null` is returned otherwise.

## Examples

**`Uri\WhatWg\Url::getUnicodeHost()` basic example**

```php


<?php
$url = new \Uri\WhatWg\Url("https://example.com");

echo $url->getUnicodeHost();
?>

   
```

The above example will output:

```text


example.com

   
```

## See Also

 `Uri\WhatWg\Url::getAsciiHost()` `Uri\WhatWg\Url::withHost()` `Uri\Rfc3986\Uri::getRawHost()` `Uri\Rfc3986\Uri::getHost()`
