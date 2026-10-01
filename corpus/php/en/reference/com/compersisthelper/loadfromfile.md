---
id: "en-php-function-compersisthelper-loadfromfile"
language: "php"
lang: "en"
category: "function"
name: "COMPersistHelper::LoadFromFile"
title: "Load object from file"
signature: "public bool COMPersistHelper::LoadFromFile(string $filename, int $flags = 0)"
module: "com"
source_url: "https://www.php.net/manual/en/compersisthelper.loadfromfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Load object from file

## Description

```php
public bool COMPersistHelper::LoadFromFile(string $filename, int $flags = 0)
```

Opens the specified file and initializes an object from the file contents.

## Parameters

- **`$filename`** — The name of the file from which to load the object.
- **`$flags`** — The access mode to be used when opening the file. Possible values are taken from the [STGM enumeration](). The method can treat this value as a suggestion, adding more restrictive permissions if necessary. If `$flags` is `0`, the implementation is supposed to open the file using whatever default permissions are used when a user opens the file.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

A `com_exception` is thrown if the associated object does not implement the COM interface IPersistFile, or when calling the `IPersistFile::Load()` method failed.
