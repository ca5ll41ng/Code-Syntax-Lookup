---
id: "en-php-function-mysqli-get-charset"
language: "php"
lang: "en"
category: "function"
name: "mysqli::get_charset"
aliases: ["mysqli_get_charset"]
title: "Returns a character set object"
signature: "public object|null mysqli::get_charset()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli.get-charset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a character set object

## Description

Object-oriented style

```php
public object|null mysqli::get_charset()
```

Procedural style

```php
object|null mysqli_get_charset(mysqli $mysql)
```

Returns a character set object providing several properties of the current active character set.

## Parameters

- **`$mysql`** — Procedural style only: A `mysqli` object returned by `mysqli_connect()` or `mysqli_init()`

## Return Values

The function returns a character set object with the following properties:

- **`$charset`** — Character set name
- **`$collation`** — Collation name
- **`$dir`** — Directory the character set description was fetched from or "" for built-in character sets
- **`$min_length`** — Minimum character length in bytes
- **`$max_length`** — Maximum character length in bytes
- **`$number`** — Internal character set number
- **`$state`** — As of PHP 8.2.0, it is always `1`

## Examples

**`mysqli::get_charset()` example**

Object-oriented style

```php


<?php
  $db = mysqli_init();
  $db->real_connect("localhost","root","","test");
  $db->set_charset('latin1');
  var_dump($db->get_charset());
?>

   
```

Procedural style

```php


<?php
  $db = mysqli_init();
  mysqli_real_connect($db, "localhost","root","","test");
  mysqli_set_charset($db, 'latin1');
  var_dump(mysqli_get_charset($db));
?>

   
```

The above examples will output:

```text


object(stdClass)#2 (7) {
  ["charset"]=>
  string(6) "latin1"
  ["collation"]=>
  string(17) "latin1_swedish_ci"
  ["dir"]=>
  string(0) ""
  ["min_length"]=>
  int(1)
  ["max_length"]=>
  int(1)
  ["number"]=>
  int(8)
  ["state"]=>
  int(1)
}

   
```

## See Also

`mysqli_character_set_name()` `mysqli_set_charset()`
