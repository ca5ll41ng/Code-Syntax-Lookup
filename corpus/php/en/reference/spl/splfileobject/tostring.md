---
id: "en-php-function-splfileobject-tostring"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::__toString"
title: "Returns the current line as a string"
signature: "public string SplFileObject::__toString()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current line as a string

## Description

```php
public string SplFileObject::__toString()
```

This method will return the current line as a string.

## Parameters

This function has no parameters.

## Return Values

Returns the current line as a string.

## Changelog

|  |  |
| --- | --- |
| 8.1.14, 8.2.1 | Changed from an alias of `SplFileObject::fgets()` to an implementation of `SplFileObject::current()` which returns a CSV string when the `SplFileObject::READ_CSV` flag is set. |
| 7.2.19, 7.3.6 | Changed from an alias of `SplFileObject::current()` to an alias of `SplFileObject::fgets()`. |
