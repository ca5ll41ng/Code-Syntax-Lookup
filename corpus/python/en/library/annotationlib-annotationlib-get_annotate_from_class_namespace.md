---
id: "python-en-function-annotationlib-get_annotate_from_class_namespace"
language: "python"
lang: "en"
category: "function"
name: "get_annotate_from_class_namespace"
signature: "get_annotate_from_class_namespace(namespace)"
directive: "function"
module: "annotationlib"
source_url: "https://docs.python.org/3/library/annotationlib.html#annotationlib.get_annotate_from_class_namespace"
license: "PSF"
updated: "2026-10-01"
---

# get_annotate_from_class_namespace

Retrieve the `annotate function` from a class namespace dictionary *namespace*.
Return `None` if the namespace does not contain an annotate function.
This is primarily useful before the class has been fully created (e.g., in a metaclass);
after the class exists, the annotate function can be retrieved with `cls.__annotate__`.
See `below` for an example using this function in a metaclass.

> *Added in 3.14*
