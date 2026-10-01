---
id: "en-php-function-eventhttp-addserveralias"
language: "php"
lang: "en"
category: "function"
name: "EventHttp::addServerAlias"
title: "Adds a server alias to the HTTP server object"
signature: "public bool EventHttp::addServerAlias(string $alias)"
module: "event"
source_url: "https://www.php.net/manual/en/eventhttp.addserveralias.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a server alias to the HTTP server object

## Description

```php
public bool EventHttp::addServerAlias(string $alias)
```

Adds a server alias to the HTTP server object.

## Parameters

- **`$alias`** — The alias to add.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`EventHttp::addServerAlias()` example**

```php


<?php
$base = new EventBase();
$http = new EventHttp($base);

$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

if (!$http->bind("127.0.0.1", 8088)) {
    exit("bind(1) failed\n");
};

if (!$http->addServerAlias("local.net")) {
    exit("Failed to add server alias\n");
}

$http->setCallback("/about", function($req) {
    echo "URI: ", $req->getUri(), PHP_EOL;
    $req->sendReply(200, "OK");
});
$base->dispatch();
?>

   
```

## See Also

  `EventHttp::removeServerAlias()`
