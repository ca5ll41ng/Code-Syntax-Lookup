---
id: "en-php-function-function-pcntl-getcpu"
language: "php"
lang: "en"
category: "function"
name: "pcntl_getcpu"
title: "Get the CPU number on which the calling process last executed"
signature: "int pcntl_getcpu()"
module: "pcntl"
source_url: "https://www.php.net/manual/en/function.pcntl-getcpu.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the CPU number on which the calling process last executed

## Description

```php
int pcntl_getcpu()
```

`pcntl_getcpu()` returns the number of the CPU on which the calling process was last executed. This function uses the `sched_getcpu(3)` system call available on Linux.

## Parameters

This function has no parameters.

## Return Values

Returns the CPU number as an `integer`.

## See Also

 `pcntl_getcpuaffinity()` `pcntl_setcpuaffinity()`
