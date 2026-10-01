---
id: "en-php-function-uri-whatwg-url-withusername"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::withUsername"
title: "Modify the username component"
signature: "public static Uri\\WhatWg\\Url::withUsername(string|null $username)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.withusername.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify the username component

## Description

```php
public static Uri\WhatWg\Url::withUsername(string|null $username)
```

Creates a new URL and modifies its username component.

## Parameters

- **`$username`** — New username component.

## Return Values

The modified `Uri\WhatWg\Url` instance.

## Errors/Exceptions

If the resulting URL is invalid, a Uri\WhatWg\InvalidUrlException is thrown.

## Examples

**`Uri\WhatWg\Url::withUsername()` basic example**

```php


<?php
$url = new \Uri\WhatWg\Url("https://user:password@example.com");
$url = $url->withUsername("usr");

echo $url->getUsername();
?>

   
```

The above example will output:

```text


usr

   
```

## See Also

 `Uri\WhatWg\Url::getUsername()` `Uri\WhatWg\Url::getPassword()` `Uri\Rfc3986\Uri::withUserInfo()`
