---
id: "en-php-function-function-openal-buffer-data"
language: "php"
lang: "en"
category: "function"
name: "openal_buffer_data"
title: "Load a buffer with data"
signature: "bool openal_buffer_data(resource $buffer, int $format, string $data, int $freq)"
module: "openal"
source_url: "https://www.php.net/manual/en/function.openal-buffer-data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Load a buffer with data

## Description

```php
bool openal_buffer_data(resource $buffer, int $format, string $data, int $freq)
```

## Parameters

- **`$buffer`** — An Open AL(Buffer) resource (previously created by `openal_buffer_create()`).
- **`$format`** — Format of `$data`, one of: `AL_FORMAT_MONO8`, `AL_FORMAT_MONO16`, `AL_FORMAT_STEREO8` and `AL_FORMAT_STEREO16`
- **`$data`** — Block of binary audio data in the `$format` and `$freq` specified.
- **`$freq`** — Frequency of `$data` given in Hz.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `openal_buffer_loadwav()` `openal_stream()`
