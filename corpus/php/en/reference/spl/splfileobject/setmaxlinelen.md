---
id: "en-php-function-splfileobject-setmaxlinelen"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::setMaxLineLen"
title: "Set maximum line length"
signature: "public void SplFileObject::setMaxLineLen(int $maxLength)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.setmaxlinelen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set maximum line length

## Description

```php
public void SplFileObject::setMaxLineLen(int $maxLength)
```

Sets the maximum length of a line to be read.

## Parameters

- **`$maxLength`** — The maximum length of a line.

## Return Values

No value is returned.

## Errors/Exceptions

Throws `DomainException` when `$maxLength` is less than zero.

## Examples

**`SplFileObject::setMaxLineLen()` example**

```php


<?php
$file = new SplFileObject("lipsum.txt");
$file->setMaxLineLen(20);
foreach ($file as $line) {
    echo $line . "\n";
}
?>

    
```

Contents of lipsum.txt

```txt


Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Duis nec sapien felis, ac sodales nisl.
Nulla vitae magna vitae purus aliquet consequat.

    
```

The above example will output something similar to:

```text


Lorem ipsum dolor s
it amet, consectetu
r adipiscing elit.

Duis nec sapien fel
is, ac sodales nisl
.

Nulla vitae magna v
itae purus aliquet 
consequat.

    
```

## See Also

`SplFileObject::getMaxLineLen()`
