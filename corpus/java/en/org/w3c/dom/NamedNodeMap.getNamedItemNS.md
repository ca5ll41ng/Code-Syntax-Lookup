---
id: "java-en-function-namednodemap-getnameditemns"
language: "java"
lang: "en"
category: "function"
name: "NamedNodeMap.getNamedItemNS"
signature: "public Node getNamedItemNS(String namespaceURI, String localName) throws DOMException"
title: "NamedNodeMap.getNamedItemNS"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/NamedNodeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamedNodeMap.getNamedItemNS

```java
public Node getNamedItemNS(String namespaceURI, String localName) throws DOMException
```

Retrieves a node specified by local name and namespace URI.
 
Per [XML Namespaces]
 , applications must use the value null as the namespaceURI parameter
 for methods if they wish to have no namespace.

**参数**

- **namespaceURI** — The namespace URI of the node to retrieve.
- **localName** — The local name of the node to retrieve.

**返回**

- A Node (of any type) with the specified local name and namespace URI, or null if they do not identify any node in this map.

**异常**

- **DOMException** — NOT_SUPPORTED_ERR: May be raised if the implementation does not support the feature "XML" and the language exposed through the Document does not support XML Namespaces (such as [HTML 4.01]).

> *Since 1.4, DOM Level 2*
