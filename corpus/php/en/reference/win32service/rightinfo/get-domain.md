---
id: "en-php-function-win32service-rightinfo-get-domain"
language: "php"
lang: "en"
category: "function"
name: "Win32Service\\RightInfo::getDomain"
title: "Return the user's domain"
signature: "final public string|null Win32Service\\RightInfo::getDomain()"
module: "win32service"
source_url: "https://www.php.net/manual/en/win32service-rightinfo.get-domain.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the user's domain

## Description

```php
final public string|null Win32Service\RightInfo::getDomain()
```

Return the user's domain.

## Parameters

This function has no parameters.

## Return Values

 {{{ 

Return the domain name or `null` if no domain found (local account or user GUID resolve fail).

 }}} 

## See Also

 `Win32Service\RightInfo::__construct()` `Win32Service\RightInfo::getRights()` `Win32Service\RightInfo::isGrantAccess()` `Win32Service\RightInfo::isDenyAccess()` `Win32Service\RightInfo::getFullUsername()` `Win32Service\RightInfo::getUsername()`
