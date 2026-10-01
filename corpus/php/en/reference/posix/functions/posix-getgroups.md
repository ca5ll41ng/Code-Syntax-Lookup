---
id: "en-php-function-function-posix-getgroups"
language: "php"
lang: "en"
category: "function"
name: "posix_getgroups"
title: "Return the group set of the current process"
signature: "array|false posix_getgroups()"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-getgroups.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the group set of the current process

## Description

```php
array|false posix_getgroups()
```

Gets the group set of the current process.

## Parameters

This function has no parameters.

## Return Values

Returns an array of integers containing the numeric group ids of the group set of the current process, or `false` on failure.

## Examples

**Example use of `posix_getgroups()`**

```php


<?php

$groups = posix_getgroups();

print_r($groups);
?>

    
```

The above example will output something similar to:

```text


Array
(
    [0] => 4
    [1] => 20
    [2] => 24
    [3] => 25
    [4] => 29
    [5] => 30
    [6] => 33
    [7] => 44
    [8] => 46
    [9] => 104
    [10] => 109
    [11] => 110
    [12] => 1000
)

    
```

## See Also

`posix_getgrgid()`
