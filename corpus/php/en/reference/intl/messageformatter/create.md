---
id: "en-php-function-messageformatter-create"
language: "php"
lang: "en"
category: "function"
name: "MessageFormatter::create"
aliases: ["MessageFormatter::__construct","msgfmt_create"]
title: "Constructs a new Message Formatter"
signature: "public static MessageFormatter|null MessageFormatter::create(string $locale, string $pattern)"
module: "intl"
source_url: "https://www.php.net/manual/en/messageformatter.create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a new Message Formatter

## Description

Object-oriented style (method)

```php
public static MessageFormatter|null MessageFormatter::create(string $locale, string $pattern)
```

Object-oriented style (constructor):

```php
public MessageFormatter::__construct(string $locale, string $pattern)
```

Procedural style

```php
MessageFormatter|null msgfmt_create(string $locale, string $pattern)
```

Constructs a new Message Formatter

## Parameters

- **`$locale`** — The locale to use when formatting arguments
- **`$pattern`** — The pattern string to stick arguments into. The pattern uses an 'apostrophe-friendly' syntax; see [Quoting/Escaping]() for details.

## Return Values

The formatter `object`, or `null` on failure.

## Errors/Exceptions

When invoked as constructor, on failure an `IntlException` is thrown.

## Examples

**`msgfmt_create()` example**

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

`msgfmt_format()` `msgfmt_parse()` `msgfmt_get_error_code()` `msgfmt_get_error_message()`
