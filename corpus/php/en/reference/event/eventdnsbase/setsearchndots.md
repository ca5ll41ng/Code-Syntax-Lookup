---
id: "en-php-function-eventdnsbase-setsearchndots"
language: "php"
lang: "en"
category: "function"
name: "EventDnsBase::setSearchNdots"
title: "Set the 'ndots' parameter for searches"
signature: "public bool EventDnsBase::setSearchNdots(int $ndots)"
module: "event"
source_url: "https://www.php.net/manual/en/eventdnsbase.setsearchndots.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the 'ndots' parameter for searches

## Description

```php
public bool EventDnsBase::setSearchNdots(int $ndots)
```

Set the `$'ndots'` parameter for searches. Sets the number of dots which, when found in a name, causes the first query to be without any search domain.

## Parameters

- **`$ndots`** — The number of dots.

## Return Values

Returns `true` on success or `false` on failure.
