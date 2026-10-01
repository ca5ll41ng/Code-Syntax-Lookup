---
id: "en-php-function-ev-resume"
language: "php"
lang: "en"
category: "function"
name: "Ev::resume"
title: "Resume previously suspended default event loop"
signature: "final public static void Ev::resume()"
module: "ev"
source_url: "https://www.php.net/manual/en/ev.resume.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Resume previously suspended default event loop

## Description

```php
final public static void Ev::resume()
```

`Ev::suspend()` and `Ev::resume()` methods suspend and resume a loop correspondingly.

All timer watchers will be delayed by the time spent between *suspend* and *resume*, and all *periodic* watchers will be rescheduled(that is, they will lose any events that would have occurred while suspended).

After calling `Ev::suspend()` it is not allowed to call any function on the given loop other than `Ev::resume()`. Also it is not allowed to call `Ev::resume()` without a previous call to `Ev::suspend()`.

Calling *suspend* / *resume* has the side effect of updating the event loop time(see `Ev::nowUpdate()` ).

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## See Also

  `Ev::suspend()`
