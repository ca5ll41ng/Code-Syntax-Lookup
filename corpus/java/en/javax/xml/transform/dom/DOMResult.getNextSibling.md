---
id: "java-en-function-domresult-getnextsibling"
language: "java"
lang: "en"
category: "function"
name: "DOMResult.getNextSibling"
signature: "public Node getNextSibling()"
title: "DOMResult.getNextSibling"
directive: "method"
module: "java.xml/javax.xml.transform.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/dom/DOMResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMResult.getNextSibling

```java
public Node getNextSibling()
```

Get the child node before which the result nodes will be inserted.

 

If no node was set via
 `DOMResult`,
 `DOMResult` or
 `setNextSibling`,
 then `null` will be returned.

**返回**

- The child node before which the result nodes will be inserted.

> *Since 1.5*
