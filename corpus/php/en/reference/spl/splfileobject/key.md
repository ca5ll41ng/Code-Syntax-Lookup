---
id: "en-php-function-splfileobject-key"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::key"
title: "Get line number"
signature: "public int SplFileObject::key()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get line number

## Description

```php
public int SplFileObject::key()
```

Gets the current line number.

> This number may not reflect the actual line number in the file if `SplFileObject::setMaxLineLen()` is used to read fixed lengths of the file.

## Parameters

This function has no parameters.

## Return Values

Returns the current line number.

## Examples

**`SplFileObject::key()` example**

```php


<?php
$file = new SplFileObject("lipsum.txt");
foreach ($file as $line) {
    echo $file->key() . ". " . $line;
}
?>

    
```

The above example will output something similar to:

```text


0. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
1. Duis nec sapien felis, ac sodales nisl. 
2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

    
```

**`SplFileObject::key()` example with `SplFileObject::setMaxLineLen()`**

```php


<?php
$file = new SplFileObject("lipsum.txt");
$file->setMaxLineLen(20);
foreach ($file as $line) {
    echo $file->key() . ". " . $line . "\n";
}
?>

    
```

The above example will output something similar to:

```text


0. Lorem ipsum dolor s
1. it amet, consectetu
2. r adipiscing elit. 
3. 

4. Duis nec sapien fel
5. is, ac sodales nisl
6. . 

7. Lorem ipsum dolor s
8. it amet, consectetu
9. r adipiscing elit.


    
```

## See Also

`SplFileObject::current()` `SplFileObject::seek()` `SplFileObject::next()` `SplFileObject::rewind()` `SplFileObject::valid()`
