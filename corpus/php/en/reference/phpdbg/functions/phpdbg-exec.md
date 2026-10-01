---
id: "en-php-function-function-phpdbg-exec"
language: "php"
lang: "en"
category: "function"
name: "phpdbg_exec"
title: "Attempts to set the execution context"
signature: "string|bool phpdbg_exec(string $context)"
module: "phpdbg"
source_url: "https://www.php.net/manual/en/function.phpdbg-exec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Attempts to set the execution context

## Description

```php
string|bool phpdbg_exec(string $context)
```

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$context`**

## Return Values

If the execution context was set previously it is returned. If the execution context was not set previously `true` is returned. If the request to set the context fails, `false` is returned, and an `E_WARNING` raised.
