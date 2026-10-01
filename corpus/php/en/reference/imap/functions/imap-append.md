---
id: "en-php-function-function-imap-append"
language: "php"
lang: "en"
category: "function"
name: "imap_append"
title: "Append a string message to a specified mailbox"
signature: "bool imap_append(IMAP\\Connection $imap, string $folder, string $message, string|null $options = null, string|null $internal_date = null)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-append.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Append a string message to a specified mailbox

## Description

```php
bool imap_append(IMAP\Connection $imap, string $folder, string $message, string|null $options = null, string|null $internal_date = null)
```

Appends a string `$message` to the specified `$folder`.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$folder`** — The mailbox name, see `imap_open()` for more information
  > Passing untrusted data to this parameter is *insecure*, unless imap.enable_insecure_rsh is disabled.


- **`$message`** — The message to be append, as a string — When talking to the Cyrus IMAP server, you must use "\r\n" as your end-of-line terminator instead of "\n" or the operation will fail
- **`$options`** — If provided, the `$options` will also be written to the `$folder`
- **`$internal_date`** — If this parameter is set, it will set the INTERNALDATE on the appended message. The parameter should be a date string that conforms to the rfc2060 specifications for a date_time value.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |
| 8.0.0 | `$options` and `$internal_date` are now nullable. |

## Examples

**`imap_append()` example**

```php


<?php
$imap = imap_open("{imap.example.org}INBOX.Drafts", "username", "password");

$check = imap_check($imap);
echo "Msg Count before append: ". $check->Nmsgs . "\n";

imap_append($imap, "{imap.example.org}INBOX.Drafts"
                   , "From: me@example.com\r\n"
                   . "To: you@example.com\r\n"
                   . "Subject: test\r\n"
                   . "\r\n"
                   . "this is a test message, please ignore\r\n"
                   );

$check = imap_check($imap);
echo "Msg Count after append : ". $check->Nmsgs . "\n";

imap_close($imap);
?>

    
```
