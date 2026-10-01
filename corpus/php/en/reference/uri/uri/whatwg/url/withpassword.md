---
id: "en-php-function-uri-whatwg-url-withpassword"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::withPassword"
title: "Modify the password component"
signature: "public static Uri\\WhatWg\\Url::withPassword(string|null $password)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.withpassword.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify the password component

## Description

```php
public static Uri\WhatWg\Url::withPassword(string|null $password)
```

Creates a new URL and modifies its password component.

## Parameters

- **`$password`** — New password component.

## Return Values

The modified `Uri\WhatWg\Url` instance.

## Errors/Exceptions

If the resulting URL is invalid, a Uri\WhatWg\InvalidUrlException is thrown.

## Examples

**`Uri\WhatWg\Url::withPassword()` basic example**

```php


<?php
$url = new \Uri\WhatWg\Url("https://user:password@example.com");
$url = $url->withPassword("pass");

echo $url->getPassword();
?>

   
```

The above example will output:

```text


pass

   
```

## See Also

 `Uri\WhatWg\Url::getPassword()` `Uri\WhatWg\Url::getUsername()` `Uri\Rfc3986\Uri::withUserInfo()`
