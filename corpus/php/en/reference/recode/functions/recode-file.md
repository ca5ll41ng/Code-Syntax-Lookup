---
id: "en-php-function-function-recode-file"
language: "php"
lang: "en"
category: "function"
name: "recode_file"
title: "Recode from file to file according to recode request"
signature: "bool recode_file(string $request, resource $input, resource $output)"
module: "recode"
source_url: "https://www.php.net/manual/en/function.recode-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Recode from file to file according to recode request

## Description

```php
bool recode_file(string $request, resource $input, resource $output)
```

Recode the file referenced by file handle `$input` into the file referenced by file handle `$output` according to the recode `$request`.

## Parameters

- **`$request`** — The desired recode request type
- **`$input`** — A local file handle `resource` for the `$input`
- **`$output`** — A local file handle `resource` for the `$output`

## Return Values

Returns `false`, if unable to comply, `true` otherwise.

## Examples

**Basic `recode_file()` example**

```php


<?php
$input = fopen('input.txt', 'r');
$output = fopen('output.txt', 'w');
recode_file("us..flat", $input, $output);
?>

   
```

## Notes

This function does not currently process file handles referencing remote files (URLs). Both file handles must refer to local files.

## See Also

 `fopen()`
