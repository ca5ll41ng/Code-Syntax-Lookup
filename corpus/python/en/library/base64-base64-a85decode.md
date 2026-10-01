---
id: "python-en-function-base64-a85decode"
language: "python"
lang: "en"
category: "function"
name: "a85decode"
signature: "a85decode(b, *, foldspaces=False, adobe=False, ignorechars=b' \\t\\n\\r\\v', canonical=False)"
directive: "function"
module: "base64"
source_url: "https://docs.python.org/3/library/base64.html#base64.a85decode"
license: "PSF"
updated: "2026-10-01"
---

# a85decode

Decode the Ascii85 encoded `bytes-like object` or ASCII string *b* and
return the decoded `bytes`.

*foldspaces* is a flag that specifies whether the 'y' short sequence
should be accepted as shorthand for 4 consecutive spaces (ASCII 0x20).
This feature is not supported by the standard Ascii85 encoding used in
PDF and PostScript.

*adobe* controls whether the `<~` and `~>` markers are
present. While the leading `<~` is not required, the input must
end with `~>`, or a `ValueError` is raised.

*ignorechars* should be a `bytes-like object` containing characters
to ignore from the input.
This should only contain whitespace characters, and by
default contains all whitespace characters in ASCII.

If *canonical* is true, non-canonical encodings are rejected.
See `binascii.a2b_ascii85` for details.

> *Added in 3.4*

> *Changed in 3.15*: Added the *canonical* parameter. Single-character final groups are now always rejected as encoding violations.
