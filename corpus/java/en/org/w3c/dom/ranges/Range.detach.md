---
id: "java-en-function-range-detach"
language: "java"
lang: "en"
category: "function"
name: "Range.detach"
signature: "public void detach() throws DOMException"
title: "Range.detach"
directive: "method"
module: "java.xml/org.w3c.dom.ranges"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ranges/Range.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Range.detach

```java
public void detach() throws DOMException
```

Called to indicate that the Range is no longer in use and that the
 implementation may relinquish any resources associated with this
 Range. Subsequent calls to any methods or attribute getters on this
 Range will result in a DOMException being thrown with an
 error code of INVALID_STATE_ERR.

**异常**

- **DOMException** — INVALID_STATE_ERR: Raised if detach() has already been invoked on this object.
