---
id: "en-php-function-function-openal-buffer-get"
language: "php"
lang: "en"
category: "function"
name: "openal_buffer_get"
title: "Retrieve an OpenAL buffer property"
signature: "int|false openal_buffer_get(resource $buffer, int $property)"
module: "openal"
source_url: "https://www.php.net/manual/en/function.openal-buffer-get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve an OpenAL buffer property

## Description

```php
int|false openal_buffer_get(resource $buffer, int $property)
```

## Parameters

- **`$buffer`** — An Open AL(Buffer) resource (previously created by `openal_buffer_create()`).
- **`$property`** — Specific property, one of: `AL_FREQUENCY`, `AL_BITS`, `AL_CHANNELS` and `AL_SIZE`.

## Return Values

Returns an integer value appropriate to the `$property` requested or `false` on failure.

## See Also

 `openal_buffer_create()`
