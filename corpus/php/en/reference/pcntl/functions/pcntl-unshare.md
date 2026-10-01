---
id: "en-php-function-function-pcntl-unshare"
language: "php"
lang: "en"
category: "function"
name: "pcntl_unshare"
title: "Dissociates parts of the process execution context"
signature: "bool pcntl_unshare(int $flags)"
module: "pcntl"
source_url: "https://www.php.net/manual/en/function.pcntl-unshare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dissociates parts of the process execution context

## Description

```php
bool pcntl_unshare(int $flags)
```

`pcntl_unshare()` allows a process to disassociate parts of its execution context that are currently being shared with other processes. The main use of `pcntl_unshare()` is to allow a process to control its shared execution context without creating a new process.

## Parameters

- **`$flags`** — The `$flags` parameter is a bitmask that specifies which parts of the execution context should be unshared. This parameter is specified by ORing together zero or more of the `CLONE_*` constants: `CLONE_NEWNS` `CLONE_NEWIPC` `CLONE_NEWUTS` `CLONE_NEWNET` `CLONE_NEWPID` `CLONE_NEWUSER` `CLONE_NEWCGROUP`

## Return Values

Returns `true` on success or `false` on failure. On failure it sets an error code, that can be retrieved with `pcntl_get_last_error()`.

## See Also

 PCNTL Constants `pcntl_get_last_error()`
