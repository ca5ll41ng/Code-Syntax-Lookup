---
id: "java-en-function-range-collapse"
language: "java"
lang: "en"
category: "function"
name: "Range.collapse"
signature: "public void collapse(boolean toStart) throws DOMException"
title: "Range.collapse"
directive: "method"
module: "java.xml/org.w3c.dom.ranges"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ranges/Range.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Range.collapse

```java
public void collapse(boolean toStart) throws DOMException
```

Collapse a Range onto one of its boundary-points

**参数**

- **toStart** — If TRUE, collapses the Range onto its start; if FALSE, collapses it onto its end.

**异常**

- **DOMException** — INVALID_STATE_ERR: Raised if detach() has already been invoked on this object.
