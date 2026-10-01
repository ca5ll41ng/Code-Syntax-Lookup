---
id: "en-php-function-function-imap-mime-header-decode"
language: "php"
lang: "en"
category: "function"
name: "imap_mime_header_decode"
title: "Decode MIME header elements"
signature: "array|false imap_mime_header_decode(string $string)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-mime-header-decode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decode MIME header elements

## Description

```php
array|false imap_mime_header_decode(string $string)
```

Decodes MIME message header extensions that are non ASCII text (see [RFC2047](2047)).

## Parameters

- **`$string`** — The MIME text

## Return Values

The decoded elements are returned in an array of objects, where each object has two properties, `charset` and `text`.

If the element hasn't been encoded, and in other words is in plain US-ASCII, the `charset` property of that element is set to `default`.

The function returns `false` on failure.

## Examples

**`imap_mime_header_decode()` example**

```php


<?php
$text = "=?ISO-8859-1?Q?Keld_J=F8rn_Simonsen?= <keld@example.com>";

$elements = imap_mime_header_decode($text);
for ($i=0; $i<count($elements); $i++) {
    echo "Charset: {$elements[$i]->charset}\n";
    echo "Text: {$elements[$i]->text}\n\n";
}
?>

    
```

The above example will output:

```text


Charset: ISO-8859-1
Text: Keld Jørn Simonsen

Charset: default
Text:  <keld@example.com>

    
```

In the above example we would have two elements, whereas the first element had previously been encoded with ISO-8859-1, and the second element would be plain US-ASCII.

## See Also

`imap_utf8()`
