---
id: "en-php-function-ev-run"
language: "php"
lang: "en"
category: "function"
name: "Ev::run"
title: "Begin checking for events and calling callbacks for the default loop"
signature: "final public static void Ev::run([int $flags = ...])"
module: "ev"
source_url: "https://www.php.net/manual/en/ev.run.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Begin checking for events and calling callbacks for the default loop

## Description

```php
final public static void Ev::run([int $flags = ...])
```

Begin checking for events and calling callbacks *for the default loop*. Returns when a callback calls `Ev::stop()` method, or the flags are nonzero(in which case the return value is true) or when there are no active watchers which reference the loop( `EvWatcher::keepalive()` is `true`), in which case the return value will be `false`. The return value can generally be interpreted as *if `true`, there is more work left to do*.

## Parameters

- **`$flags`** — Optional parameter `$flags` can be one of the following: | `$flags` | Description | | --- | --- | | `0` | The default behavior described above | | `Ev::RUN_ONCE` | Block at most one(wait, but don't loop) | | `Ev::RUN_NOWAIT` | Don't block at all(fetch/handle events, but don't wait) | — See the run flag constants.

## Return Values

No value is returned.

## See Also

  `Ev::stop()`   `EvLoop::run()`
