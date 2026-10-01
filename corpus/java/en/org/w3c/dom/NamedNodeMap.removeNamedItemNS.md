---
id: "java-en-function-namednodemap-removenameditemns"
language: "java"
lang: "en"
category: "function"
name: "NamedNodeMap.removeNamedItemNS"
signature: "public Node removeNamedItemNS(String namespaceURI, String localName) throws DOMException"
title: "NamedNodeMap.removeNamedItemNS"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/NamedNodeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamedNodeMap.removeNamedItemNS

```java
public Node removeNamedItemNS(String namespaceURI, String localName) throws DOMException
```

Removes a node specified by local name and namespace URI. A removed
 attribute may be known to have a default value when this map contains
 the attributes attached to an element, as returned by the attributes
 attribute of the Node interface. If so, an attribute
 immediately appears containing the default value as well as the
 corresponding namespace URI, local name, and prefix when applicable.
 
Per [XML Namespaces]
 , applications must use the value null as the namespaceURI parameter
 for methods if they wish to have no namespace.

**参数**

- **namespaceURI** — The namespace URI of the node to remove.
- **localName** — The local name of the node to remove.

**返回**

- The node removed from this map if a node with such a local name and namespace URI exists.

**异常**

- **DOMException** — NOT_FOUND_ERR: Raised if there is no node with the specified namespaceURI and localName in this map.  NO_MODIFICATION_ALLOWED_ERR: Raised if this map is readonly.  NOT_SUPPORTED_ERR: May be raised if the implementation does not support the feature "XML" and the language exposed through the Document does not support XML Namespaces (such as [HTML 4.01]).

> *Since 1.4, DOM Level 2*
