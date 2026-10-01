---
id: "en-php-function-function-imap-mail-compose"
language: "php"
lang: "en"
category: "function"
name: "imap_mail_compose"
title: "Create a MIME message based on given envelope and body sections"
signature: "string|false imap_mail_compose(array $envelope, array $bodies)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-mail-compose.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a MIME message based on given envelope and body sections

## Description

```php
string|false imap_mail_compose(array $envelope, array $bodies)
```

Create a MIME message based on the given `$envelope` and `$bodies` sections.

## Parameters

- **`$envelope`** — An associative array of header fields. Valid keys are: `"remail"`, `"return_path"`, `"date"`, `"from"`, `"reply_to"`, `"in_reply_to"`, `"subject"`, `"to"`, `"cc"`, `"bcc"` and `"message_id"`, which set the respective message headers to the given `string`. To set additional headers, the key `"custom_headers"` is supported, which expects an array of those headers, e.g. ["User-Agent: My Mail Client"].
- **`$bodies`** — An indexed array of bodies. The first body is the main body of the message; only if it has a type of `TYPEMULTIPART`, further bodies are processed; these bodies constitute the bodies of the parts. — | Key | Type | Description | | --- | --- | --- | | `type` | `int` | The MIME type. One of `TYPETEXT` (default), `TYPEMULTIPART`, `TYPEMESSAGE`, `TYPEAPPLICATION`, `TYPEAUDIO`, `TYPEIMAGE`, `TYPEMODEL` or `TYPEOTHER`. | | `encoding` | `int` | The `Content-Transfer-Encoding`. One of `ENC7BIT` (default), `ENC8BIT`, `ENCBINARY`, `ENCBASE64`, `ENCQUOTEDPRINTABLE` or `ENCOTHER`. | | `charset` | `string` | The charset parameter of the MIME type. | | `type.parameters` | `array` | An associative `array` of `Content-Type` parameter names and their values. | | `subtype` | `string` | The MIME subtype, e.g. `'jpeg'` for `TYPEIMAGE`. | | `id` | `string` | The `Content-ID`. | | `description` | `string` | The `Content-Description`. | | `disposition.type` | `string` | The `Content-Disposition`, e.g. `'attachment'`. | | `disposition` | `array` | An associative `array` of `Content-Disposition` parameter names and values. | | `contents.data` | `string` | The payload. | | `lines` | `int` | The size of the payload in lines. | | `bytes` | `int` | The size of the payload in bytes. | | `md5` | `string` | The MD5 checksum of the payload. |

## Return Values

Returns the MIME message as `string`, or `false` on failure.

## Examples

**`imap_mail_compose()` example**

```php


<?php

$envelope["from"]= "joe@example.com";
$envelope["to"]  = "foo@example.com";
$envelope["cc"]  = "bar@example.com";

$part1["type"] = TYPEMULTIPART;
$part1["subtype"] = "mixed";

$filename = "/tmp/imap.c.gz";
$fp = fopen($filename, "r");
$contents = fread($fp, filesize($filename));
fclose($fp);

$part2["type"] = TYPEAPPLICATION;
$part2["encoding"] = ENCBINARY;
$part2["subtype"] = "octet-stream";
$part2["description"] = basename($filename);
$part2["contents.data"] = $contents;

$part3["type"] = TYPETEXT;
$part3["subtype"] = "plain";
$part3["description"] = "description3";
$part3["contents.data"] = "contents.data3\n\n\n\t";

$body[1] = $part1;
$body[2] = $part2;
$body[3] = $part3;

echo nl2br(imap_mail_compose($envelope, $body));

?>

    
```
