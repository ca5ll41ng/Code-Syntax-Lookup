---
id: "python-en-function-annotationlib-annotations_to_string"
language: "python"
lang: "en"
category: "function"
name: "annotations_to_string"
signature: "annotations_to_string(annotations)"
directive: "function"
module: "annotationlib"
source_url: "https://docs.python.org/3/library/annotationlib.html#annotationlib.annotations_to_string"
license: "PSF"
updated: "2026-10-01"
---

# annotations_to_string

Convert an annotations dict containing runtime values to a
dict containing only strings. If the values are not already strings,
they are converted using `type_repr`.
This is meant as a helper for user-provided
annotate functions that support the `~Format.STRING` format but
do not have access to the code creating the annotations.

For example, this is used to implement the `~Format.STRING` format
for `typing.TypedDict` classes created through the functional syntax:

```python

>>> from typing import TypedDict
>>> Movie = TypedDict("movie", {"name": str, "year": int})
>>> get_annotations(Movie, format=Format.STRING)
{'name': 'str', 'year': 'int'}
```

> *Added in 3.14*
