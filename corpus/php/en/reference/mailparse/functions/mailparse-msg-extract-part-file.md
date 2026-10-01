---
id: "en-php-function-function-mailparse-msg-extract-part-file"
language: "php"
lang: "en"
category: "function"
name: "mailparse_msg_extract_part_file"
title: "Extracts/decodes a message section"
signature: "string mailparse_msg_extract_part_file(resource $mimemail, mixed $filename, [callable $callbackfunc = ...])"
module: "mailparse"
source_url: "https://www.php.net/manual/en/function.mailparse-msg-extract-part-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Extracts/decodes a message section

## Description

```php
string mailparse_msg_extract_part_file(resource $mimemail, mixed $filename, [callable $callbackfunc = ...])
```

Extracts/decodes a message section from the supplied filename.

The contents of the section will be decoded according to their transfer encoding - base64, quoted-printable and uuencoded text are supported.

## Parameters

- **`$mimemail`** — A valid `MIME` resource, created with `mailparse_msg_create()`.
- **`$filename`** — Can be a file name or a valid stream resource.
- **`$callbackfunc`** — If set, this must be either a valid callback that will be passed the extracted section, or `null` to make this function return the extracted section. — If not specified, the contents will be sent to "stdout".

## Return Values

If `$callbackfunc` is not `null` returns `true` on success.

If `$callbackfunc` is set to `null`, returns the extracted section as a string.

Returns `false` on error.

## See Also

 `mailparse_msg_extract_part()` `mailparse_msg_extract_whole_part_file()`
