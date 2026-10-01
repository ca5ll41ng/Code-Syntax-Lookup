---
id: "en-php-function-function-openal-stream"
language: "php"
lang: "en"
category: "function"
name: "openal_stream"
title: "Begin streaming on a source"
signature: "resource|false openal_stream(resource $source, int $format, int $rate)"
module: "openal"
source_url: "https://www.php.net/manual/en/function.openal-stream.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Begin streaming on a source

## Description

```php
resource|false openal_stream(resource $source, int $format, int $rate)
```

## Parameters

- **`$source`** — An Open AL(Source) resource (previously created by `openal_source_create()`).
- **`$format`** — Format of `$data`, one of: `AL_FORMAT_MONO8`, `AL_FORMAT_MONO16`, `AL_FORMAT_STEREO8` and `AL_FORMAT_STEREO16`
- **`$rate`** — Frequency of data to stream given in Hz.

## Return Values

Returns a stream resource on success or `false` on failure.

## See Also

 `openal_source_create()` `fwrite()`
