---
id: "en-php-function-messageformatter-setpattern"
language: "php"
lang: "en"
category: "function"
name: "MessageFormatter::setPattern"
aliases: ["msgfmt_set_pattern"]
title: "Set the pattern used by the formatter"
signature: "public bool MessageFormatter::setPattern(string $pattern)"
module: "intl"
source_url: "https://www.php.net/manual/en/messageformatter.setpattern.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the pattern used by the formatter

## Description

Object-oriented style

```php
public bool MessageFormatter::setPattern(string $pattern)
```

Procedural style

```php
bool msgfmt_set_pattern(MessageFormatter $formatter, string $pattern)
```

Set the pattern used by the formatter

## Parameters

- **`$formatter`** — The message formatter
- **`$pattern`** — The pattern `string` to use in this message formatter. The pattern uses an 'apostrophe-friendly' syntax; see [Quoting/Escaping]() for details.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`msgfmt_set_pattern()` example**

```php


<?php
$fmt = msgfmt_create( "en_US", "{0, number} monkeys on {1, number} trees" );
echo "Default pattern: '" . msgfmt_get_pattern( $fmt ) . "'\n";
echo "Formatting result: " . msgfmt_format( $fmt, array(123, 456) ) . "\n";

msgfmt_set_pattern( $fmt, "{0, number} trees hosting {1, number} monkeys" );
echo "New pattern: '" . msgfmt_get_pattern( $fmt ) . "'\n";
echo "Formatted number: " . msgfmt_format( $fmt, array(123, 456) ) . "\n";
?>

   
```

**OO example**

```php


<?php
$fmt = new MessageFormatter( "en_US", "{0, number} monkeys on {1, number} trees" );
echo "Default pattern: '" . $fmt->getPattern() . "'\n";
echo "Formatting result: " . $fmt->format(array(123, 456)) . "\n";

$fmt->setPattern("{0, number} trees hosting {1, number} monkeys" );
echo "New pattern: '" . $fmt->getPattern() . "'\n";
echo "Formatted number: " . $fmt->format(array(123, 456)) . "\n";
?>

   
```

The above example will output:

```text


Default pattern: '{0,number} monkeys on {1,number} trees'
Formatting result: 123 monkeys on 456 trees
New pattern: '{0,number} trees hosting {1,number} monkeys'
Formatted number: 123 trees hosting 456 monkeys

  
```

## See Also

`msgfmt_create()` `msgfmt_get_pattern()`
