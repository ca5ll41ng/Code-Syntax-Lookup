---
id: "en-php-function-function-openal-source-stop"
language: "php"
lang: "en"
category: "function"
name: "openal_source_stop"
title: "Stop playing the source"
signature: "bool openal_source_stop(resource $source)"
module: "openal"
source_url: "https://www.php.net/manual/en/function.openal-source-stop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Stop playing the source

## Description

```php
bool openal_source_stop(resource $source)
```

## Parameters

- **`$source`** — An Open AL(Source) resource (previously created by `openal_source_create()`).

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `openal_source_play()` `openal_source_pause()` `openal_source_rewind()`
