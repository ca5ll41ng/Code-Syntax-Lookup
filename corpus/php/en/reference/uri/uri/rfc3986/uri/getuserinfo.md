---
id: "en-php-function-uri-rfc3986-uri-getuserinfo"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::getUserInfo"
title: "Retrieve the normalized userinfo component"
signature: "public string|null Uri\\Rfc3986\\Uri::getUserInfo()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.getuserinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the normalized userinfo component

## Description

```php
public string|null Uri\Rfc3986\Uri::getUserInfo()
```

Retrieves the normalized userinfo component.

Hexadecimal triplets are converted to uppercase, percent-encoded unreserved characters are decoded, the scheme and host components are normalized to lowercase, and dot segments are removed from the path, per RFC 3986.

## Parameters

This function has no parameters.

## Return Values

Returns the normalized userinfo component as a `string` if the userinfo component exists, `null` is returned otherwise.

## Examples

**`Uri\Rfc3986\Uri::getUserInfo()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://user:password@example.com");

echo $uri->getUserInfo();
?>

   
```

The above example will output:

```text


user:password

   
```

## See Also

 `Uri\Rfc3986\Uri::getRawUserInfo()` `Uri\Rfc3986\Uri::getRawUsername()` `Uri\Rfc3986\Uri::getUsername()` `Uri\Rfc3986\Uri::getRawPassword()` `Uri\Rfc3986\Uri::getPassword()` `Uri\Rfc3986\Uri::withUserInfo()` `Uri\WhatWg\Url::getUsername()` `Uri\WhatWg\Url::getPassword()`
