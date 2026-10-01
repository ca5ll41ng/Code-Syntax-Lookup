---
id: "java-en-function-range-clonerange"
language: "java"
lang: "en"
category: "function"
name: "Range.cloneRange"
signature: "public Range cloneRange() throws DOMException"
title: "Range.cloneRange"
directive: "method"
module: "java.xml/org.w3c.dom.ranges"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ranges/Range.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Range.cloneRange

```java
public Range cloneRange() throws DOMException
```

Produces a new Range whose boundary-points are equal to the
 boundary-points of the Range.

**返回**

- The duplicated Range.

**异常**

- **DOMException** — INVALID_STATE_ERR: Raised if detach() has already been invoked on this object.
