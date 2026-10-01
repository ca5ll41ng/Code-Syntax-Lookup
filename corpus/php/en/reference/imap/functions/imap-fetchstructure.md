---
id: "en-php-function-function-imap-fetchstructure"
language: "php"
lang: "en"
category: "function"
name: "imap_fetchstructure"
title: "Read the structure of a particular message"
signature: "stdClass|false imap_fetchstructure(IMAP\\Connection $imap, int $message_num, int $flags = 0)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-fetchstructure.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read the structure of a particular message

## Description

```php
stdClass|false imap_fetchstructure(IMAP\Connection $imap, int $message_num, int $flags = 0)
```

Fetches all the structured information for a given message.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$message_num`** — The message number
- **`$flags`** — This optional parameter only has a single option, `FT_UID`, which tells the function to treat the `$message_num` argument as a `UID`.

## Return Values

Returns an object with properties listed in the table below, or `false` on failure.

| type | Primary body type |
| --- | --- |
| encoding | Body transfer encoding |
| ifsubtype | `true` if there is a subtype string |
| subtype | MIME subtype |
| ifdescription | `true` if there is a description string |
| description | Content description string |
| ifid | `true` if there is an identification string |
| id | Identification string |
| lines | Number of lines |
| bytes | Number of bytes |
| ifdisposition | `true` if there is a disposition string |
| disposition | Disposition string |
| ifdparameters | `true` if the `dparameters` array exists |
| dparameters | An array of objects where each object has an `"attribute"` and a `"value"` property corresponding to the parameters on the `Content-disposition` MIME header. |
| ifparameters | `true` if the parameters array exists |
| parameters | An array of objects where each object has an `"attribute"` and a `"value"` property. |
| parts | An array of objects identical in structure to the top-level object, each of which corresponds to a MIME body part. |

| Value | Type | Constant |
| --- | --- | --- |
| 0 | text | TYPETEXT |
| 1 | multipart | TYPEMULTIPART |
| 2 | message | TYPEMESSAGE |
| 3 | application | TYPEAPPLICATION |
| 4 | audio | TYPEAUDIO |
| 5 | image | TYPEIMAGE |
| 6 | video | TYPEVIDEO |
| 7 | model | TYPEMODEL |
| 8 | other | TYPEOTHER |

| Value | Type | Constant |
| --- | --- | --- |
| 0 | 7bit | ENC7BIT |
| 1 | 8bit | ENC8BIT |
| 2 | Binary | ENCBINARY |
| 3 | Base64 | ENCBASE64 |
| 4 | Quoted-Printable | ENCQUOTEDPRINTABLE |
| 5 | other | ENCOTHER |

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## See Also

`imap_fetchbody()` `imap_bodystruct()`
