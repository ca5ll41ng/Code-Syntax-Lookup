---
id: "en-php-function-function-pcntl-setns"
language: "php"
lang: "en"
category: "function"
name: "pcntl_setns"
title: "Reassociate the calling process with a namespace of another process"
signature: "bool pcntl_setns(int|null $process_id = null, int $nstype = CLONE_NEWNET)"
module: "pcntl"
source_url: "https://www.php.net/manual/en/function.pcntl-setns.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reassociate the calling process with a namespace of another process

## Description

```php
bool pcntl_setns(int|null $process_id = null, int $nstype = CLONE_NEWNET)
```

Reassociates the calling process with a Linux namespace of the process specified by `$process_id`, using a pidfd obtained via `pidfd_open(2)` and `setns(2)`.

## Parameters

- **`$process_id`** — The process ID of the target process whose namespace to join. If `null`, the calling process's own PID is used.
- **`$nstype`** — The namespace type to reassociate with. Defaults to `CLONE_NEWNET` (network namespace). Possible values include `CLONE_NEWNET`, `CLONE_NEWIPC`, `CLONE_NEWUTS`, and others.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `pcntl_unshare()`
