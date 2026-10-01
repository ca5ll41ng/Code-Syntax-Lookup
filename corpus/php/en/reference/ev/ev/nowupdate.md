---
id: "en-php-function-ev-nowupdate"
language: "php"
lang: "en"
category: "function"
name: "Ev::nowUpdate"
title: "Establishes the current time by querying the kernel, updating the time returned by Ev::now in the progress"
signature: "final public static void Ev::nowUpdate()"
module: "ev"
source_url: "https://www.php.net/manual/en/ev.nowupdate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Establishes the current time by querying the kernel, updating the time returned by Ev::now in the progress

## Description

```php
final public static void Ev::nowUpdate()
```

Establishes the current time by querying the kernel, updating the time returned by `Ev::now()` in the progress. This is a costly operation and is usually done automatically within `Ev::run()`.

This method is rarely useful, but when some event callback runs for a very long time without entering the event loop, updating *libev* 's consideration of the current time is a good idea.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## See Also

  `Ev::now()`
