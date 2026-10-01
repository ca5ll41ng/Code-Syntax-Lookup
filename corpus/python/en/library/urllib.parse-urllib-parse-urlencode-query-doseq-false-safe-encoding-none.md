---
id: "python-en-function-urllib-parse-urlencode-query-doseq-false-safe-encoding-none"
language: "python"
lang: "en"
category: "function"
name: "urlencode(query, doseq=False, safe='', encoding=None, \\"
directive: "function"
module: "urllib.parse"
source_url: "https://docs.python.org/3/library/urllib.parse.html#urllib.parse.urlencode(query, doseq=False, safe='', encoding=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# urlencode(query, doseq=False, safe='', encoding=None, \

Convert a mapping object or a sequence of two-element tuples, which may
contain `str` or `bytes` objects, to a percent-encoded ASCII
text string.  If the resultant string is to be used as a *data* for POST
operation with the `~urllib.request.urlopen` function, then
it should be encoded to bytes, otherwise it would result in a
`TypeError`.

The resulting string is a series of `key=value` pairs separated by `'&'`
characters, where both *key* and *value* are quoted using the *quote_via*
function.  By default, `quote_plus` is used to quote the values, which
means spaces are quoted as a `'+'` character and '/' characters are
encoded as `%2F`, which follows the standard for GET requests
(`application/x-www-form-urlencoded`).  An alternate function that can be
passed as *quote_via* is `quote`, which will encode spaces as `%20`
and not encode '/' characters.  For maximum control of what is quoted, use
`quote` and specify a value for *safe*.

When a sequence of two-element tuples is used as the *query*
argument, the first element of each tuple is a key and the second is a
value. The value element in itself can be a sequence and in that case, if
the optional parameter *doseq* evaluates to `True`, individual
`key=value` pairs separated by `'&'` are generated for each element of
the value sequence for the key.  The order of parameters in the encoded
string will match the order of parameter tuples in the sequence.

The *safe*, *encoding*, and *errors* parameters are passed down to
*quote_via* (the *encoding* and *errors* parameters are only passed
when a query element is a `str`).

To reverse this encoding process, `parse_qs` and `parse_qsl` are
provided in this module to parse query strings into Python data structures.

Refer to `urllib examples` to find out how the
`urllib.parse.urlencode` method can be used for generating the query
string of a URL or data for a POST request.

> *Changed in 3.2*: *query* supports bytes and string objects.

> *Changed in 3.5*: Added the *quote_via* parameter.

> *Deprecated since 3.14*: Accepting objects with false values (like ``0`` and ``[]``) except empty strings and byte-like objects and ``None`` is now deprecated.
