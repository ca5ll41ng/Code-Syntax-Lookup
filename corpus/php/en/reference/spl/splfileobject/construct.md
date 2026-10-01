---
id: "en-php-function-splfileobject-construct"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::__construct"
title: "Construct a new file object"
signature: "public SplFileObject::__construct(string $filename, string $mode = \"r\", bool $useIncludePath = false, resource|null $context = null)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new file object

## Description

```php
public SplFileObject::__construct(string $filename, string $mode = "r", bool $useIncludePath = false, resource|null $context = null)
```

Construct a new file object.

## Parameters

- **`$filename`** — The file to read.
  > A URL can be used as a filename with this function if the fopen wrappers have been enabled. See `fopen()` for more details on how to specify the filename. See the `wrappers` for links to information about what abilities the various wrappers have, notes on their usage, and information on any predefined variables they may provide.


- **`$mode`** — The mode in which to open the file. See `fopen()` for a list of allowed modes.
- **`$useIncludePath`** — Whether to search in the include_path for `$filename`.
- **`$context`** — A valid context resource created with `stream_context_create()`.

## Errors/Exceptions

Throws a `RuntimeException` if the `$filename` cannot be opened.

Throws a `LogicException` if the `$filename` is a directory.

## Examples

**`SplFileObject::__construct()` example**

This example opens the current file and iterates over its contents line by line.

```php


<?php
$file = new SplFileObject(__FILE__);
foreach ($file as $line_num => $line) {
    echo "Line $line_num is $line";
}
?>

    
```

The above example will output something similar to:

```text


Line 0 is <?php
Line 1 is $file = new SplFileObject(__FILE__);
Line 2 is foreach ($file as $line_num => $line) {
Line 3 is     echo "Line $line_num is $line";
Line 4 is }
Line 5 is ?>

    
```

## See Also

`SplFileInfo::openFile()` `fopen()`
