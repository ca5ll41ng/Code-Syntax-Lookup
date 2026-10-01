---
id: "en-php-function-function-xattr-remove"
language: "php"
lang: "en"
category: "function"
name: "xattr_remove"
title: "Remove an extended attribute"
signature: "bool xattr_remove(string $filename, string $name, int $flags = 0)"
module: "xattr"
source_url: "https://www.php.net/manual/en/function.xattr-remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove an extended attribute

## Description

```php
bool xattr_remove(string $filename, string $name, int $flags = 0)
```

This function removes an extended attribute of a file.

Extended attributes have two different namespaces: user and root. The user namespace is available to all users, while the root namespace is available only to users with root privileges. xattr operates on the user namespace by default, but this can be changed with the `$flags` parameter.

## Parameters

- **`$filename`** — The file from which we remove the attribute.
- **`$name`** — The name of the attribute to remove.
- **`$flags`** — | `XATTR_DONTFOLLOW` | Do not follow the symbolic link but operate on symbolic link itself. | | --- | --- | | `XATTR_ROOT` | Set attribute in root (trusted) namespace. Requires root privileges. |

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Removes all extended attributes of a file**

```php


<?php
$file = 'some_file';
$attributes = xattr_list($file);

foreach ($attributes as $attr_name) {
    xattr_remove($file, $attr_name);
}
?>

    
```

## See Also

`xattr_list()` `xattr_set()` `xattr_get()`
