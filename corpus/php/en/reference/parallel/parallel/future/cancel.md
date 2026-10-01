---
id: "en-php-function-parallel-future-cancel"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Future::cancel"
title: "Cancellation"
signature: "public bool parallel\\Future::cancel()"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-future.cancel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Cancellation

## Description

```php
public bool parallel\Future::cancel()
```

Shall try to cancel the task

> If task is running, it will be interrupted.

> Internal function calls in progress cannot be interrupted.

## Exceptions

> Shall throw `parallel\Future\Error\Killed` if `parallel\Runtime` executing task was killed.

> Shall throw `parallel\Future\Error\Cancelled` if task was already cancelled.
