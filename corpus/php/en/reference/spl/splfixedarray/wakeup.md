---
id: "en-php-function-splfixedarray-wakeup"
language: "php"
lang: "en"
category: "function"
name: "SplFixedArray::__wakeup"
title: "Reinitialises the array after being unserialised"
signature: "#[\\Deprecated(since: '8.4', message: 'this method is obsolete, as serialization hooks are provided by __unserialize() and __serialize()')] public void SplFixedArray::__wakeup()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfixedarray.wakeup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reinitialises the array after being unserialised

## Description

```php
#[\Deprecated(since: '8.4', message: 'this method is obsolete, as serialization hooks are provided by __unserialize() and __serialize()')] public void SplFixedArray::__wakeup()
```

Reinitialises the array after being unserialised.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | This method is now deprecated, use `SplFixedArray::__unserialize()` instead. |
