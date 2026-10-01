---
id: "en-php-function-uri-whatwg-url-getusername"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::getUsername"
title: "Retrieve the username component"
signature: "public string|null Uri\\WhatWg\\Url::getUsername()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.getusername.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the username component

## Description

```php
public string|null Uri\WhatWg\Url::getUsername()
```

Retrieves the username component.

## Parameters

This function has no parameters.

## Return Values

Returns the username component as a `string` if the username component exists, `null` is returned otherwise.

## Examples

**`Uri\WhatWg\Url::getUsername()` basic example**

```php


<?php
$url = new \Uri\WhatWg\Url("https://username:password@example.com");

echo $url->getUsername();
?>

   
```

The above example will output:

```text


username

   
```

## See Also

 `Uri\WhatWg\Url::withUsername()` `Uri\Rfc3986\Uri::getRawUsername()` `Uri\Rfc3986\Uri::getUsername()`
