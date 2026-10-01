---
id: "en-php-function-function-svn-cleanup"
language: "php"
lang: "en"
category: "function"
name: "svn_cleanup"
title: "Recursively cleanup a working copy directory, finishing incomplete operations and removing locks"
signature: "bool svn_cleanup(string $workingdir)"
module: "svn"
source_url: "https://www.php.net/manual/en/function.svn-cleanup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Recursively cleanup a working copy directory, finishing incomplete operations and removing locks

## Description

```php
bool svn_cleanup(string $workingdir)
```

Recursively cleanup working copy directory `$workingdir`, finishing any incomplete operations and removing working copy locks. Use when a working copy is in limbo and needs to be usable again.

## Parameters

- **`$workingdir`** — String path to local working directory to cleanup
  > Relative paths will be resolved as if the current working directory was the one that contains the PHP binary. To use the calling script's working directory, use `realpath()` or dirname(__FILE__).



## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Basic example**

This example demonstrates clean up of a working copy in a directory named help-me:

```php


<?php
svn_cleanup(realpath('help-me'));
?>

   
```

The `realpath()` call is necessary due to SVN's quirky handling of relative paths.

## Notes

> This function is *EXPERIMENTAL*. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

## See Also

 `update()` [SVN documentation on svn cleanup]()
