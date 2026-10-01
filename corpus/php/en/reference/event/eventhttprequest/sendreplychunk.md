---
id: "en-php-function-eventhttprequest-sendreplychunk"
language: "php"
lang: "en"
category: "function"
name: "EventHttpRequest::sendReplyChunk"
title: "Send another data chunk as part of an ongoing chunked reply"
signature: "public void EventHttpRequest::sendReplyChunk(EventBuffer $buf)"
module: "event"
source_url: "https://www.php.net/manual/en/eventhttprequest.sendreplychunk.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send another data chunk as part of an ongoing chunked reply

## Description

```php
public void EventHttpRequest::sendReplyChunk(EventBuffer $buf)
```

Send another data chunk as part of an ongoing chunked reply. After calling this method `$buf` will be empty.

## Parameters

- **`$buf`** — The data chunk to send as part of the reply.

## Return Values

No value is returned.

## See Also

  `EventHttpRequest::sendReplyStart()`   `EventHttpRequest::sendReplyEnd()`
