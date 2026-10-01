---
id: "en-php-function-collectable-isgarbage"
language: "php"
lang: "en"
category: "function"
name: "Collectable::isGarbage"
title: "Determine whether an object has been marked as garbage"
signature: "public true Collectable::isGarbage()"
module: "pthreads"
source_url: "https://www.php.net/manual/en/collectable.isgarbage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determine whether an object has been marked as garbage

## Description

```php
public true Collectable::isGarbage()
```

Can be called in `Pool::collect()` to determine if this object is garbage.

## Parameters

This function has no parameters.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | The return type is `true` now; previously, it was `bool`. |

## See Also

 `Pool::collect()`
