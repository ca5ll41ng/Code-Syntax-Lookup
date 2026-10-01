---
id: "en-php-function-eventbase-gettimeofdaycached"
language: "php"
lang: "en"
category: "function"
name: "EventBase::getTimeOfDayCached"
title: "Returns the current event base time"
signature: "public float EventBase::getTimeOfDayCached()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbase.gettimeofdaycached.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current event base time

## Description

```php
public float EventBase::getTimeOfDayCached()
```

On success returns the current time(as returned by `gettimeofday()` ), looking at the cached value in *base* if possible, and calling `gettimeofday()` or `clock_gettime()` as appropriate if there is no cached time.

## Parameters

This function has no parameters.

## Return Values

Returns the current *event base* time. On failure returns `null`.
