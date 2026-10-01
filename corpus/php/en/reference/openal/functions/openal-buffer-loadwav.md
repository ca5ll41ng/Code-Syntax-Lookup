---
id: "en-php-function-function-openal-buffer-loadwav"
language: "php"
lang: "en"
category: "function"
name: "openal_buffer_loadwav"
title: "Load a .wav file into a buffer"
signature: "bool openal_buffer_loadwav(resource $buffer, string $wavfile)"
module: "openal"
source_url: "https://www.php.net/manual/en/function.openal-buffer-loadwav.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Load a .wav file into a buffer

## Description

```php
bool openal_buffer_loadwav(resource $buffer, string $wavfile)
```

## Parameters

- **`$buffer`** — An Open AL(Buffer) resource (previously created by `openal_buffer_create()`).
- **`$wavfile`** — Path to `.wav` file on *local* file system.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `openal_buffer_data()` `openal_stream()`
