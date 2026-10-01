---
id: "java-en-function-element-setidattributens"
language: "java"
lang: "en"
category: "function"
name: "Element.setIdAttributeNS"
signature: "public void setIdAttributeNS(String namespaceURI, String localName, boolean isId) throws DOMException"
title: "Element.setIdAttributeNS"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Element.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Element.setIdAttributeNS

```java
public void setIdAttributeNS(String namespaceURI, String localName, boolean isId) throws DOMException
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

- **namespaceURI** — The namespace URI of the attribute.
- **localName** — The local name of the attribute.
- **isId** — Whether the attribute is a of type ID.

**异常**

- **DOMException** — NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly.  NOT_FOUND_ERR: Raised if the specified node is not an attribute of this element.

> *Since 1.5, DOM Level 3*
