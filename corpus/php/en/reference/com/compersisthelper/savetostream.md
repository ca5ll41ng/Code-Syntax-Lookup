---
id: "en-php-function-compersisthelper-savetostream"
language: "php"
lang: "en"
category: "function"
name: "COMPersistHelper::SaveToStream"
title: "Save object to stream"
signature: "public bool COMPersistHelper::SaveToStream(resource $stream)"
module: "com"
source_url: "https://www.php.net/manual/en/compersisthelper.savetostream.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Save object to stream

## Description

```php
public bool COMPersistHelper::SaveToStream(resource $stream)
```

Saves an object to the specified stream.

## Parameters

- **`$stream`** — The stream `resource` to which to save the object.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

A `com_exception` is thrown if the associated object does neither implement the COM interface IPersistStream nor IPersistStreamInit, or when calling the `IPersistStream::Save()` method failed.
