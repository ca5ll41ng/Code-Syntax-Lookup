---
id: "en-php-function-function-openal-source-set"
language: "php"
lang: "en"
category: "function"
name: "openal_source_set"
title: "Set source property"
signature: "bool openal_source_set(resource $source, int $property, mixed $setting)"
module: "openal"
source_url: "https://www.php.net/manual/en/function.openal-source-set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set source property

## Description

```php
bool openal_source_set(resource $source, int $property, mixed $setting)
```

## Parameters

- **`$source`** — An Open AL(Source) resource (previously created by `openal_source_create()`).
- **`$property`** — Property to set, one of: `AL_BUFFER` (OpenAL(Source)), `AL_LOOPING` (bool), `AL_SOURCE_RELATIVE` (int), `AL_SOURCE_STATE` (int), `AL_PITCH` (float), `AL_GAIN` (float), `AL_MIN_GAIN` (float), `AL_MAX_GAIN` (float), `AL_MAX_DISTANCE` (float), `AL_ROLLOFF_FACTOR` (float), `AL_CONE_OUTER_GAIN` (float), `AL_CONE_INNER_ANGLE` (float), `AL_CONE_OUTER_ANGLE` (float), `AL_REFERENCE_DISTANCE` (float), `AL_POSITION` (array(float,float,float)), `AL_VELOCITY` (array(float,float,float)), `AL_DIRECTION` (array(float,float,float)).
- **`$setting`** — Value to assign to specified `$property`. Refer to the description of `$property` for a description of the value(s) expected.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `openal_source_create()` `openal_source_get()` `openal_source_play()`
