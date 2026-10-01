---
id: "en-php-function-function-svn-checkout"
language: "php"
lang: "en"
category: "function"
name: "svn_checkout"
title: "Checks out a working copy from the repository"
signature: "bool svn_checkout(string $repos, string $targetpath, [int $revision = ...], int $flags = 0)"
module: "svn"
source_url: "https://www.php.net/manual/en/function.svn-checkout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks out a working copy from the repository

## Description

```php
bool svn_checkout(string $repos, string $targetpath, [int $revision = ...], int $flags = 0)
```

Checks out a working copy from the repository at `$repos` to `$targetpath` at revision `$revision`.

## Parameters

- **`$repos`** — String URL path to directory in repository to check out.
- **`$targetpath`** — String local path to directory to check out in to
  > Relative paths will be resolved as if the current working directory was the one that contains the PHP binary. To use the calling script's working directory, use `realpath()` or dirname(__FILE__).


- **`$revision`** — Integer revision number of repository to check out. Default is HEAD, the most recent revision.
- **`$flags`** — Any combination of `SVN_NON_RECURSIVE` and `SVN_IGNORE_EXTERNALS`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Basic example**

This example demonstrates how to check out a directory from a repository to a directory named calc:

```php


<?php
svn_checkout('http://www.example.com/svnroot/calc/trunk', dirname(__FILE__) . '/calc');
?>

   
```

The `dirname(__FILE__)` call is necessary in order to convert the calc relative path into an absolute one. If calc exists, you can also use `realpath()` to retrieve an absolute path.

## Notes

> This function is *EXPERIMENTAL*. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

## See Also

 `svn_add()` `svn_commit()` `svn_status()` `svn_update()` [SVN documentation on svn checkout]()
