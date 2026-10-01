---
id: "python-en-function-plistlib-dump"
language: "python"
lang: "en"
category: "function"
name: "dump"
signature: "dump(value, fp, *, fmt=FMT_XML, sort_keys=True, skipkeys=False, aware_datetime=False)"
directive: "function"
module: "plistlib"
source_url: "https://docs.python.org/3/library/plistlib.html#plistlib.dump"
license: "PSF"
updated: "2026-10-01"
---

# dump

Write *value* to a plist file. *fp* should be a writable, binary
file object.

The *fmt* argument specifies the format of the plist file and can be
one of the following values:

* `FMT_XML`: XML formatted plist file

* `FMT_BINARY`: Binary formatted plist file

When *sort_keys* is true (the default) the keys for dictionaries will be
written to the plist in sorted order, otherwise they will be written in
the iteration order of the dictionary.

When *skipkeys* is false (the default) the function raises `TypeError`
when a key of a dictionary is not a string, otherwise such keys are skipped.

When *aware_datetime* is true and any field with type `datetime.datetime`
is set as an `aware object`, it will convert to
UTC timezone before writing it.

A `TypeError` will be raised if the object is of an unsupported type or
a container that contains objects of unsupported types.

An `OverflowError` will be raised for integer values that cannot
be represented in (binary) plist files.

> *Added in 3.4*

> *Changed in 3.13*: The keyword-only parameter *aware_datetime* has been added.
