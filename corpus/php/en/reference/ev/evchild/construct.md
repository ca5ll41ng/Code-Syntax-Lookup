---
id: "en-php-function-evchild-construct"
language: "php"
lang: "en"
category: "function"
name: "EvChild::__construct"
title: "Constructs the EvChild watcher object"
signature: "public EvChild::__construct(int $pid, bool $trace, callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evchild.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs the EvChild watcher object

## Description

```php
public EvChild::__construct(int $pid, bool $trace, callable $callback, mixed $data = null, int $priority = 0)
```

Constructs the `EvChild` watcher object.

Call the callback when a status change for process ID `$pid` (or any *PID* if `$pid` is `0`) has been received(a status change happens when the process terminates or is killed, or, when `$trace` is `true`, additionally when it is stopped or continued). In other words, when the process receives a `SIGCHLD`, *Ev* will fetch the outstanding exit/wait status for all changed/zombie children and call the callback.

It is valid to install a child watcher after an `EvChild` has exited but before the event loop has started its next iteration. For example, first one calls `fork`, then the new child process might exit, and only then an `EvChild` watcher is installed in the parent for the new *PID*.

You can access both exit/tracing status and `$pid` by using the `rstatus` and `rpid` properties of the watcher object.

The number of *PID* watchers per *PID* is unlimited. All of them will be called.

The `EvChild::createStopped()` method doesn't start(activate) the newly created watcher.

## Parameters

- **`$pid`** — Wait for status changes of process PID(or any process if PID is specified as `0` ).
- **`$trace`** — If `false`, only activate the watcher when the process terminates. Otherwise(`true`) additionally activate the watcher when the process is stopped or continued.
- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## See Also

  `EvLoop::child()`
