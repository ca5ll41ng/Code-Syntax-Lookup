---
id: "en-php-function-messageformatter-format"
language: "php"
lang: "en"
category: "function"
name: "MessageFormatter::format"
aliases: ["msgfmt_format"]
title: "Format the message"
signature: "public string|false MessageFormatter::format(array $values)"
module: "intl"
source_url: "https://www.php.net/manual/en/messageformatter.format.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Format the message

## Description

Object-oriented style

```php
public string|false MessageFormatter::format(array $values)
```

Procedural style

```php
string|false msgfmt_format(MessageFormatter $formatter, array $values)
```

Format the message by substituting the data into the format string according to the locale rules

## Parameters

- **`$formatter`** — The message formatter
- **`$values`** — Arguments to insert into the format string

## Return Values

The formatted string, or `false` if an error occurred

## Examples

**`msgfmt_format()` example**

```php


<?php
$fmt = msgfmt_create("en_US", "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree");
echo msgfmt_format($fmt, array(4560, 123, 4560/123));
$fmt = msgfmt_create("de", "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,number} Affen pro Baum");
echo msgfmt_format($fmt, array(4560, 123, 4560/123));
?>

   
```

**OO example**

```php


<?php
$fmt = new MessageFormatter("en_US", "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree");
echo $fmt->format(array(4560, 123, 4560/123));
$fmt = new MessageFormatter("de", "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,number} Affen pro Baum");
echo $fmt->format(array(4560, 123, 4560/123));
?>

   
```

The above example will output:

```text


4,560 monkeys on 123 trees make 37.073 monkeys per tree
4.560 Affen auf 123 Bäumen sind 37,073 Affen pro Baum

  
```

## See Also

`msgfmt_create()` `msgfmt_parse()` `msgfmt_format_message()` `msgfmt_get_error_code()` `msgfmt_get_error_message()`
