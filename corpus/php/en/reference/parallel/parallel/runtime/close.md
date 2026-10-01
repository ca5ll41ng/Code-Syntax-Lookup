---
id: "en-php-function-parallel-runtime-close"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Runtime::close"
title: "Runtime Graceful Join"
signature: "public void parallel\\Runtime::close()"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-runtime.close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Graceful Join

## Description

```php
public void parallel\Runtime::close()
```

Shall request that the runtime shutsdown.

> Tasks scheduled for execution will be executed before the shutdown occurs.

## Exceptions

> Shall throw `parallel\Runtime\Error\Closed` if `Runtime` was already closed.
