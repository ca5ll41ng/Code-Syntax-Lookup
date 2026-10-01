---
id: "en-php-function-win32service-rightinfo-get-rights"
language: "php"
lang: "en"
category: "function"
name: "Win32Service\\RightInfo::getRights"
title: "Return the rights list"
signature: "final public array Win32Service\\RightInfo::getRights()"
module: "win32service"
source_url: "https://www.php.net/manual/en/win32service-rightinfo.get-rights.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the rights list

## Description

```php
final public array Win32Service\RightInfo::getRights()
```

Return the user's right list.

## Parameters

This function has no parameters.

## Return Values

 {{{ 

Return the user's right list.

The array index is the binary mask of right represented by the constants rights.

The value is a string with the Windows constant name (without `WIN32_` prefix).

 }}} 

## See Also

 `Win32Service\RightInfo::__construct()` `Win32Service\RightInfo::isGrantAccess()` `Win32Service\RightInfo::isDenyAccess()` `Win32Service\RightInfo::getFullUsername()` `Win32Service\RightInfo::getUsername()` `Win32Service\RightInfo::getDomain()` Win32 Rights constants
