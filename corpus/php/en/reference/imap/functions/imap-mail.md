---
id: "en-php-function-function-imap-mail"
language: "php"
lang: "en"
category: "function"
name: "imap_mail"
title: "Send an email message"
signature: "bool imap_mail(string $to, string $subject, string $message, string|null $additional_headers = null, string|null $cc = null, string|null $bcc = null, string|null $return_path = null)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-mail.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send an email message

## Description

```php
bool imap_mail(string $to, string $subject, string $message, string|null $additional_headers = null, string|null $cc = null, string|null $bcc = null, string|null $return_path = null)
```

This function allows sending of emails with correct handling of Cc and Bcc receivers.

The parameters `$to`, `$cc` and `$bcc` are all strings and are all parsed as [RFC822](822) address lists.

## Parameters

- **`$to`** — The receiver
- **`$subject`** — The mail subject
- **`$message`** — The mail body, see `imap_mail_compose()`
- **`$additional_headers`** — As string with additional headers to be set on the mail
- **`$cc`**
- **`$bcc`** — The receivers specified in `$bcc` will get the mail, but are excluded from the headers.
- **`$return_path`** — Use this parameter to specify return path upon mail delivery failure. This is useful when using PHP as a mail client for multiple users.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$additional_headers`, `$cc`, `$bcc`, and `$return_path` are now nullable. |

## See Also

`mail()` `imap_mail_compose()`
