---
id: "en-php-function-splfileobject-fscanf"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::fscanf"
title: "Parses input from file according to a format"
signature: "public array|int|null SplFileObject::fscanf(string $format, mixed $vars)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.fscanf.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parses input from file according to a format

## Description

```php
public array|int|null SplFileObject::fscanf(string $format, mixed $vars)
```

Reads a line from the file and interprets it according to the specified `$format`.

Any whitespace in the `$format` string matches any whitespace in the line from the file. This means that even a tab (`\t`) in the format string can match a single space character in the input stream.

## Parameters

- **`$format`** — The interpreted format for `$string`, which is described in the documentation for `sprintf()` with following differences: Function is not locale-aware. `F`, `g`, `G` and `b` are not supported. `D` stands for decimal number. `i` stands for integer with base detection. `n` stands for number of characters processed so far. `s` stops reading at any whitespace character. `*` instead of `argnum$` suppresses the assignment of this conversion specification.
- **`$vars`** — The optional assigned values.

## Return Values

If only one parameter is passed to this method, the values parsed will be returned as an `array`. Otherwise, if optional parameters are passed, the method will return the number of assigned values. The optional parameters must be passed by reference.

If there are more substrings expected in the `$format` than there are available in the line read from the file, `null` will be returned.

When optional parameters are used and the end of the line read from the file is reached before any value has been parsed, `-1` is returned.

## Examples

**`SplFileObject::fscanf()` example**

```php


<?php
$file = new SplFileObject("misc.txt");
while ($userinfo = $file->fscanf("%s %s %s")) {
   list ($name, $profession, $countrycode) = $userinfo;
   // Do something with $name $profession $countrycode
}
?>

   
```

Contents of users.txt

```txt


javier   argonaut    pe
hiroshi  sculptor    jp
robert   slacker     us
luigi    florist     it

   
```

## See Also

 `fscanf()` `sscanf()` `printf()` `sprintf()`
