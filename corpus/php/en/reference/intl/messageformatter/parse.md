---
id: "en-php-function-messageformatter-parse"
language: "php"
lang: "en"
category: "function"
name: "MessageFormatter::parse"
aliases: ["msgfmt_parse"]
title: "Parse input string according to pattern"
signature: "public array|false MessageFormatter::parse(string $string)"
module: "intl"
source_url: "https://www.php.net/manual/en/messageformatter.parse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parse input string according to pattern

## Description

Object-oriented style

```php
public array|false MessageFormatter::parse(string $string)
```

Procedural style

```php
array|false msgfmt_parse(MessageFormatter $formatter, string $string)
```

Parses input `string` and return any extracted items as an `array`.

## Parameters

- **`$formatter`** — The message formatter
- **`$string`** — The `string` to parse

## Return Values

An `array` containing the items extracted, or `false` on error

## Examples

**`msgfmt_parse()` example**

```php


<?php
$fmt = msgfmt_create('en_US', "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree");
$res = msgfmt_parse($fmt, "4,560 monkeys on 123 trees make 37.073 monkeys per tree");
var_export($res);

$fmt = msgfmt_create('de', "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,number} Affen pro Baum");
$res = msgfmt_parse($fmt, "4.560 Affen auf 123 Bäumen sind 37,073 Affen pro Baum");
var_export($res);
?>

   
```

**OO example**

```php


<?php
$fmt = new MessageFormatter('en_US', "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree");
$res = $fmt->parse("4,560 monkeys on 123 trees make 37.073 monkeys per tree");
var_export($res);

$fmt = new MessageFormatter('de', "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,number} Affen pro Baum");
$res = $fmt->parse("4.560 Affen auf 123 Bäumen sind 37,073 Affen pro Baum");
var_export($res);
?>

   
```

The above example will output:

```text


array (
  0 => 4560,
  1 => 123,
  2 => 37.073,
)
array (
  0 => 4560,
  1 => 123,
  2 => 37.073,
)

  
```

## See Also

`msgfmt_create()` `msgfmt_format()` `msgfmt_parse_message()`
