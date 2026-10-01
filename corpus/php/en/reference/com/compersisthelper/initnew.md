---
id: "en-php-function-compersisthelper-initnew"
language: "php"
lang: "en"
category: "function"
name: "COMPersistHelper::InitNew"
title: "Initialize object to default state"
signature: "public bool COMPersistHelper::InitNew()"
module: "com"
source_url: "https://www.php.net/manual/en/compersisthelper.initnew.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Initialize object to default state

## Description

```php
public bool COMPersistHelper::InitNew()
```

Initializes an object to a default state.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

A `com_exception` is thrown if the associated object does not implement the COM interface IPersistStreamInit, or when calling its `IPersistStreamInit::Init()` method failed.
