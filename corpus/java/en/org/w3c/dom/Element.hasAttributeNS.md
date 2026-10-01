---
id: "java-en-function-element-hasattributens"
language: "java"
lang: "en"
category: "function"
name: "Element.hasAttributeNS"
signature: "public boolean hasAttributeNS(String namespaceURI, String localName) throws DOMException"
title: "Element.hasAttributeNS"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Element.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Element.hasAttributeNS

```java
public boolean hasAttributeNS(String namespaceURI, String localName) throws DOMException
```

Returns true when an attribute with a given local name and
 namespace URI is specified on this element or has a default value,
 false otherwise.
 
Per [XML Namespaces]
 , applications must use the value null as the
 namespaceURI parameter for methods if they wish to have
 no namespace.

**参数**

- **namespaceURI** — The namespace URI of the attribute to look for.
- **localName** — The local name of the attribute to look for.

**返回**

- true if an attribute with the given local name and namespace URI is specified or has a default value on this element, false otherwise.

**异常**

- **DOMException** — NOT_SUPPORTED_ERR: May be raised if the implementation does not support the feature "XML" and the language exposed through the Document does not support XML Namespaces (such as [HTML 4.01]).

> *Since 1.4, DOM Level 2*
