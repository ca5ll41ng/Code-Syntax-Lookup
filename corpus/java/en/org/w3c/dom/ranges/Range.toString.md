---
id: "java-en-function-range-tostring"
language: "java"
lang: "en"
category: "function"
name: "Range.toString"
signature: "public String toString() throws DOMException"
title: "Range.toString"
directive: "method"
module: "java.xml/org.w3c.dom.ranges"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ranges/Range.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Range.toString

```java
public String toString() throws DOMException
```

Returns the contents of a Range as a string. This string contains only
 the data characters, not any markup.

**返回**

- The contents of the Range.

**异常**

- **DOMException** — INVALID_STATE_ERR: Raised if detach() has already been invoked on this object.
