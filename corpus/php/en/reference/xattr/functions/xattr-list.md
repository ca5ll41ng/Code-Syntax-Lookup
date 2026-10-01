---
id: "en-php-function-function-xattr-list"
language: "php"
lang: "en"
category: "function"
name: "xattr_list"
title: "Get a list of extended attributes"
signature: "array xattr_list(string $filename, int $flags = 0)"
module: "xattr"
source_url: "https://www.php.net/manual/en/function.xattr-list.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get a list of extended attributes

## Description

```php
array xattr_list(string $filename, int $flags = 0)
```

This functions gets a list of names of extended attributes of a file.

Extended attributes have two different namespaces: user and root. The user namespace is available to all users, while the root namespace is available only to users with root privileges. xattr operates on the user namespace by default, but this can be changed with the `$flags` parameter.

## Parameters

- **`$filename`** — The path of the file.
- **`$flags`** — | `XATTR_DONTFOLLOW` | Do not follow the symbolic link but operate on symbolic link itself. | | --- | --- | | `XATTR_ROOT` | Set attribute in root (trusted) namespace. Requires root privileges. |

## Return Values

This function returns an array with names of extended attributes.

## Examples

**Prints names of all extended attributes of file**

```php


<?php
$file = 'some_file';
$root_attributes = xattr_list($file, XATTR_ROOT);
$user_attributes = xattr_list($file);

echo "Root attributes: \n";
foreach ($root_attributes as $attr_name) {
    printf("%s\n", $attr_name);
}

echo "\n User attributes: \n";
foreach ($user_attributes as $attr_name) {
    printf("%s\n", $attr_name);
}

?>

    
```

## See Also

`xattr_get()`
