---
id: "en-php-function-parallel-future-value"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Future::value"
title: "Resolution"
signature: "public mixed parallel\\Future::value()"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-future.value.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Resolution

## Description

```php
public mixed parallel\Future::value()
```

Shall return (and if necessary wait for) return from task

## Exceptions

> Shall throw `parallel\Future\Error` if waiting failed (internal error).

> Shall throw `parallel\Future\Error\Killed` if `parallel\Runtime` executing task was killed.

> Shall throw `parallel\Future\Error\Cancelled` if task was cancelled.

> Shall throw `parallel\Future\Error\Foreign` if task raised an unrecognized uncaught exception.

> Shall rethrow `Throwable` uncaught in task
