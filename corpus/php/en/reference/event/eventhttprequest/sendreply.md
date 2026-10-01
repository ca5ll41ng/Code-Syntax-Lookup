---
id: "en-php-function-eventhttprequest-sendreply"
language: "php"
lang: "en"
category: "function"
name: "EventHttpRequest::sendReply"
title: "Send an HTML reply to the client"
signature: "public void EventHttpRequest::sendReply(int $code, string $reason, [EventBuffer $buf = ...])"
module: "event"
source_url: "https://www.php.net/manual/en/eventhttprequest.sendreply.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send an HTML reply to the client

## Description

```php
public void EventHttpRequest::sendReply(int $code, string $reason, [EventBuffer $buf = ...])
```

Send an HTML reply to the client. The body of the reply consists of data in optional `$buf` parameter.

## Parameters

- **`$code`** — The HTTP response code to send.
- **`$reason`** — A brief message to send with the response code.
- **`$buf`** — The body of the response.

## Return Values

No value is returned.

## See Also

  `EventHttpRequest::sendError()`   `EventHttpRequest::sendReplyChunk()`
