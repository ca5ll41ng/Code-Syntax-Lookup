---
id: "en-php-function-function-xattr-supported"
language: "php"
lang: "en"
category: "function"
name: "xattr_supported"
title: "Check if filesystem supports extended attributes"
signature: "bool xattr_supported(string $filename, int $flags = 0)"
module: "xattr"
source_url: "https://www.php.net/manual/en/function.xattr-supported.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if filesystem supports extended attributes

## Description

```php
bool xattr_supported(string $filename, int $flags = 0)
```

This functions checks if the filesystem holding the given file supports extended attributes. Read access to the file is required.

## Parameters

- **`$filename`** — The path of the tested file.
- **`$flags`** — | `XATTR_DONTFOLLOW` | Do not follow the symbolic link but operate on symbolic link itself. | | --- | --- |

## Return Values

This function returns `true` if filesystem supports extended attributes, `false` if it doesn't and `null` if it can't be determined (for example wrong path or lack of permissions to file).

## Examples

**`xattr_supported()` example**

The following code checks if we can use extended attributes.

```php


<?php
$file = 'some_file';

if (xattr_supported($file)) {
    /* ... make use of some xattr_* functions ... */
}

?>

    
```

## See Also

`xattr_get()` `xattr_list()`
