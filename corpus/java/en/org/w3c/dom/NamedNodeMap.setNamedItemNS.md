---
id: "java-en-function-namednodemap-setnameditemns"
language: "java"
lang: "en"
category: "function"
name: "NamedNodeMap.setNamedItemNS"
signature: "public Node setNamedItemNS(Node arg) throws DOMException"
title: "NamedNodeMap.setNamedItemNS"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/NamedNodeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamedNodeMap.setNamedItemNS

```java
public Node setNamedItemNS(Node arg) throws DOMException
```

Adds a node using its namespaceURI and
 localName. If a node with that namespace URI and that
 local name is already present in this map, it is replaced by the new
 one. Replacing a node by itself has no effect.
 
Per [XML Namespaces]
 , applications must use the value null as the namespaceURI parameter
 for methods if they wish to have no namespace.

**参数**

- **arg** — A node to store in this map. The node will later be accessible using the value of its namespaceURI and localName attributes.

**返回**

- If the new Node replaces an existing node the replaced Node is returned, otherwise null is returned.

**异常**

- **DOMException** — WRONG_DOCUMENT_ERR: Raised if arg was created from a different document than the one that created this map.  NO_MODIFICATION_ALLOWED_ERR: Raised if this map is readonly.  INUSE_ATTRIBUTE_ERR: Raised if arg is an Attr that is already an attribute of another Element object. The DOM user must explicitly clone Attr nodes to re-use them in other elements.  HIERARCHY_REQUEST_ERR: Raised if an attempt is made to add a node doesn't belong in this NamedNodeMap. Examples would include trying to insert something other than an Attr node into an Element's map of attributes, or a non-Entity node into the DocumentType's map of Entities.  NOT_SUPPORTED_ERR: May be raised if the implementation does not support the feature "XML" and the language exposed through the Document does not support XML Namespaces (such as [HTML 4.01]).

> *Since 1.4, DOM Level 2*
