---
id: "en-php-function-win32service-rightinfo-get-full-username"
language: "php"
lang: "en"
category: "function"
name: "Win32Service\\RightInfo::getFullUsername"
title: "Return the domain and username"
signature: "final public string|null Win32Service\\RightInfo::getFullUsername()"
module: "win32service"
source_url: "https://www.php.net/manual/en/win32service-rightinfo.get-full-username.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the domain and username

## Description

```php
final public string|null Win32Service\RightInfo::getFullUsername()
```

Return the domain and username separated by anti-slash `\`.

## Parameters

This function has no parameters.

## Return Values

 {{{ 

Returns the domain and username. If the domain is `null`, returns only the username; returns `null` if no username is found.

 }}} 

## See Also

 `Win32Service\RightInfo::__construct()` `Win32Service\RightInfo::getRights()` `Win32Service\RightInfo::isGrantAccess()` `Win32Service\RightInfo::isDenyAccess()` `Win32Service\RightInfo::getUsername()`
