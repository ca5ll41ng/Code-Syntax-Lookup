---
id: "java-en-function-range-clonecontents"
language: "java"
lang: "en"
category: "function"
name: "Range.cloneContents"
signature: "public DocumentFragment cloneContents() throws DOMException"
title: "Range.cloneContents"
directive: "method"
module: "java.xml/org.w3c.dom.ranges"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ranges/Range.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Range.cloneContents

```java
public DocumentFragment cloneContents() throws DOMException
```

Duplicates the contents of a Range

**返回**

- A DocumentFragment that contains content equivalent to this Range.

**异常**

- **DOMException** — HIERARCHY_REQUEST_ERR: Raised if a DocumentType node would be extracted into the new DocumentFragment.  INVALID_STATE_ERR: Raised if detach() has already been invoked on this object.
