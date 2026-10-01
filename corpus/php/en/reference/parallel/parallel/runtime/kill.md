---
id: "en-php-function-parallel-runtime-kill"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Runtime::kill"
title: "Runtime Join"
signature: "public void parallel\\Runtime::kill()"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-runtime.kill.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Join

## Description

```php
public void parallel\Runtime::kill()
```

Shall attempt to force the runtime to shutdown.

> Tasks scheduled for execution will not be executed, the currently running task shall be interrupted.

> Internal function calls in progress cannot be interrupted.

## Exceptions

> Shall throw `parallel\Runtime\Error\Closed` if `Runtime` was closed.
