---
id: "en-php-function-function-svn-revert"
language: "php"
lang: "en"
category: "function"
name: "svn_revert"
title: "Revert changes to the working copy"
signature: "bool svn_revert(string $path, bool $recursive = false)"
module: "svn"
source_url: "https://www.php.net/manual/en/function.svn-revert.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Revert changes to the working copy

## Description

```php
bool svn_revert(string $path, bool $recursive = false)
```

Revert any local changes to the path in a working copy.

## Parameters

- **`$path`** — The path to the working repository.
- **`$recursive`** — Optionally make recursive changes.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `svn_delete()` `svn_export()`
