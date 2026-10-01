---
id: "java-en-function-element-setidattribute"
language: "java"
lang: "en"
category: "function"
name: "Element.setIdAttribute"
signature: "public void setIdAttribute(String name, boolean isId) throws DOMException"
title: "Element.setIdAttribute"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Element.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Element.setIdAttribute

```java
public void setIdAttribute(String name, boolean isId) throws DOMException
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
 
 To specify an attribute by local name and namespace URI, use the
 setIdAttributeNS method.

**参数**

- **name** — The name of the attribute.
- **isId** — Whether the attribute is a of type ID.

**异常**

- **DOMException** — NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly.  NOT_FOUND_ERR: Raised if the specified node is not an attribute of this element.

> *Since 1.5, DOM Level 3*
