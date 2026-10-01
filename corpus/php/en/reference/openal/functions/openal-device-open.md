---
id: "en-php-function-function-openal-device-open"
language: "php"
lang: "en"
category: "function"
name: "openal_device_open"
title: "Initialize the OpenAL audio layer"
signature: "resource openal_device_open([string $device_desc = ...])"
module: "openal"
source_url: "https://www.php.net/manual/en/function.openal-device-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Initialize the OpenAL audio layer

## Description

```php
resource openal_device_open([string $device_desc = ...])
```

## Parameters

- **`$device_desc`** — Open an audio device optionally specified by `$device_desc`. If `$device_desc` is not specified the first available audio device will be used.

## Return Values

Returns an Open AL(Device) resource on success or `false` on failure.

## See Also

 `openal_device_close()` `openal_context_create()`
