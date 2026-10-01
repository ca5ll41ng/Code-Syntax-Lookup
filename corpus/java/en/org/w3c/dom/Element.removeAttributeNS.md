---
id: "java-en-function-element-removeattributens"
language: "java"
lang: "en"
category: "function"
name: "Element.removeAttributeNS"
signature: "public void removeAttributeNS(String namespaceURI, String localName) throws DOMException"
title: "Element.removeAttributeNS"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Element.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Element.removeAttributeNS

```java
public void removeAttributeNS(String namespaceURI, String localName) throws DOMException
```

Removes an attribute by local name and namespace URI. If a default
 value for the removed attribute is defined in the DTD, a new
 attribute immediately appears with the default value as well as the
 corresponding namespace URI, local name, and prefix when applicable.
 The implementation may handle default values from other schemas
 similarly but applications should use
 Document.normalizeDocument() to guarantee this
 information is up-to-date.
 
If no attribute with this local name and namespace URI is found,
 this method has no effect.
 
Per [XML Namespaces]
 , applications must use the value null as the
 namespaceURI parameter for methods if they wish to have
 no namespace.

**参数**

- **namespaceURI** — The namespace URI of the attribute to remove.
- **localName** — The local name of the attribute to remove.

**异常**

- **DOMException** — NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly.  NOT_SUPPORTED_ERR: May be raised if the implementation does not support the feature "XML" and the language exposed through the Document does not support XML Namespaces (such as [HTML 4.01]).

> *Since 1.4, DOM Level 2*
