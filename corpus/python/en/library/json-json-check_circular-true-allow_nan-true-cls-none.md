---
id: "python-en-function-json-check_circular-true-allow_nan-true-cls-none"
language: "python"
lang: "en"
category: "function"
name: "check_circular=True, allow_nan=True, cls=None, \\"
directive: "function"
module: "json"
source_url: "https://docs.python.org/3/library/json.html#json.check_circular=True, allow_nan=True, cls=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# check_circular=True, allow_nan=True, cls=None, \

Serialize *obj* as a JSON formatted stream to *fp* (a `.write()`-supporting
`file-like object`) using this `Python-to-JSON conversion table`.

> **Note**
>
> Unlike `pickle` and `marshal`, JSON is not a framed protocol,
> so trying to serialize multiple objects with repeated calls to
> `dump` using the same *fp* will result in an invalid JSON file.
>

:param object obj:
   The Python object to be serialized.

:param fp:
   The file-like object *obj* will be serialized to.
   The `json` module always produces `str` objects,
   not `bytes` objects,
   therefore `fp.write()` must support `str` input.
:type fp: `file-like object`

:param bool skipkeys:
   If `True`, keys that are not of a basic type
   (`str`, `int`, `float`, `bool`, `None`)
   will be skipped instead of raising a `TypeError`.
   Default `False`.

:param bool ensure_ascii:
   If `True` (the default), the output is guaranteed to
   have all incoming non-ASCII and non-printable characters escaped.
   If `False`, all characters will be outputted as-is, except for
   the characters that must be escaped: quotation mark, reverse solidus,
   and the control characters U+0000 through U+001F.

:param bool check_circular:
   If `False`, the circular reference check for container types is skipped
   and a circular reference will result in a `RecursionError` (or worse).
   Default `True`.

:param bool allow_nan:
   If `False`, serialization of out-of-range `float` values
   (`nan`, `inf`, `-inf`) will result in a `ValueError`,
   in strict compliance with the JSON specification.
   If `True` (the default), their JavaScript equivalents
   (`NaN`, `Infinity`, `-Infinity`) are used.

:param cls:
   If set, a custom JSON encoder with the
   `~JSONEncoder.default` method overridden,
   for serializing into custom datatypes.
   If `None` (the default), `JSONEncoder` is used.
:type cls: a `JSONEncoder` subclass

:param indent:
   If a positive integer or string, JSON array elements and
   object members will be pretty-printed with that indent level.
   A positive integer indents that many spaces per level;
   a string (such as `"\t"`) is used to indent each level.
   If zero, negative, or `""` (the empty string),
   only newlines are inserted.
   If `None` (the default), no newlines are inserted.
:type indent: int  str  None

:param separators:
   A two-tuple: `(item_separator, key_separator)`.
   If `None` (the default), *separators* defaults to
   `(', ', ': ')` if *indent* is `None`,
   and `(',', ': ')` otherwise.
   For the most compact JSON,
   specify `(',', ':')` to eliminate whitespace.
:type separators: tuple | None

:param default:
   A function that is called for objects that can't otherwise be serialized.
   It should return a JSON encodable version of the object
   or raise a `TypeError`.
   If `None` (the default), `TypeError` is raised.
:type default: `callable` | None

:param bool sort_keys:
   If `True`, dictionaries will be outputted sorted by key.
   Default `False`.

> **Note**
>
> Keys in key/value pairs of JSON are always of the type `str`. When
> a dictionary is converted into JSON, all the keys of the dictionary are
> converted to strings. As a result of this, if a dictionary is converted
> into JSON and then back into a dictionary, the dictionary may not equal
> the original one. That is, `loads(dumps(x)) != x` if x has non-string
> keys. *sort_keys* sorts the keys before they are converted to strings,
> so numeric keys are sorted by value, not by their string representation.
>

> *Changed in 3.2*: Allow strings for *indent* in addition to integers.

> *Changed in 3.4*: Use ``(',', ': ')`` as default if *indent* is not ``None``.

> *Changed in 3.6*: All optional parameters are now :ref:`keyword-only <keyword-only_parameter>`.
