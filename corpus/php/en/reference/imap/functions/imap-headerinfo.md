---
id: "en-php-function-function-imap-headerinfo"
language: "php"
lang: "en"
category: "function"
name: "imap_headerinfo"
title: "Read the header of the message"
signature: "stdClass|false imap_headerinfo(IMAP\\Connection $imap, int $message_num, int $from_length = 0, int $subject_length = 0)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-headerinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read the header of the message

## Description

```php
stdClass|false imap_headerinfo(IMAP\Connection $imap, int $message_num, int $from_length = 0, int $subject_length = 0)
```

Gets information about the given message number by reading its headers.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$message_num`** — The message number
- **`$from_length`** — Number of characters for the `fetchfrom` property. Must be greater than or equal to zero.
- **`$subject_length`** — Number of characters for the `fetchsubject` property Must be greater than or equal to zero.

## Return Values

Returns `false` on error or, if successful, the information in an object with following properties:

- toaddress - full to: line, up to 1024 characters
- to - an array of objects from the To: line, with the following properties: `personal`, `adl`, `mailbox`, and `host`
- fromaddress - full from: line, up to 1024 characters
- from - an array of objects from the From: line, with the following properties: `personal`, `adl`, `mailbox`, and `host`
- ccaddress - full cc: line, up to 1024 characters
- cc - an array of objects from the Cc: line, with the following properties: `personal`, `adl`, `mailbox`, and `host`
- bccaddress - full bcc: line, up to 1024 characters
- bcc - an array of objects from the Bcc: line, with the following properties: `personal`, `adl`, `mailbox`, and `host`
- reply_toaddress - full Reply-To: line, up to 1024 characters
- reply_to - an array of objects from the Reply-To: line, with the following properties: `personal`, `adl`, `mailbox`, and `host`
- senderaddress - full sender: line, up to 1024 characters
- sender - an array of objects from the Sender: line, with the following properties: `personal`, `adl`, `mailbox`, and `host`
- return_pathaddress - full Return-Path: line, up to 1024 characters
- return_path - an array of objects from the Return-Path: line, with the following properties: `personal`, `adl`, `mailbox`, and `host`
- remail -
- date - The message date as found in its headers
- Date - Same as date
- subject - The message subject
- Subject - Same as subject
- in_reply_to -
- message_id -
- newsgroups -
- followup_to -
- references -
- Recent - `R` if recent and seen, `N` if recent and not seen, ' ' if not recent.
- Unseen - `U` if not seen AND not recent, ' ' if seen OR not seen and recent
- Flagged - `F` if flagged, ' ' if not flagged
- Answered - `A` if answered, ' ' if unanswered
- Deleted - `D` if deleted, ' ' if not deleted
- Draft - `X` if draft, ' ' if not draft
- Msgno - The message number
- MailDate -
- Size - The message size
- udate - mail message date in Unix time
- fetchfrom - from line formatted to fit `$from_length` characters
- fetchsubject - subject line formatted to fit `$subject_length` characters

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |
| 8.0.0 | The unused `$defaulthost` parameter has been removed. |

## See Also

`imap_fetch_overview()`
