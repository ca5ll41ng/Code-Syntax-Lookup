---
id: "en-php-function-function-svn-cat"
language: "php"
lang: "en"
category: "function"
name: "svn_cat"
title: "Returns the contents of a file in a repository"
signature: "string svn_cat(string $repos_url, [int $revision_no = ...])"
module: "svn"
source_url: "https://www.php.net/manual/en/function.svn-cat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the contents of a file in a repository

## Description

```php
string svn_cat(string $repos_url, [int $revision_no = ...])
```

Returns the contents of the URL `$repos_url` to a file in the repository, optionally at revision number `$revision_no`.

## Parameters

- **`$repos_url`** — String URL path to item in a repository.
- **`$revision_no`** — Integer revision number of item to retrieve, default is the HEAD revision.

## Return Values

Returns the string contents of the item from the repository on success, and `false` on failure.

## Examples

**Basic example**

This example retrieves the contents of a file at revision 28:

```php


<?php
$contents = svn_cat('http://www.example.com/svnroot/calc/gui.c', 28)
?>

   
```

## Notes

> This function is *EXPERIMENTAL*. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

## See Also

 `svn_list()` [SVN documentation on svn cat]()
