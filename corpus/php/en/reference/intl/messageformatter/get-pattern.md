---
id: "en-php-function-messageformatter-getpattern"
language: "php"
lang: "en"
category: "function"
name: "MessageFormatter::getPattern"
aliases: ["msgfmt_get_pattern"]
title: "Get the pattern used by the formatter"
signature: "public string|false MessageFormatter::getPattern()"
module: "intl"
source_url: "https://www.php.net/manual/en/messageformatter.getpattern.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the pattern used by the formatter

## Description

Object-oriented style

```php
public string|false MessageFormatter::getPattern()
```

Procedural style

```php
string|false msgfmt_get_pattern(MessageFormatter $formatter)
```

Get the pattern used by the formatter

## Parameters

- **`$formatter`** — The message formatter

## Return Values

The pattern `string` for this message formatter, or `false` on failure.

## Examples

**`msgfmt_get_pattern()` example**

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

`msgfmt_create()` `msgfmt_set_pattern()`
