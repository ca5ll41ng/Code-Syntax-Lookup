---
id: "en-php-function-function-ps-get-parameter"
language: "php"
lang: "en"
category: "function"
name: "ps_get_parameter"
title: "Gets certain parameters"
signature: "string|false ps_get_parameter(resource $psdoc, string $name, [float $modifier = ...])"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-get-parameter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets certain parameters

## Description

```php
string|false ps_get_parameter(resource $psdoc, string $name, [float $modifier = ...])
```

Gets several parameters which were directly set by `ps_set_parameter()` or indirectly by one of the other functions. Parameters are by definition string values. This function cannot be used to retrieve resources which were also set by `ps_set_parameter()`.

The parameter `$name` can have the following values.

- **`fontname`** — The name of the currently active font or the font whose identifier is passed in parameter `$modifier`.
- **`fontencoding`** — The encoding of the currently active font.
- **`dottedversion`** — The version of the underlying pslib library in the format <major>.<minor>.<subminor>
- **`scope`** — The current drawing scope. Can be object, document, null, page, pattern, path, template, prolog, font, glyph.
- **`ligaturedisolvechar`** — The character which dissolves a ligature. If your are using a font which contains the ligature `ff' and `|' is the char to dissolve the ligature, then `f|f' will result in two `f' instead of the ligature `ff'.
- **`imageencoding`** — The encoding used for encoding images. Can be either `hex` or `85`. hex encoding uses two bytes in the postscript file each byte in the image. 85 stand for Ascii85 encoding.
- **`linenumbermode`** — Set to `paragraph` if lines are numbered within a paragraph or `box` if they are numbered within the surrounding box.
- **`linebreak`** — Only used if text is output with `ps_show_boxed()`. If set to `true` a carriage return will add a line break.
- **`parbreak`** — Only used if text is output with `ps_show_boxed()`. If set to `true` a carriage return will start a new paragraph.
- **`hyphenation`** — Only used if text is output with `ps_show_boxed()`. If set to `true` the paragraph will be hyphenated if a hypen dictionary is set and exists.
- **`hyphendict`** — Filename of the dictionary used for hyphenation pattern.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$name`** — Name of the parameter.
- **`$modifier`** — An identifier needed if a parameter of a resource is requested, e.g. the size of an image. In such a case the resource id is passed.

## Return Values

Returns the value of the parameter or `false` on failure.

## See Also

`ps_set_parameter()`
