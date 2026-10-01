---
id: "en-php-function-function-openal-device-close"
language: "php"
lang: "en"
category: "function"
name: "openal_device_close"
title: "Close an OpenAL device"
signature: "bool openal_device_close(resource $device)"
module: "openal"
source_url: "https://www.php.net/manual/en/function.openal-device-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close an OpenAL device

## Description

```php
bool openal_device_close(resource $device)
```

## Parameters

- **`$device`** — An Open AL(Device) resource (previously created by `openal_device_open()`) to be closed.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `openal_device_open()`
