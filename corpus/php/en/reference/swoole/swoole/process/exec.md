---
id: "en-php-function-swoole-process-exec"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Process::exec"
title: "Execute system commands."
signature: "public ReturnType Swoole\\Process::exec(string $exec_file, string $args)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-process.exec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute system commands.

## Description

```php
public ReturnType Swoole\Process::exec(string $exec_file, string $args)
```

The process will be replaced to be the system command process, but the pipe to the parent process will be kept.

## Parameters

- **`$exec_file`**
- **`$args`**

## Return Values
