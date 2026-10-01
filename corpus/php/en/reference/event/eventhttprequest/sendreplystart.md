---
id: "en-php-function-eventhttprequest-sendreplystart"
language: "php"
lang: "en"
category: "function"
name: "EventHttpRequest::sendReplyStart"
title: "Initiate a chunked reply"
signature: "public void EventHttpRequest::sendReplyStart(int $code, string $reason)"
module: "event"
source_url: "https://www.php.net/manual/en/eventhttprequest.sendreplystart.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Initiate a chunked reply

## Description

```php
public void EventHttpRequest::sendReplyStart(int $code, string $reason)
```

Initiate a reply that uses `Transfer-Encoding` `chunked`.

This allows the caller to stream the reply back to the client and is useful when either not all of the reply data is immediately available or when sending very large replies.

The caller needs to supply data chunks with `EventHttpRequest::sendReplyChunk()` and complete the reply by calling `EventHttpRequest::sendReplyEnd()`.

## Parameters

- **`$code`** — The HTTP response code to send.
- **`$reason`** — A brief message to send with the response code.

## Return Values

No value is returned.

## See Also

  `EventHttpRequest::sendReplyChunk()`   `EventHttpRequest::sendReplyEnd()`
