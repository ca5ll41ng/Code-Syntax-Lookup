---
id: "en-php-function-event-pending"
language: "php"
lang: "en"
category: "function"
name: "Event::pending"
title: "Detects whether event is pending or scheduled"
signature: "public bool Event::pending(int $flags)"
module: "event"
source_url: "https://www.php.net/manual/en/event.pending.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Detects whether event is pending or scheduled

## Description

```php
public bool Event::pending(int $flags)
```

Detects whether event is pending or scheduled

## Parameters

- **`$flags`** — One of, or a composition of the following constants: `Event::READ`, `Event::WRITE`, `Event::TIMEOUT`, `Event::SIGNAL`.

## Return Values

Returns `true` if event is pending or scheduled. Otherwise `false`.
