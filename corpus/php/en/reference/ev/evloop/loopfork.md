---
id: "en-php-function-evloop-loopfork"
language: "php"
lang: "en"
category: "function"
name: "EvLoop::loopFork"
title: "Must be called after a fork"
signature: "public void EvLoop::loopFork()"
module: "ev"
source_url: "https://www.php.net/manual/en/evloop.loopfork.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Must be called after a fork

## Description

```php
public void EvLoop::loopFork()
```

Must be called after a *fork* in the child, before entering or continuing the event loop. An alternative is to use `Ev::FLAG_FORKCHECK` which calls this function automatically, at some performance loss (refer to the [libev documentation](http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#FUNCTIONS_CONTROLLING_EVENT_LOOPS) ).

## Parameters

This function has no parameters.

## Return Values

No value is returned.
