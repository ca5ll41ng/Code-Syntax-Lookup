---
id: "en-php-function-uri-rfc3986-uri-getrawuserinfo"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::getRawUserInfo"
title: "Retrieve the raw userinfo component"
signature: "public string|null Uri\\Rfc3986\\Uri::getRawUserInfo()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.getrawuserinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the raw userinfo component

## Description

```php
public string|null Uri\Rfc3986\Uri::getRawUserInfo()
```

Retrieves the raw (non-normalized) userinfo component.

Hexadecimal triplets are not converted to uppercase, percent-encoded unreserved characters remain encoded, the scheme and host components keep the case they were given in, and dot segments are kept in the path.

## Parameters

This function has no parameters.

## Return Values

Returns the raw userinfo component as a `string` if the userinfo component exists, `null` is returned otherwise.

## Examples

**`Uri\Rfc3986\Uri::getRawUserInfo()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://user:password@example.com");

echo $uri->getRawUserInfo();
?>

   
```

The above example will output:

```text


user:password

   
```

## See Also

 `Uri\Rfc3986\Uri::getUserInfo()` `Uri\Rfc3986\Uri::getUsername()` `Uri\Rfc3986\Uri::getPassword()` `Uri\Rfc3986\Uri::withUserInfo()` `Uri\WhatWg\Url::getUsername()` `Uri\WhatWg\Url::getPassword()`
