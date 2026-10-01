---
id: "java-en-function-element-setattribute"
language: "java"
lang: "en"
category: "function"
name: "Element.setAttribute"
signature: "public void setAttribute(String name, String value) throws DOMException"
title: "Element.setAttribute"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Element.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Element.setAttribute

```java
public void setAttribute(String name, String value) throws DOMException
```

Adds a new attribute. If an attribute with that name is already present
 in the element, its value is changed to be that of the value
 parameter. This value is a simple string; it is not parsed as it is
 being set. So any markup (such as syntax to be recognized as an
 entity reference) is treated as literal text, and needs to be
 appropriately escaped by the implementation when it is written out.
 In order to assign an attribute value that contains entity
 references, the user must create an Attr node plus any
 Text and EntityReference nodes, build the
 appropriate subtree, and use setAttributeNode to assign
 it as the value of an attribute.
 
To set an attribute with a qualified name and namespace URI, use
 the setAttributeNS method.

**参数**

- **name** — The name of the attribute to create or alter.
- **value** — Value to set in string form.

**异常**

- **DOMException** — INVALID_CHARACTER_ERR: Raised if the specified name is not an XML name according to the XML version in use specified in the Document.xmlVersion attribute.  NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly.
