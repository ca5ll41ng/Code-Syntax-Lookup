---
id: "en-php-function-uri-rfc3986-uri-getrawpassword"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::getRawPassword"
title: "Retrieve the raw password"
signature: "public string|null Uri\\Rfc3986\\Uri::getRawPassword()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.getrawpassword.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the raw password

## Description

```php
public string|null Uri\Rfc3986\Uri::getRawPassword()
```

Retrieves the raw (non-normalized) password part (the text after the first `:` character) from the userinfo component.

Hexadecimal triplets are not converted to uppercase, percent-encoded unreserved characters remain encoded, the scheme and host components keep the case they were given in, and dot segments are kept in the path.

## Parameters

This function has no parameters.

## Return Values

Returns the raw password as a `string` if the userinfo component contains a `:` character. An empty string is returned when the userinfo component doesn't contain a `:` character. `null` is returned when the userinfo component doesn't exist.

## Examples

**`Uri\Rfc3986\Uri::getRawPassword()` basic example**

```php


<?php
$uri = new \Uri\Rfc3986\Uri("https://user:password@example.com");

echo $uri->getRawPassword();
?>

   
```

The above example will output:

```text


password

   
```

## See Also

 `Uri\Rfc3986\Uri::getPassword()` `Uri\Rfc3986\Uri::withUserInfo()` `Uri\WhatWg\Url::getPassword()`
