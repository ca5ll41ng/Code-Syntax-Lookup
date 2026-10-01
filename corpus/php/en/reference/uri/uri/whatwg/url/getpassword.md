---
id: "en-php-function-uri-whatwg-url-getpassword"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::getPassword"
title: "Retrieve the password component"
signature: "public string|null Uri\\WhatWg\\Url::getPassword()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.getpassword.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the password component

## Description

```php
public string|null Uri\WhatWg\Url::getPassword()
```

Retrieves the password component.

## Parameters

This function has no parameters.

## Return Values

Returns the password component as a `string` if the password component exists, `null` is returned otherwise.

## Examples

**`Uri\WhatWg\Url::getPassword()` basic example**

```php


<?php
$url = new \Uri\WhatWg\Url("https://user:password@example.com");

echo $url->getPassword();
?>

   
```

The above example will output:

```text


password

   
```

## See Also

 `Uri\WhatWg\Url::withPassword()` `Uri\Rfc3986\Uri::getRawPassword()` `Uri\Rfc3986\Uri::getPassword()`
