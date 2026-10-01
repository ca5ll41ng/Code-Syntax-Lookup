---
id: "en-php-function-evembed-construct"
language: "php"
lang: "en"
category: "function"
name: "EvEmbed::__construct"
title: "Constructs the EvEmbed object"
signature: "public EvEmbed::__construct(object $other, [callable $callback = ...], [mixed $data = ...], [int $priority = ...])"
module: "ev"
source_url: "https://www.php.net/manual/en/evembed.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs the EvEmbed object

## Description

```php
public EvEmbed::__construct(object $other, [callable $callback = ...], [mixed $data = ...], [int $priority = ...])
```

This is a rather advanced watcher type that lets to embed one event loop into another(currently only IO events are supported in the embedded loop, other types of watchers might be handled in a delayed or incorrect fashion and must not be used).

See [the libev documentation](http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#code_ev_embed_code_when_one_backend_) for details.

This watcher is most useful on *BSD* systems without working `kqueue` to still be able to handle a large number of sockets. See example below.

## Parameters

- **`$other`** — Instance of `EvLoop`. The loop to embed, this loop must be embeddable(see `Ev::embeddableBackends()` ).
- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## Examples

**Embedding loop created with kqueue backend into the default loop**

```php


<?php
/*
 * Check if kqueue is available but not recommended and create a kqueue backend
 * for use with sockets (which usually work with any kqueue implementation).
 * Store the kqueue/socket-only event loop in loop_socket. (One might optionally
 * use EVFLAG_NOENV, too)
 *
 * Example borrowed from
 * http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#Examples_CONTENT-9
 */
$loop        = EvLoop::defaultLoop();
$socket_loop = NULL;
$embed       = NULL;

if (Ev::supportedBackends() & ~Ev::recommendedBackends() & Ev::BACKEND_KQUEUE) {
    if (($socket_loop = new EvLoop(Ev::BACKEND_KQUEUE))) {
        $embed = new EvEmbed($loop);
    }
}

if (!$socket_loop) {
    $socket_loop = $loop;
}

// Now use $socket_loop for all sockets, and $loop for anything else
?>

   
```

## See Also

  `Ev::embeddableBackends()`
