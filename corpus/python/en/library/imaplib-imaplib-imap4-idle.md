---
id: "python-en-function-imaplib-imap4-idle"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.idle"
signature: "IMAP4.idle(duration=None)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.idle"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.idle

Return an `Idler`: an iterable context manager implementing the
IMAP4 `IDLE` command as defined in RFC 2177.

The returned object sends the `IDLE` command when activated by the
`with` statement, produces IMAP untagged responses via the
`iterator` protocol, and sends `DONE` upon context exit.

All untagged responses that arrive after sending the `IDLE` command
(including any that arrive before the server acknowledges the command) will
be available via iteration. Any leftover responses (those not iterated in
the `with` context) can be retrieved in the usual way after
`IDLE` ends, using `IMAP4.response`.

Responses are represented as `(type, [data, ...])` tuples, as described
in `IMAP4 Objects`.

The *duration* argument sets a maximum duration (in seconds) to keep idling,
after which any ongoing iteration will stop. It can be an `int` or
`float`, or `None` for no time limit.
Callers wishing to avoid inactivity timeouts on servers that impose them
should keep this at most 29 minutes (1740 seconds).
Requires a socket connection; *duration* must be `None` on
`IMAP4_stream` connections.

```pycon

>>> with M.idle(duration=29 * 60) as idler:
...     for typ, data in idler:
...         print(typ, data)
...
EXISTS [b'1']
RECENT [b'1']
```

method:: Idler.burst(interval=0.1)

> **Note**
>
> The iterator returned by `IMAP4.idle` is usable only within a
> `with` statement. Before or after that context, unsolicited
> responses are collected internally whenever a command finishes, and can
> be retrieved with `IMAP4.response`.
>

> **Note**
>
> The `Idler` class name and structure are internal interfaces,
> subject to change. Calling code can rely on its context management,
> iteration, and public method to remain stable, but should not subclass,
> instantiate, compare, or otherwise directly reference the class.
>

> *Added in 3.14*
