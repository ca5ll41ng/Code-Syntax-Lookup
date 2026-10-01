---
id: "en-php-function-splfileobject-fgetss"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::fgetss"
title: "Gets line from file and strip HTML tags"
signature: "public string SplFileObject::fgetss([string $allowable_tags = ...])"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.fgetss.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets line from file and strip HTML tags

## Description

```php
public string SplFileObject::fgetss([string $allowable_tags = ...])
```

Identical to `SplFileObject::fgets()`, except that `SplFileObject::fgetss()` attempts to strip any HTML and PHP tags from the text it reads. The function retains the parsing state from call to call, and as such is not equivalent to calling `strip_tags()` on the return value of `SplFileObject::fgets()`.

## Parameters

- **`$allowable_tags`** — Optional parameter to specify tags which should not be stripped.

## Return Values

Returns a string containing the next line of the file with HTML and PHP code stripped, or `false` on error.

## Examples

**`SplFileObject::fgetss()` example**

```php


<?php
$str = <<<EOD
<html><body>
 <p>Welcome! Today is the <?php echo(date('jS')); ?> of <?= date('F'); ?>.</p>
</body></html>
Text outside of the HTML block.
EOD;
file_put_contents("sample.php", $str);

$file = new SplFileObject("sample.php");
while (!$file->eof()) {
    echo $file->fgetss();
}
?>

    
```

The above example will output something similar to:

```text



 Welcome! Today is the  of .

Text outside of the HTML block.

    
```

## See Also

`fgetss()` `SplFileObject::fgets()` `SplFileObject::fgetc()` `SplFileObject::current()` The string.strip_tags filter
