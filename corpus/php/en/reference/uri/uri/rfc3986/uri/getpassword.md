---
id: "en-php-function-uri-rfc3986-uri-getpassword"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::getPassword"
title: "Retrieve the normalized password"
signature: "public string|null Uri\\Rfc3986\\Uri::getPassword()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.getpassword.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the normalized password

## Description

```php
public string|null Uri\Rfc3986\Uri::getPassword()
```

Retrieves the normalized password part (the text after the first `:` character) from the userinfo component.

Hexadecimal triplets are converted to uppercase, percent-encoded unreserved characters are decoded, the scheme and host components are normalized to lowercase, and dot segments are removed from the path, per RFC 3986.

## Parameters

This function has no parameters.

## Return Values

Returns the normalized password as a `string` if the userinfo component contains a `:` character. An empty string is returned when the userinfo component doesn't contain a `:` character. `null` is returned when the userinfo component doesn't exist.

## Examples

**`Uri\Rfc3986\Uri::getPassword()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://user:password@example.com");

echo $uri->getPassword();
?>

   
```

The above example will output:

```text


password

   
```

## See Also

 `Uri\Rfc3986\Uri::getRawPassword()` `Uri\Rfc3986\Uri::getRawUserInfo()` `Uri\Rfc3986\Uri::getUserInfo()` `Uri\Rfc3986\Uri::withPassword()` `Uri\WhatWg\Url::getPassword()`
