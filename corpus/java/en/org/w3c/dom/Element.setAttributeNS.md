---
id: "java-en-function-element-setattributens"
language: "java"
lang: "en"
category: "function"
name: "Element.setAttributeNS"
signature: "public void setAttributeNS(String namespaceURI, String qualifiedName, String value) throws DOMException"
title: "Element.setAttributeNS"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Element.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Element.setAttributeNS

```java
public void setAttributeNS(String namespaceURI, String qualifiedName, String value) throws DOMException
```

Adds a new attribute. If an attribute with the same local name and
 namespace URI is already present on the element, its prefix is
 changed to be the prefix part of the qualifiedName, and
 its value is changed to be the value parameter. This
 value is a simple string; it is not parsed as it is being set. So any
 markup (such as syntax to be recognized as an entity reference) is
 treated as literal text, and needs to be appropriately escaped by the
 implementation when it is written out. In order to assign an
 attribute value that contains entity references, the user must create
 an Attr node plus any Text and
 EntityReference nodes, build the appropriate subtree,
 and use setAttributeNodeNS or
 setAttributeNode to assign it as the value of an
 attribute.
 
Per [XML Namespaces]
 , applications must use the value null as the
 namespaceURI parameter for methods if they wish to have
 no namespace.

**参数**

- **namespaceURI** — The namespace URI of the attribute to create or alter.
- **qualifiedName** — The qualified name of the attribute to create or alter.
- **value** — The value to set in string form.

**异常**

- **DOMException** — INVALID_CHARACTER_ERR: Raised if the specified qualified name is not an XML name according to the XML version in use specified in the Document.xmlVersion attribute.  NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly.  NAMESPACE_ERR: Raised if the qualifiedName is malformed per the Namespaces in XML specification, if the qualifiedName has a prefix and the namespaceURI is null, if the qualifiedName has a prefix that is "xml" and the namespaceURI is different from " http://www.w3.org/XML/1998/namespace", if the qualifiedName or its prefix is "xmlns" and the namespaceURI is different from "http://www.w3.org/2000/xmlns/", or if the namespaceURI is "http://www.w3.org/2000/xmlns/" and neither the qualifiedName nor its prefix is "xmlns".  NOT_SUPPORTED_ERR: May be raised if the implementation does not support the feature "XML" and the language exposed through the Document does not support XML Namespaces (such as [HTML 4.01]).

> *Since 1.4, DOM Level 2*
