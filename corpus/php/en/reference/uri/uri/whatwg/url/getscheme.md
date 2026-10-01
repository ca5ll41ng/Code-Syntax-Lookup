---
id: "en-php-function-uri-whatwg-url-getscheme"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::getScheme"
title: "Retrieve the scheme component"
signature: "public string Uri\\WhatWg\\Url::getScheme()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.getscheme.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the scheme component

## Description

```php
public string Uri\WhatWg\Url::getScheme()
```

Retrieves the scheme component.

## Parameters

This function has no parameters.

## Return Values

Returns the scheme component as a `string` if the scheme component exists, `null` is returned otherwise.

## Examples

**`Uri\WhatWg\Url::getScheme()` basic example**

```php


<?php
$url = new \Uri\WhatWg\Url("https://example.com");

echo $url->getScheme();
?>

   
```

The above example will output:

```text


https

   
```

## See Also

 `Uri\WhatWg\Url::withScheme()` `Uri\Rfc3986\Uri::getRawScheme()` `Uri\Rfc3986\Uri::getScheme()`
