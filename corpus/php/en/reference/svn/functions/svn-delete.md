---
id: "en-php-function-function-svn-delete"
language: "php"
lang: "en"
category: "function"
name: "svn_delete"
title: "Delete items from a working copy or repository"
signature: "bool svn_delete(string $path, bool $force = false)"
module: "svn"
source_url: "https://www.php.net/manual/en/function.svn-delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete items from a working copy or repository

## Description

```php
bool svn_delete(string $path, bool $force = false)
```

Deletes the file, directory or symbolic link at `$path` from the working directory. The item will be deleted from the repository the next time you call `svn_commit()` on the working copy.

## Parameters

- **`$path`** — Path of item to delete.
  > Relative paths will be resolved as if the current working directory was the one that contains the PHP binary. To use the calling script's working directory, use `realpath()` or dirname(__FILE__).


- **`$force`** — If `true`, the file will be deleted even if it has local modifications. Otherwise, local modifications will result in a failure. Default is `false`

## Return Values

Returns `true` on success or `false` on failure.

## Notes

> This function is *EXPERIMENTAL*. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

## See Also

 [SVN documentation on svn delete]()
