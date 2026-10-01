---
id: "java-en-function-range-compareboundarypoints"
language: "java"
lang: "en"
category: "function"
name: "Range.compareBoundaryPoints"
signature: "public short compareBoundaryPoints(short how, Range sourceRange) throws DOMException"
title: "Range.compareBoundaryPoints"
directive: "method"
module: "java.xml/org.w3c.dom.ranges"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ranges/Range.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Range.compareBoundaryPoints

```java
public short compareBoundaryPoints(short how, Range sourceRange) throws DOMException
```

Compare the boundary-points of two Ranges in a document.

**参数**

- **how** — A code representing the type of comparison, as defined above.
- **sourceRange** — The Range on which this current Range is compared to.

**返回**

- -1, 0 or 1 depending on whether the corresponding boundary-point of the Range is respectively before, equal to, or after the corresponding boundary-point of sourceRange.

**异常**

- **DOMException** — WRONG_DOCUMENT_ERR: Raised if the two Ranges are not in the same Document or DocumentFragment.  INVALID_STATE_ERR: Raised if detach() has already been invoked on this object.
