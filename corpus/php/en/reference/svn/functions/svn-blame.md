---
id: "en-php-function-function-svn-blame"
language: "php"
lang: "en"
category: "function"
name: "svn_blame"
title: "Get the SVN blame for a file"
signature: "array svn_blame(string $repository_url, int $revision_no = SVN_REVISION_HEAD)"
module: "svn"
source_url: "https://www.php.net/manual/en/function.svn-blame.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the SVN blame for a file

## Description

```php
array svn_blame(string $repository_url, int $revision_no = SVN_REVISION_HEAD)
```

Get the SVN blame of a file from a repository URL.

## Parameters

- **`$repository_url`** — The repository URL.
- **`$revision_no`** — The revision number.

## Return Values

An `array` of SVN blame information separated by line which includes the revision number, line number, line of code, author, and date.

## Examples

**`svn_blame()` example**

```php


<?php
$svnurl = 'http://svn.example.org/svnroot/foo/trunk/index.php';

print_r( svn_blame($svnurl) );

?>

   
```

The above example will output something similar to:

```text


Array
(
    [0] = Array
          (
           [rev] = 1
           [line_no] = 1
           [line] = Hello World
           [author] = joesmith
           [date] = 2007-07-02T05:51:26.628396Z
          )
    [1] = Array
          ...

   
```

## See Also

 `svn_diff()` `svn_logs()` `svn_status()`
