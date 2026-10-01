---
id: "en-php-function-messageformatter-formatmessage"
language: "php"
lang: "en"
category: "function"
name: "MessageFormatter::formatMessage"
aliases: ["msgfmt_format_message"]
title: "Quick format message"
signature: "public static string|false MessageFormatter::formatMessage(string $locale, string $pattern, array $values)"
module: "intl"
source_url: "https://www.php.net/manual/en/messageformatter.formatmessage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Quick format message

## Description

Object-oriented style

```php
public static string|false MessageFormatter::formatMessage(string $locale, string $pattern, array $values)
```

Procedural style

```php
string|false msgfmt_format_message(string $locale, string $pattern, array $values)
```

Quick formatting function that formats the string without having to explicitly create the formatter object. Use this function when the format operation is done only once and does not need any parameters or state to be kept or when wanting to customize the output by providing additional context to ICU directly.

## Parameters

- **`$locale`** — The locale to use for formatting locale-dependent parts
- **`$pattern`** — The pattern `string` to insert things into. The pattern uses an 'apostrophe-friendly' syntax; see [Quoting/Escaping]() for details.
- **`$values`** — The `array` of values to insert into the format `string`

## Return Values

The formatted pattern string or `false` if an error occurred

## Examples

**`msgfmt_format_message()` example**

```php


<?php
echo msgfmt_format_message("en_US", "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree\n", array(4560, 123, 4560/123));
echo msgfmt_format_message("de", "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,number} Affen pro Baum\n", array(4560, 123, 4560/123));
echo msgfmt_format_message("en", 'You finished {place, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}!', ['place' => 3]), "\n";
echo msgfmt_format_message("en",
        "There {apple, plural,
            =0 {are no apples}
            =1 {is one apple...}
            other {are # apples!}
        }",
    ['apple' => 0]
), "\n";

   
```

**OO example**

```php


<?php
echo MessageFormatter::formatMessage("en_US", "{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree\n", array(4560, 123, 4560/123));
echo MessageFormatter::formatMessage("de", "{0,number,integer} Affen auf {1,number,integer} Bäumen sind {2,number} Affen pro Baum\n", array(4560, 123, 4560/123));
echo MessageFormatter::formatMessage("en", 'You finished {place, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}!', ['place' => 3]), "\n";
echo MessageFormatter::formatMessage("en",
        "There {apple, plural,
            =0 {are no apples}
            =1 {is one apple...}
            other {are # apples!}
        }",
    ['apple' => 0]
), "\n";

   
```

The above example will output:

```text


4,560 monkeys on 123 trees make 37.073 monkeys per tree
4.560 Affen auf 123 Bäumen sind 37,073 Affen pro Baum
You finished 3rd!
There are no apples

  
```

**Instructing ICU to format currency with common and with narrow currency symbol**

Requires ICU ≥ 67.

```php


<?php
echo msgfmt_format_message("cs_CZ", "{0, number, :: currency/CAD}", array(123.45));
echo msgfmt_format_message("cs_CZ", "{0, number, :: currency/CAD unit-width-narrow}", array(123.45));

   
```

The above example will output:

```text


123,45 CA$
123,45 $

   
```

## See Also

`msgfmt_create()` `msgfmt_parse()` `msgfmt_get_error_code()` `msgfmt_get_error_message()`
