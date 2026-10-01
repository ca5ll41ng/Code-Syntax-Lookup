---
id: "en-php-function-compersisthelper-getcurfilename"
language: "php"
lang: "en"
category: "function"
name: "COMPersistHelper::GetCurFileName"
title: "Get current filename"
signature: "public string|false COMPersistHelper::GetCurFileName()"
module: "com"
source_url: "https://www.php.net/manual/en/compersisthelper.getcurfilename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get current filename

## Description

```php
public string|false COMPersistHelper::GetCurFileName()
```

Retrieves the current name of the file associated with the object.

## Parameters

This function has no parameters.

## Return Values

Returns the current name of the file associated with the object.

## Errors/Exceptions

A `com_exception` is thrown if the associated object does not implement the COM interface IPersistFile, or when calling the `IPersistFile::GetCurFile()` method failed.
