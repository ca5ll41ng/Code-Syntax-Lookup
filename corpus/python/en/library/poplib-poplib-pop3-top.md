---
id: "python-en-function-poplib-pop3-top"
language: "python"
lang: "en"
category: "function"
name: "POP3.top"
signature: "POP3.top(which, howmuch)"
directive: "method"
module: "poplib"
source_url: "https://docs.python.org/3/library/poplib.html#poplib.POP3.top"
license: "PSF"
updated: "2026-10-01"
---

# POP3.top

Retrieves the message header plus *howmuch* lines of the message after the
header of message number *which*. Result is in form `(response, ['line', ...],
octets)`.

The POP3 TOP command this method uses, unlike the RETR command, doesn't set the
message's seen flag; unfortunately, TOP is poorly specified in the RFCs and is
frequently broken in off-brand servers. Test this method by hand against the
POP3 servers you will use before trusting it.
