---
id: "en-php-function-function-iconv-mime-encode"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sanitizer"}
name: "iconv_mime_encode"
title: "Composes a `MIME` header field"
signature: "string|false iconv_mime_encode(string $field_name, string $field_value, array $options = [])"
module: "iconv"
source_url: "https://www.php.net/manual/en/function.iconv-mime-encode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Composes a `MIME` header field

## Description

```php
string|false iconv_mime_encode(string $field_name, string $field_value, array $options = [])
```

Composes and returns a string that represents a valid `MIME` header field, which looks like the following:

```text


Subject: =?ISO-8859-1?Q?Pr=FCfung_f=FCr?= Entwerfen von einer MIME kopfzeile

   
```

In the above example, "Subject" is the field name and the portion that begins with "=?ISO-8859-1?..." is the field value.

## Parameters

- **`$field_name`** — The field name.
- **`$field_value`** — The field value.
- **`$options`** — You can control the behaviour of `iconv_mime_encode()` by specifying an associative array that contains configuration items to the optional third parameter `$options`. The items supported by `iconv_mime_encode()` are listed below. Note that item names are treated case-sensitive. | Item | Type | Description | Default value | Example | | --- | --- | --- | --- | --- | | scheme | `string` | Specifies the method to encode a field value by. The value of this item may be either "B" or "Q", where "B" stands for `base64` encoding scheme and "Q" stands for `quoted-printable` encoding scheme. | B | B | | input-charset | `string` | Specifies the character set in which the first parameter `$field_name` and the second parameter `$field_value` are presented. If not given, `iconv_mime_encode()` assumes those parameters are presented to it in the iconv.internal_encoding ini setting. | iconv.internal_encoding | ISO-8859-1 | | output-charset | `string` | Specifies the character set to use to compose the `MIME` header. | iconv.internal_encoding | UTF-8 | | line-length | `int` | Specifies the maximum length of the header lines. The resulting header is "folded" to a set of multiple lines in case the resulting header field would be longer than the value of this parameter, according to [RFC2822 - Internet Message Format](2822). If not given, the length will be limited to 76 characters. | 76 | 996 | | line-break-chars | `string` | Specifies the sequence of characters to append to each line as an end-of-line sign when "folding" is performed on a long header field. If not given, this defaults to "\r\n" (`CR` `LF`). Note that this parameter is always treated as an ASCII string regardless of the value of `input-charset`. | \r\n | \n |

## Return Values

Returns an encoded `MIME` field on success, or `false` if an error occurs during the encoding.

## Examples

**`iconv_mime_encode()` example**

```php


<?php
$preferences = array(
    "input-charset" => "ISO-8859-1",
    "output-charset" => "UTF-8",
    "line-length" => 76,
    "line-break-chars" => "\n"
);
$preferences["scheme"] = "Q";
// This yields "Subject: =?UTF-8?Q?Pr=C3=BCfung=20Pr=C3=BCfung?="
echo iconv_mime_encode("Subject", "Prüfung Prüfung", $preferences);

$preferences["scheme"] = "B";
// This yields "Subject: =?UTF-8?B?UHLDvGZ1bmcgUHLDvGZ1bmc=?="
echo iconv_mime_encode("Subject", "Prüfung Prüfung", $preferences);
?>

    
```

## See Also

`imap_binary()` `mb_encode_mimeheader()` `imap_8bit()` `quoted_printable_encode()`
