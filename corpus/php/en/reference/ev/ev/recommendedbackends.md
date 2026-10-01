---
id: "en-php-function-ev-recommendedbackends"
language: "php"
lang: "en"
category: "function"
name: "Ev::recommendedBackends"
title: "Returns a bit mask of recommended backends for current platform"
signature: "final public static int Ev::recommendedBackends()"
module: "ev"
source_url: "https://www.php.net/manual/en/ev.recommendedbackends.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a bit mask of recommended backends for current platform

## Description

```php
final public static int Ev::recommendedBackends()
```

Returns the set of all backends compiled into this binary of `libev` and also recommended for this platform, meaning it will work for most file descriptor types. This set is often smaller than the one returned by `ev_supported_backends()`, as for example `kqueue` is broken on most `BSD` systems and will not be auto-detected unless it is requested explicitly. This is the set of backends that `libev` will probe when no backends are specified explicitly.

## Parameters

This function has no parameters.

## Return Values

Returns a bit mask which can containing backend flags combined using bitwise *OR* operator.

## Examples

**Embedding one loop into another**

```php


<?php
/*
* Try to get an embeddable event loop and embed it into the default event loop.
* If it is impossible, use the default
* loop. The default loop is stored in $loop_hi, while the embeddable loop is
* stored in $loop_lo(which is $loop_hi in the case no embeddable loop can be
* used).
*
* Sample translated to PHP
* http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#Examples_CONTENT-9
*/
$loop_hi = EvLoop::defaultLoop();
$loop_lo = NULL;
$embed   = NULL;

/*
* See if there is a chance of getting one that works
* (flags' value of 0 means autodetection)
*/
$loop_lo = Ev::embeddableBackends() & Ev::recommendedBackends()
 ? new EvLoop(Ev::embeddableBackends() & Ev::recommendedBackends())
 : 0;

if ($loop_lo) {
 $embed = new EvEmbed($loop_lo, function () {});
} else {
 $loop_lo = $loop_hi;
}
?>

   
```

## See Also

  `EvEmbed`   `Ev::embeddableBackends()`   `Ev::supportedBackends()`   Backend flags   Examples
