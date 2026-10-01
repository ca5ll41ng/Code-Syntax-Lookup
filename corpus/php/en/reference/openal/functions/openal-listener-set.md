---
id: "en-php-function-function-openal-listener-set"
language: "php"
lang: "en"
category: "function"
name: "openal_listener_set"
title: "Set a listener property"
signature: "bool openal_listener_set(int $property, mixed $setting)"
module: "openal"
source_url: "https://www.php.net/manual/en/function.openal-listener-set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a listener property

## Description

```php
bool openal_listener_set(int $property, mixed $setting)
```

## Parameters

- **`$property`** — Property to set, one of: `AL_GAIN` (float), `AL_POSITION` (array(float,float,float)), `AL_VELOCITY` (array(float,float,float)) and `AL_ORIENTATION` (array(float,float,float)).
- **`$setting`** — Value to set, either float, or an array of floats as appropriate.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `openal_listener_get()`
