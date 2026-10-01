---
id: "java-en-function-namednodemap-setnameditem"
language: "java"
lang: "en"
category: "function"
name: "NamedNodeMap.setNamedItem"
signature: "public Node setNamedItem(Node arg) throws DOMException"
title: "NamedNodeMap.setNamedItem"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/NamedNodeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamedNodeMap.setNamedItem

```java
public Node setNamedItem(Node arg) throws DOMException
```

Adds a node using its nodeName attribute. If a node with
 that name is already present in this map, it is replaced by the new
 one. Replacing a node by itself has no effect.
 
As the nodeName attribute is used to derive the name
 which the node must be stored under, multiple nodes of certain types
 (those that have a "special" string value) cannot be stored as the
 names would clash. This is seen as preferable to allowing nodes to be
 aliased.

**参数**

- **arg** — A node to store in this map. The node will later be accessible using the value of its nodeName attribute.

**返回**

- If the new Node replaces an existing node the replaced Node is returned, otherwise null is returned.

**异常**

- **DOMException** — WRONG_DOCUMENT_ERR: Raised if arg was created from a different document than the one that created this map.  NO_MODIFICATION_ALLOWED_ERR: Raised if this map is readonly.  INUSE_ATTRIBUTE_ERR: Raised if arg is an Attr that is already an attribute of another Element object. The DOM user must explicitly clone Attr nodes to re-use them in other elements.  HIERARCHY_REQUEST_ERR: Raised if an attempt is made to add a node doesn't belong in this NamedNodeMap. Examples would include trying to insert something other than an Attr node into an Element's map of attributes, or a non-Entity node into the DocumentType's map of Entities.
