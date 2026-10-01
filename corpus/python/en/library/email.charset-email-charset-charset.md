---
id: "python-en-function-email-charset-charset"
language: "python"
lang: "en"
category: "function"
name: "Charset"
signature: "Charset(input_charset=DEFAULT_CHARSET)"
directive: "class"
module: "email.charset"
source_url: "https://docs.python.org/3/library/email.charset.html#email.charset.Charset"
license: "PSF"
updated: "2026-10-01"
---

# Charset

Map character sets to their email properties.

This class provides information about the requirements imposed on email for a
specific character set.  It also provides convenience routines for converting
between character sets, given the availability of the applicable codecs.  Given
a character set, it will do its best to provide information on how to use that
character set in an email message in an RFC-compliant way.

Certain character sets must be encoded with quoted-printable or base64 when used
in email headers or bodies.  Certain character sets must be converted outright,
and are not allowed in email.

Optional *input_charset* is as described below; it is always coerced to lower
case.  After being alias normalized it is also used as a lookup into the
registry of character sets to find out the header encoding, body encoding, and
output conversion codec to be used for the character set.  For example, if
*input_charset* is `iso-8859-1`, then headers and bodies will be encoded using
quoted-printable and no output conversion codec is necessary.  If
*input_charset* is `euc-jp`, then headers will be encoded with base64, bodies
will not be encoded, but output text will be converted from the `euc-jp`
character set to the `iso-2022-jp` character set.

`Charset` instances have the following data attributes:

attribute:: input_charset

attribute:: header_encoding

attribute:: body_encoding

attribute:: output_charset

attribute:: input_codec

attribute:: output_codec

`Charset` instances also have the following methods:

method:: get_body_encoding()

method:: get_output_charset()

method:: header_encode(string)

method:: header_encode_lines(string, maxlengths)

method:: body_encode(string)

The `Charset` class also provides a number of methods to support
standard operations and built-in functions.

method:: __str__()

method:: __eq__(other)

method:: __ne__(other)
