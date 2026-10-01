---
id: "en-php-function-function-posix-getgrnam"
language: "php"
lang: "en"
category: "function"
name: "posix_getgrnam"
title: "Return info about a group by name"
signature: "array|false posix_getgrnam(string $name)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-getgrnam.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return info about a group by name

## Description

```php
array|false posix_getgrnam(string $name)
```

Gets information about a group provided its name.

## Parameters

- **`$name`** — The name of the group

## Return Values

Returns an `array` on success, or `false` on failure. The array elements returned are:

| Element | Description |
| --- | --- |
| name | The name element contains the name of the group. This is a short, usually less than 16 character "handle" of the group, not the real, full name. This should be the same as the `$name` parameter used when calling the function, and hence redundant. |
| passwd | The passwd element contains the group's password in an encrypted format. Often, for example on a system employing "shadow" passwords, an asterisk is returned instead. |
| gid | Group ID of the group in numeric form. |
| members | This consists of an `array` of `string`'s for all the members in the group. |

## Examples

**Example use of `posix_getgrnam()`**

```php


<?php

$groupinfo = posix_getgrnam("toons");

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

`posix_getegid()` `posix_getgrgid()` `filegroup()` `stat()` POSIX man page GETGRNAM(3)
