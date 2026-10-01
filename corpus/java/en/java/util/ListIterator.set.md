---
id: "java-en-function-listiterator-set"
language: "java"
lang: "en"
category: "function"
name: "ListIterator.set"
signature: "void set(E e)"
title: "ListIterator.set"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ListIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ListIterator.set

```java
void set(E e)
```

Replaces the last element returned by `next` or
 `previous` with the specified element (optional operation).
 This call can be made only if neither `remove` nor `add` have been called after the last call to `next` or
 `previous`.

**参数**

- **e** — the element with which to replace the last element returned by `next` or `previous`

**异常**

- **UnsupportedOperationException** — if the `set` operation is not supported by this list iterator
- **ClassCastException** — if the class of the specified element prevents it from being added to this list
- **IllegalArgumentException** — if some aspect of the specified element prevents it from being added to this list
- **IllegalStateException** — if neither `next` nor `previous` have been called, or `remove` or `add` have been called after the last call to `next` or `previous`
