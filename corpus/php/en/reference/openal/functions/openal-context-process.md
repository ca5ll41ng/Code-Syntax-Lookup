---
id: "en-php-function-function-openal-context-process"
language: "php"
lang: "en"
category: "function"
name: "openal_context_process"
title: "Process the specified context"
signature: "bool openal_context_process(resource $context)"
module: "openal"
source_url: "https://www.php.net/manual/en/function.openal-context-process.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Process the specified context

## Description

```php
bool openal_context_process(resource $context)
```

## Parameters

- **`$context`** — An Open AL(Context) resource (previously created by `openal_context_create()`).

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `openal_context_create()` `openal_context_current()` `openal_context_suspend()`
