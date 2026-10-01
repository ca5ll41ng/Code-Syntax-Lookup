---
id: "en-php-function-eventbufferevent-setpriority"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::setPriority"
title: "Assign a priority to a bufferevent"
signature: "public bool EventBufferEvent::setPriority(int $priority)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.setpriority.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Assign a priority to a bufferevent

## Description

```php
public bool EventBufferEvent::setPriority(int $priority)
```

Assign a priority to a bufferevent

> Only supported for socket buffer events

## Parameters

- **`$priority`** — Priority value.

## Return Values

Returns `true` on success or `false` on failure.
