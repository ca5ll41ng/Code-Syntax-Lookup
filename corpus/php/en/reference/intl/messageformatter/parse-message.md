---
id: "en-php-function-messageformatter-parsemessage"
language: "php"
lang: "en"
category: "function"
name: "MessageFormatter::parseMessage"
aliases: ["msgfmt_parse_message"]
title: "Quick parse input string"
signature: "public static array|false MessageFormatter::parseMessage(string $locale, string $pattern, string $message)"
module: "intl"
source_url: "https://www.php.net/manual/en/messageformatter.parsemessage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Quick parse input string

## Description

Object-oriented style

```php
public static array|false MessageFormatter::parseMessage(string $locale, string $pattern, string $message)
```

Procedural style

```php
array|false msgfmt_parse_message(string $locale, string $pattern, string $message)
```

Parses input string without explicitly creating the formatter object. Use this function when the format operation is done only once and does not need any parameters or state to be kept.

## Parameters

- **`$locale`** — The locale to use for parsing locale-dependent parts
- **`$pattern`** — The pattern with which to parse the `$message`.
- **`$message`** — The `string` to parse, conforming to the `$pattern`.

## Return Values

An `array` containing items extracted, or `false` on error

## Examples

**`msgfmt_parse_message()` example**

```php


<?php
$fmt = msgfmt_parse_message('en_US', "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree",
                            "4,560 monkeys on 123 trees make 37.073 monkeys per tree");
var_export($fmt);

$fmt = msgfmt_parse_message('de', "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,number} Affen pro Baum", 
                            "4.560 Affen auf 123 Bäumen sind 37,073 Affen pro Baum");
var_export($fmt);
?>

   
```

**OO example**

```php


<?php
$fmt = MessageFormatter::parseMessage('en_US', "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree",
                            "4,560 monkeys on 123 trees make 37.073 monkeys per tree");
var_export($fmt);

$fmt = MessageFormatter::parseMessage('de', "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,number} Affen pro Baum", 
                            "4.560 Affen auf 123 Bäumen sind 37,073 Affen pro Baum");
var_export($fmt);
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

`msgfmt_create()` `msgfmt_format_message()` `msgfmt_parse()`
