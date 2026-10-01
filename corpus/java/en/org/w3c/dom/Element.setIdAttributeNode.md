---
id: "java-en-function-element-setidattributenode"
language: "java"
lang: "en"
category: "function"
name: "Element.setIdAttributeNode"
signature: "public void setIdAttributeNode(Attr idAttr, boolean isId) throws DOMException"
title: "Element.setIdAttributeNode"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Element.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Element.setIdAttributeNode

```java
public void setIdAttributeNode(Attr idAttr, boolean isId) throws DOMException
```

If the parameter isId is true, this method
 declares the specified attribute to be a user-determined ID attribute
 . This affects the value of Attr.isId and the behavior
 of Document.getElementById, but does not change any
 schema that may be in use, in particular this does not affect the
 Attr.schemaTypeInfo of the specified Attr
 node. Use the value false for the parameter
 isId to undeclare an attribute for being a
 user-determined ID attribute.

**参数**

- **idAttr** — The attribute node.
- **isId** — Whether the attribute is a of type ID.

**异常**

- **DOMException** — NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly.  NOT_FOUND_ERR: Raised if the specified node is not an attribute of this element.

> *Since 1.5, DOM Level 3*
