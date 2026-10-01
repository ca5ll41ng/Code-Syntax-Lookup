---
id: "en-php-function-function-imap-fetch-overview"
language: "php"
lang: "en"
category: "function"
name: "imap_fetch_overview"
title: "Read an overview of the information in the headers of the given message"
signature: "array|false imap_fetch_overview(IMAP\\Connection $imap, string $sequence, int $flags = 0)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-fetch-overview.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read an overview of the information in the headers of the given message

## Description

```php
array|false imap_fetch_overview(IMAP\Connection $imap, string $sequence, int $flags = 0)
```

This function fetches mail headers for the given `$sequence` and returns an overview of their contents.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$sequence`** — A message sequence description. You can enumerate desired messages with the `X,Y` syntax, or retrieve all messages within an interval with the `X:Y` syntax
- **`$flags`** — `$sequence` will contain a sequence of message indices or UIDs, if this parameter is set to `FT_UID`.

## Return Values

Returns an array of objects describing one message header each. The object will only define a property if it exists. The possible properties are:

- `subject` - the messages subject
- `from` - who sent it
- `to` - recipient
- `date` - when was it sent
- `message_id` - Message-ID
- `references` - is a reference to this message id
- `in_reply_to` - is a reply to this message id
- `size` - size in bytes
- `uid` - UID the message has in the mailbox
- `msgno` - message sequence number in the mailbox
- `recent` - this message is flagged as recent
- `flagged` - this message is flagged
- `answered` - this message is flagged as answered
- `deleted` - this message is flagged for deletion
- `seen` - this message is flagged as already read
- `draft` - this message is flagged as being a draft
- `udate` - the UNIX timestamp of the arrival date

The function returns `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## Examples

**`imap_fetch_overview()` example**

```php


<?php
$mbox = imap_open("{imap.example.org:143}INBOX", "username", "password")
     or die("can't connect: " . imap_last_error());

$MC = imap_check($mbox);

// Fetch an overview for all messages in INBOX
$result = imap_fetch_overview($mbox,"1:{$MC->Nmsgs}",0);
foreach ($result as $overview) {
    echo "#{$overview->msgno} ({$overview->date}) - From: {$overview->from}
    {$overview->subject}\n";
}
imap_close($mbox);
?>

    
```

## See Also

`imap_fetchheader()`
