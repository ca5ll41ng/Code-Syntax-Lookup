---
id: "en-php-function-eventhttprequest-cancel"
language: "php"
lang: "en"
category: "function"
name: "EventHttpRequest::cancel"
title: "Cancels a pending HTTP request"
signature: "public void EventHttpRequest::cancel()"
module: "event"
source_url: "https://www.php.net/manual/en/eventhttprequest.cancel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Cancels a pending HTTP request

## Description

```php
public void EventHttpRequest::cancel()
```

Cancels a pending HTTP request.

Cancels an ongoing HTTP request. The callback associated with this request is not executed and the request object is freed. If the request is currently being processed, e.g. it is ongoing, the corresponding `EventHttpConnection` object is going to get reset.

A request cannot be canceled if its callback has executed already. A request may be canceled reentrantly from its chunked callback.

## Parameters

This function has no parameters.

## Return Values

No value is returned.
