---
id: "java-en-function-element-removeattributenode"
language: "java"
lang: "en"
category: "function"
name: "Element.removeAttributeNode"
signature: "public Attr removeAttributeNode(Attr oldAttr) throws DOMException"
title: "Element.removeAttributeNode"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Element.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Element.removeAttributeNode

```java
public Attr removeAttributeNode(Attr oldAttr) throws DOMException
```

Removes the specified attribute node. If a default value for the
 removed Attr node is defined in the DTD, a new node
 immediately appears with the default value as well as the
 corresponding namespace URI, local name, and prefix when applicable.
 The implementation may handle default values from other schemas
 similarly but applications should use
 Document.normalizeDocument() to guarantee this
 information is up-to-date.

**参数**

- **oldAttr** — The Attr node to remove from the attribute list.

**返回**

- The Attr node that was removed.

**异常**

- **DOMException** — NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly.  NOT_FOUND_ERR: Raised if oldAttr is not an attribute of the element.
