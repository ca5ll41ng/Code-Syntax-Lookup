---
id: "en-php-function-evloop-nowupdate"
language: "php"
lang: "en"
category: "function"
name: "EvLoop::nowUpdate"
title: "Establishes the current time by querying the kernel, updating the time returned by EvLoop::now in the progress"
signature: "public void EvLoop::nowUpdate()"
module: "ev"
source_url: "https://www.php.net/manual/en/evloop.nowupdate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Establishes the current time by querying the kernel, updating the time returned by EvLoop::now in the progress

## Description

```php
public void EvLoop::nowUpdate()
```

Establishes the current time by querying the kernel, updating the time returned by `EvLoop::now()` in the progress. This is a costly operation and is usually done automatically within `EvLoop::run()`.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## See Also

  `EvLoop::now()`   `Ev::nowUpdate()`
