---
id: "en-php-function-function-svn-import"
language: "php"
lang: "en"
category: "function"
name: "svn_import"
title: "Imports an unversioned path into a repository"
signature: "bool svn_import(string $path, string $url, bool $nonrecursive)"
module: "svn"
source_url: "https://www.php.net/manual/en/function.svn-import.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Imports an unversioned path into a repository

## Description

```php
bool svn_import(string $path, string $url, bool $nonrecursive)
```

Commits unversioned `$path` into repository at `$url`. If `$path` is a directory and `$nonrecursive` is `false`, the directory will be imported recursively.

## Parameters

- **`$path`** — Path of file or directory to import.
  > Relative paths will be resolved as if the current working directory was the one that contains the PHP binary. To use the calling script's working directory, use `realpath()` or dirname(__FILE__).


- **`$url`** — Repository URL to import into.
- **`$nonrecursive`** — Whether or not to refrain from recursively processing directories.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Basic example**

This example demonstrates a basic use-case of this function. To import a directory named new-files into the repository at http://www.example.com/svnroot/incoming/abc, use:

```php


<?php
svn_import(realpath('new-files'), 'http://www.example.com/svnroot/incoming/abc', false);
?>

   
```

## Notes

> This function is *EXPERIMENTAL*. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

## See Also

 `svn_add()` [SVN documentation for svn import]()
