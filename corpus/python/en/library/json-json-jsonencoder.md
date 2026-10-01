---
id: "python-en-function-json-jsonencoder"
language: "python"
lang: "en"
category: "function"
name: "JSONEncoder"
signature: "JSONEncoder(*, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, sort_keys=False, indent=None, separators=None, default=None)"
directive: "class"
module: "json"
source_url: "https://docs.python.org/3/library/json.html#json.JSONEncoder"
license: "PSF"
updated: "2026-10-01"
---

# JSONEncoder

Extensible JSON encoder for Python data structures.

Supports the following objects and types by default:

.. _py-to-json-table:

+----------------------------------------+---------------+
 Python                                  JSON          
+========================================+===============+
 dict, frozendict                        object        
+----------------------------------------+---------------+
 list, tuple                             array         
+----------------------------------------+---------------+
 str                                     string        
+----------------------------------------+---------------+
 int, float, int- & float-derived Enums  number        
+----------------------------------------+---------------+
 True                                    true          
+----------------------------------------+---------------+
 False                                   false         
+----------------------------------------+---------------+
 None                                    null          
+----------------------------------------+---------------+

> *Changed in 3.4*: Added support for int- and float-derived Enum classes.

> *Changed in 3.15*: Added support for :class:`frozendict`.

To extend this to recognize other objects, subclass and implement a
`~JSONEncoder.default` method with another method that returns a serializable object
for `o` if possible, otherwise it should call the superclass implementation
(to raise `TypeError`).

If *skipkeys* is false (the default), a `TypeError` will be raised when
trying to encode keys that are not `str`, `int`, `float`,
`bool` or `None`.  If *skipkeys* is true, such items are simply skipped.

If *ensure_ascii* is true (the default), the output is guaranteed to
have all incoming non-ASCII and non-printable characters escaped.
If *ensure_ascii* is false, all characters will be output as-is, except for
the characters that must be escaped: quotation mark, reverse solidus,
and the control characters U+0000 through U+001F.

If *check_circular* is true (the default), then lists, dicts, and custom
encoded objects will be checked for circular references during encoding to
prevent an infinite recursion (which would cause a `RecursionError`).
Otherwise, no such check takes place.

If *allow_nan* is true (the default), then `NaN`, `Infinity`, and
`-Infinity` will be encoded as such.  This behavior is not JSON
specification compliant, but is consistent with most JavaScript based
encoders and decoders.  Otherwise, it will be a `ValueError` to encode
such floats.

If *sort_keys* is true (default: `False`), then the output of dictionaries
will be sorted by key; this is useful for regression tests to ensure that
JSON serializations can be compared on a day-to-day basis.

If *indent* is a non-negative integer or string, then JSON array elements and
object members will be pretty-printed with that indent level.  An indent level
of 0, negative, or `""` will only insert newlines.  `None` (the default)
selects the most compact representation. Using a positive integer indent
indents that many spaces per level.  If *indent* is a string (such as `"\t"`),
that string is used to indent each level.

> *Changed in 3.2*: Allow strings for *indent* in addition to integers.

If specified, *separators* should be an `(item_separator, key_separator)`
tuple.  The default is `(', ', ': ')` if *indent* is `None` and
`(',', ': ')` otherwise.  To get the most compact JSON representation,
you should specify `(',', ':')` to eliminate whitespace.

> *Changed in 3.4*: Use ``(',', ': ')`` as default if *indent* is not ``None``.

If specified, *default* should be a function that gets called for objects that
can't otherwise be serialized.  It should return a JSON encodable version of
the object or raise a `TypeError`.  If not specified, `TypeError`
is raised.

> *Changed in 3.6*: All parameters are now :ref:`keyword-only <keyword-only_parameter>`.

method:: default(o)

method:: encode(o)

method:: iterencode(o)
