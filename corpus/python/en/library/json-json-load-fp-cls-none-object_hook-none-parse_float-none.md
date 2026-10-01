---
id: "python-en-function-json-load-fp-cls-none-object_hook-none-parse_float-none"
language: "python"
lang: "en"
category: "function"
name: "load(fp, *, cls=None, object_hook=None, parse_float=None, \\"
directive: "function"
module: "json"
source_url: "https://docs.python.org/3/library/json.html#json.load(fp, *, cls=None, object_hook=None, parse_float=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# load(fp, *, cls=None, object_hook=None, parse_float=None, \

Deserialize *fp* to a Python object
using the `JSON-to-Python conversion table`.

:param fp:
   A `.read()`-supporting `text file` or `binary file`
   containing the JSON document to be deserialized.
:type fp: `file-like object`

:param cls:
   If set, a custom JSON decoder.
   Additional keyword arguments to `load`
   will be passed to the constructor of *cls*.
   If `None` (the default), `JSONDecoder` is used.
:type cls: a `JSONDecoder` subclass

:param object_hook:
   If set, a function that is called with the result of
   any JSON object literal decoded (a `dict`).
   The return value of this function will be used
   instead of the `dict`.
   This feature can be used to implement custom decoders,
   for example [JSON-RPC](https://www.jsonrpc.org) class hinting.
   Default `None`.
:type object_hook: `callable` | None

:param object_pairs_hook:
   If set, a function that is called with the result of
   any JSON object literal decoded with an ordered list of pairs.
   The return value of this function will be used
   instead of the `dict`.
   This feature can be used to implement custom decoders.
   If *object_hook* is also set, *object_pairs_hook* takes priority.
   Default `None`.
:type object_pairs_hook: `callable` | None

:param array_hook:
   If set, a function that is called with the result of
   any JSON array literal decoded with as a Python list.
   The return value of this function will be used
   instead of the `list`.
   This feature can be used to implement custom decoders.
   Default `None`.
:type array_hook: `callable` | None

:param parse_float:
   If set, a function that is called with
   the string of every JSON float to be decoded.
   If `None` (the default), it is equivalent to `float(num_str)`.
   This can be used to parse JSON floats into custom datatypes,
   for example `decimal.Decimal`.
:type parse_float: `callable` | None

:param parse_int:
   If set, a function that is called with
   the string of every JSON int to be decoded.
   If `None` (the default), it is equivalent to `int(num_str)`.
   This can be used to parse JSON integers into custom datatypes,
   for example `float`.
:type parse_int: `callable` | None

:param parse_constant:
   If set, a function that is called with one of the following strings:
   `'-Infinity'`, `'Infinity'`, or `'NaN'`.
   This can be used to raise an exception
   if invalid JSON numbers are encountered.
   Default `None`.
:type parse_constant: `callable` | None

:raises JSONDecodeError:
   When the data being deserialized is not a valid JSON document.

:raises UnicodeDecodeError:
   When the data being deserialized does not contain
   UTF-8, UTF-16 or UTF-32 encoded data.

> *Changed in 3.1*: * Added the optional *object_pairs_hook* parameter. * *parse_constant* doesn't get called on 'null', 'true', 'false' anymore.

> *Changed in 3.6*: * All optional parameters are now :ref:`keyword-only <keyword-only_parameter>`. * *fp* can now be a :term:`binary file`.   The input encoding should be UTF-8, UTF-16 or UTF-32.

> *Changed in 3.11*: The default *parse_int* of :func:`int` now limits the maximum length of the integer string via the interpreter's :ref:`integer string conversion length limitation <int_max_str_digits>` to help avoid denial of service attacks.

> *Changed in 3.15*: Added the optional *array_hook* parameter.
