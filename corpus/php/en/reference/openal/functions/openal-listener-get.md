---
id: "en-php-function-function-openal-listener-get"
language: "php"
lang: "en"
category: "function"
name: "openal_listener_get"
title: "Retrieve a listener property"
signature: "mixed openal_listener_get(int $property)"
module: "openal"
source_url: "https://www.php.net/manual/en/function.openal-listener-get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve a listener property

## Description

```php
mixed openal_listener_get(int $property)
```

## Parameters

- **`$property`** — Property to retrieve, one of: `AL_GAIN` (float), `AL_POSITION` (array(float,float,float)), `AL_VELOCITY` (array(float,float,float)) and `AL_ORIENTATION` (array(float,float,float)).

## Return Values

Returns a float or array of floats (as appropriate) or `false` on failure.

## See Also

 `openal_listener_set()`
