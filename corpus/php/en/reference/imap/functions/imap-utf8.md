---
id: "en-php-function-function-imap-utf8"
language: "php"
lang: "en"
category: "function"
name: "imap_utf8"
title: "Converts MIME-encoded text to UTF-8"
signature: "string imap_utf8(string $mime_encoded_text)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-utf8.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts MIME-encoded text to UTF-8

## Description

```php
string imap_utf8(string $mime_encoded_text)
```

Converts the given `$mime_encoded_text` to UTF-8, if the declared charset is known to libc-client. Otherwise the given text is decoded, but not converted to UTF-8.

## Parameters

- **`$mime_encoded_text`** — A MIME encoded string. MIME encoding method and the UTF-8 specification are described in [RFC2047](2047) and [RFC2044](2044) respectively.

## Return Values

Returns the decoded string, if possible converted to UTF-8.

## Examples

**Basic `imap_utf8()` Usage**

```php


<?php
echo imap_utf8("Johannes =?ISO-8859-1?Q?Schl=FCter?=");
?>

   
```

The above example will output something similar to:

```text


Johannes Schlüter

   
```

## See Also

`imap_mime_header_decode()`
