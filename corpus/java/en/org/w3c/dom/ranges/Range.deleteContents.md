---
id: "java-en-function-range-deletecontents"
language: "java"
lang: "en"
category: "function"
name: "Range.deleteContents"
signature: "public void deleteContents() throws DOMException"
title: "Range.deleteContents"
directive: "method"
module: "java.xml/org.w3c.dom.ranges"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ranges/Range.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Range.deleteContents

```java
public void deleteContents() throws DOMException
```

Removes the contents of a Range from the containing document or
 document fragment without returning a reference to the removed
 content.

**异常**

- **DOMException** — NO_MODIFICATION_ALLOWED_ERR: Raised if any portion of the content of the Range is read-only or any of the nodes that contain any of the content of the Range are read-only.  INVALID_STATE_ERR: Raised if detach() has already been invoked on this object.
