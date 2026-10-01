---
id: "en-php-function-function-svn-mkdir"
language: "php"
lang: "en"
category: "function"
name: "svn_mkdir"
title: "Creates a directory in a working copy or repository"
signature: "bool svn_mkdir(string $path, [string $log_message = ...])"
module: "svn"
source_url: "https://www.php.net/manual/en/function.svn-mkdir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a directory in a working copy or repository

## Description

```php
bool svn_mkdir(string $path, [string $log_message = ...])
```

Creates a directory in a working copy or repository.

## Parameters

- **`$path`** — The path to the working copy or repository.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `svn_add()` `svn_copy()`
