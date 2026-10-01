---
id: "java-en-function-domresult-setnextsibling"
language: "java"
lang: "en"
category: "function"
name: "DOMResult.setNextSibling"
signature: "public void setNextSibling(Node nextSibling)"
title: "DOMResult.setNextSibling"
directive: "method"
module: "java.xml/javax.xml.transform.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/dom/DOMResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMResult.setNextSibling

```java
public void setNextSibling(Node nextSibling)
```

Set the child node before which the result nodes will be inserted.

 

Use `nextSibling` to specify the child node
 before which the result nodes should be inserted.
 If `nextSibling` is not a descendant of `node`,
 then an `IllegalArgumentException` is thrown.
 If `node` is `null` and `nextSibling` is not `null`,
 then an `IllegalStateException` is thrown.
 If `nextSibling` is `null`,
 then the behavior is the same as calling `DOMResult`,
 i.e. append the result nodes as the last child of the specified `node`.

**参数**

- **nextSibling** — The child node before which the result nodes will be inserted.

**异常**

- **IllegalArgumentException** — If `nextSibling` is not a descendant of `node`.
- **IllegalStateException** — If `node` is `null` and `nextSibling` is not `null`.

> *Since 1.5*
