---
id: "en-php-function-function-svn-update"
language: "php"
lang: "en"
category: "function"
name: "svn_update"
title: "Update working copy"
signature: "int svn_update(string $path, int $revno = SVN_REVISION_HEAD, bool $recurse = true)"
module: "svn"
source_url: "https://www.php.net/manual/en/function.svn-update.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Update working copy

## Description

```php
int svn_update(string $path, int $revno = SVN_REVISION_HEAD, bool $recurse = true)
```

Update working copy at `$path` to revision `$revno`. If `$recurse` is true, directories will be recursively updated.

## Parameters

- **`$path`** — Path to local working copy.
  > Relative paths will be resolved as if the current working directory was the one that contains the PHP binary. To use the calling script's working directory, use `realpath()` or dirname(__FILE__).


- **`$revno`** — Revision number to update to, default is `SVN_REVISION_HEAD`.
- **`$recurse`** — Whether or not to recursively update directories.

## Return Values

Returns new revision number on success, returns `false` on failure.

## Examples

**Basic example**

This example demonstrates basic usage of this function:

```php


<?php
echo svn_update(realpath('working-copy'));
?>

   
```

The above example will output something similar to:

```text


234

   
```

## Notes

> This function is *EXPERIMENTAL*. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

## See Also

 `svn_checkout()` `svn_commit()` [SVN documentation for svn update]()
