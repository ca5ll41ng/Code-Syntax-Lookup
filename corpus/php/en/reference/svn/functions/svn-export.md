---
id: "en-php-function-function-svn-export"
language: "php"
lang: "en"
category: "function"
name: "svn_export"
title: "Export the contents of a SVN directory"
signature: "bool svn_export(string $frompath, string $topath, bool $working_copy = true, int $revision_no = -1)"
module: "svn"
source_url: "https://www.php.net/manual/en/function.svn-export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Export the contents of a SVN directory

## Description

```php
bool svn_export(string $frompath, string $topath, bool $working_copy = true, int $revision_no = -1)
```

Export the contents of either a working copy or repository into a 'clean' directory.

## Parameters

- **`$frompath`** — The path to the current repository.
- **`$topath`** — The path to the new repository.
- **`$working_copy`** — If `true`, it will export uncommitted files from the working copy.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`svn_export()` example**

```php


<?php
$working_dir     = '../';
$new_working_dir = '/home/user/devel/foo/trunk';

svn_export($working_dir, $new_working_dir);
?>

   
```

## See Also

 `svn_import()`
