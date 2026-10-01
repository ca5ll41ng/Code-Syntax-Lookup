---
id: "en-php-function-win32service-rightinfo-get-username"
language: "php"
lang: "en"
category: "function"
name: "Win32Service\\RightInfo::getUsername"
title: "Return the username"
signature: "final public string|null Win32Service\\RightInfo::getUsername()"
module: "win32service"
source_url: "https://www.php.net/manual/en/win32service-rightinfo.get-username.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the username

## Description

```php
final public string|null Win32Service\RightInfo::getUsername()
```

Return the username.

## Parameters

This function has no parameters.

## Return Values

 {{{ 

Return the username name or GUID if resolve fail.

 }}} 

## See Also

 `Win32Service\RightInfo::__construct()` `Win32Service\RightInfo::getRights()` `Win32Service\RightInfo::isGrantAccess()` `Win32Service\RightInfo::isDenyAccess()` `Win32Service\RightInfo::getFullUsername()` `Win32Service\RightInfo::getDomain()`
