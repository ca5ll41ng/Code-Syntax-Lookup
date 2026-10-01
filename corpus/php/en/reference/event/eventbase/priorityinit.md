---
id: "en-php-function-eventbase-priorityinit"
language: "php"
lang: "en"
category: "function"
name: "EventBase::priorityInit"
title: "Sets number of priorities per event base"
signature: "public bool EventBase::priorityInit(int $n_priorities)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbase.priorityinit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets number of priorities per event base

## Description

```php
public bool EventBase::priorityInit(int $n_priorities)
```

Sets number of priorities per event base.

## Parameters

- **`$n_priorities`** — The number of priorities per event base.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `Event::setPriority()`
