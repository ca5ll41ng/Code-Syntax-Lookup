---
id: "en-php-function-splfileobject-fwrite"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::fwrite"
title: "Write to file"
signature: "public int|false SplFileObject::fwrite(string $data, int|null $length = null)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.fwrite.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write to file

## Description

```php
public int|false SplFileObject::fwrite(string $data, int|null $length = null)
```

Writes the contents of `$data` to the file

## Parameters

- **`$data`** — The string to be written to the file.
- **`$length`** — If the `$length` argument is `int`, writing will stop after `$length` bytes have been written or the end of `$data` is reached, whichever comes first.

## Return Values

Returns the number of bytes written, or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | `$length` is now nullable. |
| 7.4.0 | The function now returns `false` instead of zero on failure. |

## Examples

**`SplFileObject::fwrite()` example**

```php


<?php
$file = new SplFileObject("fwrite.txt", "w");
$written = $file->fwrite("12345");
echo "Wrote $written bytes to file";
?>

    
```

The above example will output something similar to:

```text


Wrote 5 bytes to file

    
```

## See Also

`fwrite()`
