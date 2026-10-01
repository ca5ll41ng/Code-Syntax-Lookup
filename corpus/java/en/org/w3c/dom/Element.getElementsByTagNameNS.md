---
id: "java-en-function-element-getelementsbytagnamens"
language: "java"
lang: "en"
category: "function"
name: "Element.getElementsByTagNameNS"
signature: "public NodeList getElementsByTagNameNS(String namespaceURI, String localName) throws DOMException"
title: "Element.getElementsByTagNameNS"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Element.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Element.getElementsByTagNameNS

```java
public NodeList getElementsByTagNameNS(String namespaceURI, String localName) throws DOMException
```

Returns a NodeList of all the descendant
 Elements with a given local name and namespace URI in
 document order.

**参数**

- **namespaceURI** — The namespace URI of the elements to match on. The special value "*" matches all namespaces.
- **localName** — The local name of the elements to match on. The special value "*" matches all local names.

**返回**

- A new NodeList object containing all the matched Elements.

**异常**

- **DOMException** — NOT_SUPPORTED_ERR: May be raised if the implementation does not support the feature "XML" and the language exposed through the Document does not support XML Namespaces (such as [HTML 4.01]).

> *Since 1.4, DOM Level 2*
