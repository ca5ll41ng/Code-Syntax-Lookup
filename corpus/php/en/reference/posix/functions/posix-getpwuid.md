---
id: "en-php-function-function-posix-getpwuid"
language: "php"
lang: "en"
category: "function"
name: "posix_getpwuid"
title: "Return info about a user by user id"
signature: "array|false posix_getpwuid(int $user_id)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-getpwuid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return info about a user by user id

## Description

```php
array|false posix_getpwuid(int $user_id)
```

Returns an `array` of information about the user referenced by the given user ID.

## Parameters

- **`$user_id`** — The user identifier.

## Return Values

Returns an associative array with the following elements:

| Element | Description |
| --- | --- |
| name | The name element contains the username of the user. This is a short, usually less than 16 character "handle" of the user, not the real, full name. |
| passwd | The passwd element contains the user's password in an encrypted format. Often, for example on a system employing "shadow" passwords, an asterisk is returned instead. |
| uid | User ID, should be the same as the `$user_id` parameter used when calling the function, and hence redundant. |
| gid | The group ID of the user. Use the function `posix_getgrgid()` to resolve the group name and a list of its members. |
| gecos | GECOS is an obsolete term that refers to the finger information field on a Honeywell batch processing system. The field, however, lives on, and its contents have been formalized by POSIX. The field contains a comma separated list containing the user's full name, office phone, office number, and home phone number. On most systems, only the user's full name is available. |
| dir | This element contains the absolute path to the home directory of the user. |
| shell | The shell element contains the absolute path to the executable of the user's default shell. |

The function returns `false` on failure.

## Examples

**Example use of `posix_getpwuid()`**

```php


<?php

$userinfo = posix_getpwuid(10000);

print_r($userinfo);
?>

    
```

The above example will output something similar to:

```text


Array
(
    [name]    => tom
    [passwd]  => x
    [uid]     => 10000
    [gid]     => 42
    [gecos]   => "tom,,,"
    [dir]     => "/home/tom"
    [shell]   => "/bin/bash"
)

    
```

## See Also

`posix_getpwnam()` POSIX man page GETPWNAM(3)
