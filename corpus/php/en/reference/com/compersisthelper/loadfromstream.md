---
id: "en-php-function-compersisthelper-loadfromstream"
language: "php"
lang: "en"
category: "function"
name: "COMPersistHelper::LoadFromStream"
title: "Load object from stream"
signature: "public bool COMPersistHelper::LoadFromStream(resource $stream)"
module: "com"
source_url: "https://www.php.net/manual/en/compersisthelper.loadfromstream.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Load object from stream

## Description

```php
public bool COMPersistHelper::LoadFromStream(resource $stream)
```

Initializes an object from the stream where it was saved previously.

## Parameters

- **`$stream`** — The stream `resource` from which to load the object.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

A `com_exception` is thrown if the associated object does not implement the COM interface IPersistStream, or when calling the `IPersistStream::Load()` method failed.
