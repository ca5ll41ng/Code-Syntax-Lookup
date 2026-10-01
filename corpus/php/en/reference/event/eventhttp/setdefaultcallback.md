---
id: "en-php-function-eventhttp-setdefaultcallback"
language: "php"
lang: "en"
category: "function"
name: "EventHttp::setDefaultCallback"
title: "Sets default callback to handle requests that are not caught by specific callbacks"
signature: "public void EventHttp::setDefaultCallback(string $cb, [string $arg = ...])"
module: "event"
source_url: "https://www.php.net/manual/en/eventhttp.setdefaultcallback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets default callback to handle requests that are not caught by specific callbacks

## Description

```php
public void EventHttp::setDefaultCallback(string $cb, [string $arg = ...])
```

Sets default callback to handle requests that are not caught by specific callbacks

## Parameters

- **`$cb`** — The callback `callable`. It should match the following prototype:
  ```php
  void callback(EventHttpRequest $req = NULL, mixed $arg = NULL)
  ```


  - **`$req`** — `EventHttpRequest` object.
  - **`$arg`** — Custom data.


- **`$arg`** — User custom data passed to the callback.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`EventHttp::setDefaultCallback()` example**

```php


<?php
$base = new EventBase();
$http = new EventHttp($base);

$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

if (!$http->bind("127.0.0.1", 8088)) {
    exit("bind(1) failed\n");
};

$http->setDefaultCallback(function($req) {
    echo "URI: ", $req->getUri(), PHP_EOL;
    $req->sendReply(200, "OK");
});

$base->dispatch();
?>

   
```

## See Also

  `EventHttp::setCallback()`
