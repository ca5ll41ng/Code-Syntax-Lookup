---
id: "en-php-function-eventhttprequest-senderror"
language: "php"
lang: "en"
category: "function"
name: "EventHttpRequest::sendError"
title: "Send an HTML error message to the client"
signature: "public void EventHttpRequest::sendError(int $error, string $reason = null)"
module: "event"
source_url: "https://www.php.net/manual/en/eventhttprequest.senderror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send an HTML error message to the client

## Description

```php
public void EventHttpRequest::sendError(int $error, string $reason = null)
```

Send an HTML error message to the client.

## Parameters

- **`$error`** — The HTTP error code.
- **`$reason`** — A brief explanation of the error. If `null`, the standard meaning of the error code will be used.

## Return Values

No value is returned.

## Examples

**`EventHttpRequest::sendError()` example**

```php


<?php
function _http_400($req) {
    $req->sendError(400);
}

$base = new EventBase();
$http = new EventHttp($base);

$http->setCallback("/err400", "_http_400");

$http->bind("0.0.0.0", 8010);
$base->loop();
?>

   
```

## See Also

  `EventHttpRequest::sendReply()`
