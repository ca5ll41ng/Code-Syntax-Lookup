---
id: "java-en-function-element-setattributenode"
language: "java"
lang: "en"
category: "function"
name: "Element.setAttributeNode"
signature: "public Attr setAttributeNode(Attr newAttr) throws DOMException"
title: "Element.setAttributeNode"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Element.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Element.setAttributeNode

```java
public Attr setAttributeNode(Attr newAttr) throws DOMException
```

Adds a new attribute node. If an attribute with that name (
 nodeName) is already present in the element, it is
 replaced by the new one. Replacing an attribute node by itself has no
 effect.
 
To add a new attribute node with a qualified name and namespace
 URI, use the setAttributeNodeNS method.

**参数**

- **newAttr** — The Attr node to add to the attribute list.

**返回**

- If the newAttr attribute replaces an existing attribute, the replaced Attr node is returned, otherwise null is returned.

**异常**

- **DOMException** — WRONG_DOCUMENT_ERR: Raised if newAttr was created from a different document than the one that created the element.  NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly.  INUSE_ATTRIBUTE_ERR: Raised if newAttr is already an attribute of another Element object. The DOM user must explicitly clone Attr nodes to re-use them in other elements.
