---
id: "en-php-function-function-openal-context-create"
language: "php"
lang: "en"
category: "function"
name: "openal_context_create"
title: "Create an audio processing context"
signature: "resource openal_context_create(resource $device)"
module: "openal"
source_url: "https://www.php.net/manual/en/function.openal-context-create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create an audio processing context

## Description

```php
resource openal_context_create(resource $device)
```

## Parameters

- **`$device`** — An Open AL(Device) resource (previously created by `openal_device_open()`).

## Return Values

Returns an Open AL(Context) resource on success or `false` on failure.

## See Also

 `openal_device_open()` `openal_context_destroy()`
