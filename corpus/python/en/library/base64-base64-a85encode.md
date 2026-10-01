---
id: "python-en-function-base64-a85encode"
language: "python"
lang: "en"
category: "function"
name: "a85encode"
signature: "a85encode(b, *, foldspaces=False, wrapcol=0, pad=False, adobe=False)"
directive: "function"
module: "base64"
source_url: "https://docs.python.org/3/library/base64.html#base64.a85encode"
license: "PSF"
updated: "2026-10-01"
---

# a85encode

Encode the `bytes-like object` *b* using Ascii85 and return the
encoded `bytes`.

*foldspaces* is an optional flag that uses the special short sequence 'y'
instead of 4 consecutive spaces (ASCII 0x20) as supported by 'btoa'. This
feature is not supported by the standard encoding used in PDF.

If *wrapcol* is non-zero, insert a newline (`b'\n'`) character
after at most every *wrapcol* characters.
If *wrapcol* is zero (default), do not insert any newlines.

*pad* controls whether zero-padding applied to the end of the input
is fully retained in the output encoding, as done by `btoa`,
producing an exact multiple of 5 bytes of output. This is not part
of the standard encoding used in PDF, as it does not preserve the
length of the data.

*adobe* controls whether the encoded byte sequence is framed with
`<~` and `~>`, as in a PostScript base-85 string literal.  Note
that while ASCII85Decode streams in PDF documents *must* be
terminated with `~>`, they *must not* use a leading `<~`.

> *Added in 3.4*
