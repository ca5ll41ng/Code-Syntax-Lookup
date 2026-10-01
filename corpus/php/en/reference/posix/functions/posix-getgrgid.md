---
id: "en-php-function-function-posix-getgrgid"
language: "php"
lang: "en"
category: "function"
name: "posix_getgrgid"
title: "Return info about a group by group id"
signature: "array|false posix_getgrgid(int $group_id)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-getgrgid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return info about a group by group id

## Description

```php
array|false posix_getgrgid(int $group_id)
```

Gets information about a group provided its id.

## Parameters

- **`$group_id`** — The group id.

## Return Values

The array elements returned are:

| Element | Description |
| --- | --- |
| name | The name element contains the name of the group. This is a short, usually less than 16 character "handle" of the group, not the real, full name. |
| passwd | The passwd element contains the group's password in an encrypted format. Often, for example on a system employing "shadow" passwords, an asterisk is returned instead. |
| gid | Group ID, should be the same as the `$group_id` parameter used when calling the function, and hence redundant. |
| members | This consists of an `array` of `string`'s for all the members in the group. |

The function returns `false` on failure.

## Examples

**Example use of `posix_getgrgid()`**

```php


<?php

$groupid   = posix_getegid();
$groupinfo = posix_getgrgid($groupid);

print_r($groupinfo);
?>

    
```

The above example will output something similar to:

```text


Array
(
    [name]    => toons
    [passwd]  => x
    [members] => Array
        (
            [0] => tom
            [1] => jerry
        )
    [gid]     => 42
)

    
```

## See Also

`posix_getegid()` `posix_getgrnam()` `filegroup()` `stat()` POSIX man page GETGRNAM(3)
