---
id: "en-php-function-function-openal-context-suspend"
language: "php"
lang: "en"
category: "function"
name: "openal_context_suspend"
title: "Suspend the specified context"
signature: "bool openal_context_suspend(resource $context)"
module: "openal"
source_url: "https://www.php.net/manual/en/function.openal-context-suspend.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Suspend the specified context

## Description

```php
bool openal_context_suspend(resource $context)
```

## Parameters

- **`$context`** — An Open AL(Context) resource (previously created by `openal_context_create()`).

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `openal_context_create()` `openal_context_current()` `openal_context_process()`
