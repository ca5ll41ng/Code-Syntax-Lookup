---
id: "en-php-function-parallel-run"
language: "php"
lang: "en"
category: "function"
name: "parallel\\run"
title: "Execution"
signature: "Future|null parallel\\run(Closure $task)"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel.run.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execution

## Description

```php
Future|null parallel\run(Closure $task)
```

Shall schedule `$task` for execution in parallel.

```php
Future|null parallel\run(Closure $task, array $argv)
```

Shall schedule `$task` for execution in parallel, passing `$argv` at execution time.

## Automatic Scheduling

If a `\parallel\Runtime` internally created and cached by a previous call to `parallel\run()` is idle, it will be used to execute the task. If no `\parallel\Runtime` is idle parallel will create and cache a `\parallel\Runtime`.

> `\parallel\Runtime` objects created by the programmer are not used for automatic scheduling.













## See Also

 `parallel-runtime.run`
