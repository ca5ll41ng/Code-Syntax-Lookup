---
id: "en-php-function-uri-rfc3986-uri-withuserinfo"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::withUserInfo"
title: "Modify the userinfo component"
signature: "public static Uri\\Rfc3986\\Uri::withUserInfo(string|null $userinfo)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.withuserinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify the userinfo component

## Description

```php
public static Uri\Rfc3986\Uri::withUserInfo(string|null $userinfo)
```

Creates a new URI and modifies its userinfo component.

## Parameters

- **`$userinfo`** — New userinfo component.

## Return Values

The modified `Uri\Rfc3986\Uri` instance.

## Errors/Exceptions

If the resulting URI is invalid, a Uri\InvalidUriException is thrown.

## Examples

**`Uri\Rfc3986\Uri::withUserInfo()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://user:password@example.com");
$uri = $uri->withUserInfo("userinfo");

echo $uri->getUserInfo();
?>

   
```

The above example will output:

```text


userinfo

   
```

## See Also

 `Uri\Rfc3986\Uri::getRawUserInfo()` `Uri\Rfc3986\Uri::getUserInfo()` `Uri\Rfc3986\Uri::getRawUsername()` `Uri\Rfc3986\Uri::getUsername()` `Uri\Rfc3986\Uri::getRawPassword()` `Uri\Rfc3986\Uri::getPassword()` `Uri\WhatWg\Url::withUsername()` `Uri\WhatWg\Url::withPassword()`
