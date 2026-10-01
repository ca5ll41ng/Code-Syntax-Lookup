---
id: "en-php-function-function-html-entity-decode"
language: "php"
lang: "en"
category: "function"
name: "html_entity_decode"
title: "Convert HTML entities to their corresponding characters"
signature: "string html_entity_decode(string $string, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401, string|null $encoding = null)"
module: "strings"
source_url: "https://www.php.net/manual/en/function.html-entity-decode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convert HTML entities to their corresponding characters

## Description

```php
string html_entity_decode(string $string, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401, string|null $encoding = null)
```

`html_entity_decode()` is the opposite of `htmlentities()` in that it converts HTML entities in the `$string` to their corresponding characters.

More precisely, this function decodes all the entities (including all numeric entities) that a) are necessarily valid for the chosen document type — i.e., for XML, this function does not decode named entities that might be defined in some DTD — and b) whose character or characters are in the coded character set associated with the chosen encoding and are permitted in the chosen document type. All other entities are left as is.

## Parameters

- **`$string`** — The input string.
- **`$flags`** — A bitmask of one or more of the following flags, which specify how to handle quotes and which document type to use. The default is `ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401`. | Constant Name | Description | | --- | --- | | `ENT_COMPAT` | Will convert double-quotes and leave single-quotes alone. | | `ENT_QUOTES` | Will convert both double and single quotes. | | `ENT_NOQUOTES` | Will leave both double and single quotes unconverted. | | `ENT_SUBSTITUTE` | Replace invalid code unit sequences with a Unicode Replacement Character U+FFFD (UTF-8) or &#xFFFD; (otherwise) instead of returning an empty string. | | `ENT_HTML401` | Handle code as HTML 4.01. | | `ENT_XML1` | Handle code as XML 1. | | `ENT_XHTML` | Handle code as XHTML. | | `ENT_HTML5` | Handle code as HTML 5. |
- **`$encoding`** — An optional argument defining the encoding used when converting characters. — If omitted, `$encoding` defaults to the value of the default_charset configuration option. — Although this argument is technically optional, you are highly encouraged to specify the correct value for your code if the default_charset configuration option may be set incorrectly for the given input.

## Return Values

Returns the decoded string.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | `$flags` changed from `ENT_COMPAT` to `ENT_QUOTES` \| `ENT_SUBSTITUTE` \| `ENT_HTML401`. |
| 8.0.0 | `$encoding` is nullable now. |

## Examples

**Decoding HTML entities**

```php


<?php
$orig = "I'll \"walk\" the <b>dog</b> now";

$a = htmlentities($orig);

$b = html_entity_decode($a);

echo $a, PHP_EOL; // I'll walk the bdog/b now

echo $b, PHP_EOL; // I'll "walk" the <b>dog</b> now
?>

    
```

## Notes

> You might wonder why trim(html_entity_decode('')); doesn't reduce the string to an empty string, that's because the '' entity is not ASCII code 32 (which is stripped by `trim()`) but ASCII code 160 (0xa0) in the default ISO 8859-1 encoding.

## See Also

`htmlentities()` `htmlspecialchars()` `get_html_translation_table()` `urldecode()`
