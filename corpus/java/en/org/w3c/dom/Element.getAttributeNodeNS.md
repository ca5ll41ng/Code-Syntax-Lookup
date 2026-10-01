---
id: "java-en-function-element-getattributenodens"
language: "java"
lang: "en"
category: "function"
name: "Element.getAttributeNodeNS"
signature: "public Attr getAttributeNodeNS(String namespaceURI, String localName) throws DOMException"
title: "Element.getAttributeNodeNS"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Element.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Element.getAttributeNodeNS

```java
public Attr getAttributeNodeNS(String namespaceURI, String localName) throws DOMException
```

Retrieves an Attr node by local name and namespace URI.
 
Per [XML Namespaces]
 , applications must use the value null as the
 namespaceURI parameter for methods if they wish to have
 no namespace.

**参数**

- **namespaceURI** — The namespace URI of the attribute to retrieve.
- **localName** — The local name of the attribute to retrieve.

**返回**

- The Attr node with the specified attribute local name and namespace URI or null if there is no such attribute.

**异常**

- **DOMException** — NOT_SUPPORTED_ERR: May be raised if the implementation does not support the feature "XML" and the language exposed through the Document does not support XML Namespaces (such as [HTML 4.01]).

> *Since 1.4, DOM Level 2*
