---
id: "java-en-function-node-appendchild"
language: "java"
lang: "en"
category: "function"
name: "Node.appendChild"
signature: "public Node appendChild(Node newChild) throws DOMException"
title: "Node.appendChild"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.appendChild

```java
public Node appendChild(Node newChild) throws DOMException
```

Adds the node newChild to the end of the list of children
 of this node. If the newChild is already in the tree, it
 is first removed.

**参数**

- **newChild** — The node to add.If it is a DocumentFragment object, the entire contents of the document fragment are moved into the child list of this node

**返回**

- The node added.

**异常**

- **DOMException** — HIERARCHY_REQUEST_ERR: Raised if this node is of a type that does not allow children of the type of the newChild node, or if the node to append is one of this node's ancestors or this node itself, or if this node is of type Document and the DOM application attempts to append a second DocumentType or Element node.  WRONG_DOCUMENT_ERR: Raised if newChild was created from a different document than the one that created this node.  NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly or if the previous parent of the node being inserted is readonly.  NOT_SUPPORTED_ERR: if the newChild node is a child of the Document node, this exception might be raised if the DOM implementation doesn't support the removal of the DocumentType child or Element child.

> *Since 1.4, DOM Level 3*
