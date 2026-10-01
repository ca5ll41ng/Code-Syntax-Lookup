---
id: "en-php-function-compersisthelper-getmaxstreamsize"
language: "php"
lang: "en"
category: "function"
name: "COMPersistHelper::GetMaxStreamSize"
title: "Get maximum stream size"
signature: "public int COMPersistHelper::GetMaxStreamSize()"
module: "com"
source_url: "https://www.php.net/manual/en/compersisthelper.getmaxstreamsize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get maximum stream size

## Description

```php
public int COMPersistHelper::GetMaxStreamSize()
```

Retrieves the size of the stream (in bytes) needed to save the object.

## Parameters

This function has no parameters.

## Return Values

Returns the size of the stream (in bytes) needed to save the object.

## Errors/Exceptions

A `com_exception` is thrown if the associated object does neither implement the COM interface IPersistStream nor IPersistStreamInit, or when calling the `IPersistStream::GetSizeMax()` method failed.
