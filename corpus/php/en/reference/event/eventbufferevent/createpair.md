---
id: "en-php-function-eventbufferevent-createpair"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::createPair"
title: "Creates two buffer events connected to each other"
signature: "public static array EventBufferEvent::createPair(EventBase $base, int $options = 0)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.createpair.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates two buffer events connected to each other

## Description

```php
public static array EventBufferEvent::createPair(EventBase $base, int $options = 0)
```

Returns array of two `EventBufferEvent` objects connected to each other. All the usual options are supported, except for `EventBufferEvent::OPT_CLOSE_ON_FREE`, which has no effect, and `EventBufferEvent::OPT_DEFER_CALLBACKS`, which is always on.

## Parameters

- **`$base`** — Associated event base
- **`$options`** — EventBufferEvent::OPT_* constants combined with bitwise `OR` operator.

## Return Values

Returns array of two `EventBufferEvent` objects connected to each other.

## Changelog

|  |  |
| --- | --- |
| PECL event 1.9.0 | Method made static. |
