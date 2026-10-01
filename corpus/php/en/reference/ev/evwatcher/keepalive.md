---
id: "en-php-function-evwatcher-keepalive"
language: "php"
lang: "en"
category: "function"
name: "EvWatcher::keepalive"
title: "Configures whether to keep the loop from returning"
signature: "public bool EvWatcher::keepalive([bool $value = ...])"
module: "ev"
source_url: "https://www.php.net/manual/en/evwatcher.keepalive.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Configures whether to keep the loop from returning

## Description

```php
public bool EvWatcher::keepalive([bool $value = ...])
```

Configures whether to keep the loop from returning. With keepalive `$value` set to `false` the watcher won't keep `Ev::run()` / `EvLoop::run()` from returning even though the watcher is active.

Watchers have keepalive `$value` `true` by default.

Clearing keepalive status is useful when returning from `Ev::run()` / `EvLoop::run()` just because of the watcher is undesirable. It could be a long running UDP socket watcher or so.

## Parameters

- **`$value`** — With keepalive `$value` set to `false` the watcher won't keep `Ev::run()` / `EvLoop::run()` from returning even though the watcher is active.

## Return Values

Returns the previous state.

## Examples

**Register an I/O watcher for some UDP socket but do not keep the event loop from running just because of that watcher.**

```php


<?php
$udp_socket = ...
$udp_watcher = new EvIo($udp_socket, Ev::READ, function () { /* ... */ });
$udp_watcher->keepalive(FALSE);
?>

   
```
