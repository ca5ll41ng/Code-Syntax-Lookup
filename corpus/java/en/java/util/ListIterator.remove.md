---
id: "java-en-function-listiterator-remove"
language: "java"
lang: "en"
category: "function"
name: "ListIterator.remove"
signature: "void remove()"
title: "ListIterator.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ListIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ListIterator.remove

```java
void remove()
```

Removes from the list the last element that was returned by `next` or `previous` (optional operation).  This call can
 only be made once per call to `next` or `previous`.
 It can be made only if `add` has not been
 called after the last call to `next` or `previous`.

**异常**

- **UnsupportedOperationException** — if the `remove` operation is not supported by this list iterator
- **IllegalStateException** — if neither `next` nor `previous` have been called, or `remove` or `add` have been called after the last call to `next` or `previous`
