---
id: "python-zh-function-json-jsondecoder"
language: "python"
lang: "zh"
category: "function"
name: "JSONDecoder"
signature: "JSONDecoder(*, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, strict=True, object_pairs_hook=None, array_hook=None)"
directive: "class"
module: "json"
source_url: "https://docs.python.org/zh-cn/3/library/json.html#json.JSONDecoder"
license: "PSF"
updated: "2026-10-01"
---

# JSONDecoder

简单的JSON解码器。

默认情况下，解码执行以下转换:

.. _json-to-py-table:

+---------------+-------------------+
 JSON           Python            
+===============+===================+
 object         dict              
+---------------+-------------------+
 array          list              
+---------------+-------------------+
 string         str               
+---------------+-------------------+
 number (int)   int               
+---------------+-------------------+
 number (real)  float             
+---------------+-------------------+
 true           True              
+---------------+-------------------+
 false          False             
+---------------+-------------------+
 null           None              |
+---------------+-------------------+

It also understands `NaN`, `Infinity`, and `-Infinity` as their
corresponding `float` values, which is outside the JSON spec.

*object_hook* is an optional function that will be called with the result of
every JSON object decoded and its return value will be used in place of the
given `dict`.  This can be used to provide custom deserializations
(e.g. to support [JSON-RPC](https://www.jsonrpc.org) class hinting).

*object_pairs_hook* is an optional function that will be called with the
result of every JSON object decoded with an ordered list of pairs.  The
return value of *object_pairs_hook* will be used instead of the
`dict`.  This feature can be used to implement custom decoders.  If
*object_hook* is also defined, the *object_pairs_hook* takes priority.

> *Changed in 3.1*: Added support for *object_pairs_hook*.

*array_hook* is an optional function that will be called with the
result of every JSON array decoded as a list. The return value of
*array_hook* will be used instead of the `list`. This feature can be
used to implement custom decoders.

> *Changed in 3.15*: Added support for *array_hook*.

*parse_float* is an optional function that will be called with the string of
every JSON float to be decoded.  By default, this is equivalent to
`float(num_str)`.  This can be used to use another datatype or parser for
JSON floats (e.g. `decimal.Decimal`).

*parse_int* is an optional function that will be called with the string of
every JSON int to be decoded.  By default, this is equivalent to
`int(num_str)`.  This can be used to use another datatype or parser for
JSON integers (e.g. `float`).

*parse_constant* is an optional function that will be called with one of the
following strings: `'-Infinity'`, `'Infinity'`, `'NaN'`.  This can be
used to raise an exception if invalid JSON numbers are encountered.

If *strict* is false (`True` is the default), then control characters
will be allowed inside strings.  Control characters in this context are
those with character codes in the 0--31 range, including `'\t'` (tab),
`'\n'`, `'\r'` and `'\0'`.

If the data being deserialized is not a valid JSON document, a
`JSONDecodeError` will be raised.

> *Changed in 3.6*: All parameters are now :ref:`keyword-only <keyword-only_parameter>`.

method:: decode(s)

method:: raw_decode(s)
