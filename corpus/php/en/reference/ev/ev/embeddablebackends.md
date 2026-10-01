---
id: "en-php-function-ev-embeddablebackends"
language: "php"
lang: "en"
category: "function"
name: "Ev::embeddableBackends"
title: "Returns the set of backends that are embeddable in other event loops"
signature: "final public static int Ev::embeddableBackends()"
module: "ev"
source_url: "https://www.php.net/manual/en/ev.embeddablebackends.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the set of backends that are embeddable in other event loops

## Description

```php
final public static int Ev::embeddableBackends()
```

Returns the set of backends that are embeddable in other event loops.

## Parameters

This function has no parameters.

## Return Values

Returns a bit mask which can containing backend flags combined using bitwise *OR* operator.

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

  `EvEmbed`   `Ev::recommendedBackends()`   `Ev::supportedBackends()`   Backend flags   Examples
