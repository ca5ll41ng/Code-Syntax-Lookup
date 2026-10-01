---
id: "en-php-function-function-xattr-get"
language: "php"
lang: "en"
category: "function"
name: "xattr_get"
title: "Get an extended attribute"
signature: "string|false xattr_get(string $filename, string $name, int $flags = 0)"
module: "xattr"
source_url: "https://www.php.net/manual/en/function.xattr-get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get an extended attribute

## Description

```php
string|false xattr_get(string $filename, string $name, int $flags = 0)
```

This function gets the value of an extended attribute of a file.

Extended attributes have two different namespaces: user and root. The user namespace is available to all users, while the root namespace is available only to users with root privileges. xattr operates on the user namespace by default, but this can be changed with the `$flags` parameter.

## Parameters

- **`$filename`** — The file from which we get the attribute.
- **`$name`** — The name of the attribute.
- **`$flags`** — | `XATTR_DONTFOLLOW` | Do not follow the symbolic link but operate on symbolic link itself. | | --- | --- | | `XATTR_ROOT` | Set attribute in root (trusted) namespace. Requires root privileges. |

## Return Values

Returns a string containing the value or `false` if the attribute doesn't exist.

## Examples

**Checks if system administrator has signed the file**

```php


<?php
$file = '/usr/local/sbin/some_binary';
$signature = xattr_get($file, 'Root signature', XATTR_ROOT);

/* ... check if $signature is valid ... */

?>

    
```

## See Also

`xattr_list()` `xattr_set()` `xattr_remove()`
