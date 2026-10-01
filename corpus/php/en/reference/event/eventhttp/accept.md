---
id: "en-php-function-eventhttp-accept"
language: "php"
lang: "en"
category: "function"
name: "EventHttp::accept"
title: "Makes an HTTP server accept connections on the specified socket stream or resource"
signature: "public bool EventHttp::accept(mixed $socket)"
module: "event"
source_url: "https://www.php.net/manual/en/eventhttp.accept.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Makes an HTTP server accept connections on the specified socket stream or resource

## Description

```php
public bool EventHttp::accept(mixed $socket)
```

Makes an HTTP server accept connections on the specified socket stream or resource. The socket should be ready to accept connections.

Can be called multiple times to accept connections on different sockets.

> To bind a socket, `listen`, and `accept` connections on the socket in a single call use `EventHttp::bind()`. `EventHttp::accept()` is needed only if one already has a socket ready to accept connections.

## Parameters

- **`$socket`** — Socket resource, stream or numeric file descriptor representing a socket ready to accept connections.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`EventHttp::accept()` example**

```php


<?php

$base = new EventBase();
$http = new EventHttp($base);

$addresses = [
    8091 => "127.0.0.1",
    8092 => "127.0.0.2",
];
$i = 0;

$socket = array();

foreach ($addresses as $port => $ip) {
    echo $ip, " ", $port, PHP_EOL;
    $socket[$i] = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

    if (!socket_bind($socket[$i], $ip, $port)) {
        exit("socket_bind failed\n");
    }

    socket_listen($socket[$i], 0);
    socket_set_nonblock($socket[$i]);

    if (!$http->accept($socket[$i])) {
        echo "Accept failed\n";
        exit(1);
    }

    ++$i;
}

$http->setCallback("/some-page", function () {
    echo "(some-page)\n";
    echo "URI: ", $req->getUri(), PHP_EOL;
    $req->sendReply(200, "OK");
    echo "OK\n";
});

$http->setDefaultCallback(function ($req) {
    echo "URI: ", $req->getUri(), PHP_EOL;
    $req->sendReply(200, "OK");
    echo "OK\n";
});

$signal = Event::signal($base, SIGINT, function () use ($base) {
    echo "Caught SIGINT. Stopping...\n";
    $base->stop();
});
$signal->add();

$base->dispatch();
echo "END\n";
// We didn't close sockets, since Libevent already sets
// CLOSE_ON_FREE and CLOSE_ON_EXEC flags on the file 
// descriptor associated with the sockets.
?>

   
```

The above example will output something similar to:

```text


Client:
$ nc 127.0.0.1 8091
GET /about HTTP/1.0
Connection: close

HTTP/1.0 200 OK
Content-Type: text/html; charset=ISO-8859-1
Connection: close

Server:
127.0.0.1 8091
127.0.0.2 8092
URI: /about
OK

   
```

## See Also

  `EventHttp::bind()`
