---
id: "en-php-guide-imap-constants"
language: "php"
lang: "en"
category: "guide"
name: "imap.constants"
title: "Predefined Constants"
module: "imap"
source_url: "https://www.php.net/manual/en/imap.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`NIL` (`int`)** — Deprecated as of PHP 8.1.0.
- **`OP_DEBUG` (`int`)**
- **`OP_READONLY` (`int`)** — Open mailbox read-only
- **`OP_ANONYMOUS` (`int`)** — Don't use or update a `.newsrc` for news (NNTP only)
- **`OP_SHORTCACHE` (`int`)**
- **`OP_SILENT` (`int`)**
- **`OP_PROTOTYPE` (`int`)**
- **`OP_HALFOPEN` (`int`)** — For IMAP and NNTP names, open a connection but don't open a mailbox.
- **`OP_EXPUNGE` (`int`)**
- **`OP_SECURE` (`int`)**
- **`CL_EXPUNGE` (`int`)** — silently expunge the mailbox before closing when calling `imap_close()`
- **`FT_UID` (`int`)** — The parameter is a UID
- **`FT_PEEK` (`int`)** — Do not set the \Seen flag if not already set
- **`FT_NOT` (`int`)**
- **`FT_INTERNAL` (`int`)** — The return string is in internal format, will not canonicalize to CRLF.
- **`FT_PREFETCHTEXT` (`int`)**
- **`ST_UID` (`int`)** — The sequence argument contains UIDs instead of sequence numbers
- **`ST_SILENT` (`int`)**
- **`ST_SET` (`int`)**
- **`CP_UID` (`int`)** — the sequence numbers contain UIDS
- **`CP_MOVE` (`int`)** — Delete the messages from the current mailbox after copying with `imap_mail_copy()`
- **`SE_UID` (`int`)** — Return UIDs instead of sequence numbers
- **`SE_FREE` (`int`)**
- **`SE_NOPREFETCH` (`int`)** — Don't prefetch searched messages
- **`SO_FREE` (`int`)**
- **`SO_NOSERVER` (`int`)**
- **`SA_MESSAGES` (`int`)**
- **`SA_RECENT` (`int`)**
- **`SA_UNSEEN` (`int`)**
- **`SA_UIDNEXT` (`int`)**
- **`SA_UIDVALIDITY` (`int`)**
- **`SA_ALL` (`int`)**
- **`LATT_NOINFERIORS` (`int`)** — This mailbox has no "children" (there are no mailboxes below this one).
- **`LATT_NOSELECT` (`int`)** — This is only a container, not a mailbox - you cannot open it.
- **`LATT_MARKED` (`int`)** — This mailbox is marked. Only used by UW-IMAPD.
- **`LATT_UNMARKED` (`int`)** — This mailbox is not marked. Only used by UW-IMAPD.
- **`LATT_REFERRAL` (`int`)** — This container has a referral to a remote mailbox.
- **`LATT_HASCHILDREN` (`int`)** — This mailbox has selectable inferiors.
- **`LATT_HASNOCHILDREN` (`int`)** — This mailbox has no selectable inferiors.
- **`SORTDATE` (`int`)** — Sort criteria for `imap_sort()`: message Date
- **`SORTARRIVAL` (`int`)** — Sort criteria for `imap_sort()`: arrival date
- **`SORTFROM` (`int`)** — Sort criteria for `imap_sort()`: mailbox in first From address
- **`SORTSUBJECT` (`int`)** — Sort criteria for `imap_sort()`: message subject
- **`SORTTO` (`int`)** — Sort criteria for `imap_sort()`: mailbox in first To address
- **`SORTCC` (`int`)** — Sort criteria for `imap_sort()`: mailbox in first cc address
- **`SORTSIZE` (`int`)** — Sort criteria for `imap_sort()`: size of message in octets
- **`TYPETEXT` (`int`)** — Primary body type: unformatted text
- **`TYPEMULTIPART` (`int`)** — Primary body type: multiple part
- **`TYPEMESSAGE` (`int`)** — Primary body type: encapsulated message
- **`TYPEAPPLICATION` (`int`)** — Primary body type: application data
- **`TYPEAUDIO` (`int`)** — Primary body type: audio
- **`TYPEIMAGE` (`int`)** — Primary body type: static image
- **`TYPEVIDEO` (`int`)** — Primary body type: video
- **`TYPEMODEL` (`int`)** — Primary body type: model
- **`TYPEOTHER` (`int`)** — Primary body type: unknown
- **`ENC7BIT` (`int`)** — Body encoding: 7 bit SMTP semantic data
- **`ENC8BIT` (`int`)** — Body encoding: 8 bit SMTP semantic data
- **`ENCBINARY` (`int`)** — Body encoding: 8 bit binary data
- **`ENCBASE64` (`int`)** — Body encoding: base-64 encoded data
- **`ENCQUOTEDPRINTABLE` (`int`)** — Body encoding: human-readable 8-as-7 bit data
- **`ENCOTHER` (`int`)** — Body encoding: unknown
- **`IMAP_OPENTIMEOUT` (`int`)**
- **`IMAP_READTIMEOUT` (`int`)**
- **`IMAP_WRITETIMEOUT` (`int`)**
- **`IMAP_CLOSETIMEOUT` (`int`)**
- **`IMAP_GC_ELT` (`int`)** — Garbage collector, clear message cache elements.
- **`IMAP_GC_ENV` (`int`)** — Garbage collector, clear envelopes and bodies.
- **`IMAP_GC_TEXTS` (`int`)** — Garbage collector, clear texts.
