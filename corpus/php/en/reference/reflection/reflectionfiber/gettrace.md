---
id: "en-php-function-reflectionfiber-gettrace"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFiber::getTrace"
title: "Get the backtrace of the current execution point"
signature: "public array ReflectionFiber::getTrace(int $options = DEBUG_BACKTRACE_PROVIDE_OBJECT)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfiber.gettrace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the backtrace of the current execution point

## Description

```php
public array ReflectionFiber::getTrace(int $options = DEBUG_BACKTRACE_PROVIDE_OBJECT)
```

Get the backtrace of the current execution point in the reflected `Fiber`.

## Parameters

- **`$options`** — The value of `$options` can be any of the following flags. — | Option |  | | --- | --- | | `DEBUG_BACKTRACE_PROVIDE_OBJECT` | Default. | | `DEBUG_BACKTRACE_IGNORE_ARGS` | Don't include the argument information for functions in the stack trace. |

## Return Values

The backtrace of the current execution point in the fiber.
