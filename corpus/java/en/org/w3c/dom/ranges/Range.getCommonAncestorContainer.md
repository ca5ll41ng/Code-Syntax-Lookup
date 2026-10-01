---
id: "java-en-function-range-getcommonancestorcontainer"
language: "java"
lang: "en"
category: "function"
name: "Range.getCommonAncestorContainer"
signature: "public Node getCommonAncestorContainer() throws DOMException"
title: "Range.getCommonAncestorContainer"
directive: "method"
module: "java.xml/org.w3c.dom.ranges"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ranges/Range.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Range.getCommonAncestorContainer

```java
public Node getCommonAncestorContainer() throws DOMException
```

The deepest common ancestor container of the Range's two
 boundary-points.

**异常**

- **DOMException** — INVALID_STATE_ERR: Raised if detach() has already been invoked on this object.
