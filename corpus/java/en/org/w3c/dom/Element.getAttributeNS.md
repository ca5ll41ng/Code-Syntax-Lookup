---
id: "java-en-function-element-getattributens"
language: "java"
lang: "en"
category: "function"
name: "Element.getAttributeNS"
signature: "public String getAttributeNS(String namespaceURI, String localName) throws DOMException"
title: "Element.getAttributeNS"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Element.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Element.getAttributeNS

```java
public String getAttributeNS(String namespaceURI, String localName) throws DOMException
```

Retrieves an attribute value by local name and namespace URI.
 
Per [XML Namespaces]
 , applications must use the value null as the
 namespaceURI parameter for methods if they wish to have
 no namespace.

**参数**

- **namespaceURI** — The namespace URI of the attribute to retrieve.
- **localName** — The local name of the attribute to retrieve.

**返回**

- The Attr value as a string, or the empty string if that attribute does not have a specified or default value.

**异常**

- **DOMException** — NOT_SUPPORTED_ERR: May be raised if the implementation does not support the feature "XML" and the language exposed through the Document does not support XML Namespaces (such as [HTML 4.01]).

> *Since 1.4, DOM Level 2*
