---
id: "java-en-function-node-insertbefore"
language: "java"
lang: "en"
category: "function"
name: "Node.insertBefore"
signature: "public Node insertBefore(Node newChild, Node refChild) throws DOMException"
title: "Node.insertBefore"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.insertBefore

```java
public Node insertBefore(Node newChild, Node refChild) throws DOMException
```

Inserts the node newChild before the existing child node
 refChild. If refChild is null,
 insert newChild at the end of the list of children.
 
If newChild is a DocumentFragment object,
 all of its children are inserted, in the same order, before
 refChild. If the newChild is already in the
 tree, it is first removed.
 

**Note:**  Inserting a node before itself is implementation
 dependent.

**参数**

- **newChild** — The node to insert.
- **refChild** — The reference node, i.e., the node before which the new node must be inserted.

**返回**

- The node being inserted.

**异常**

- **DOMException** — HIERARCHY_REQUEST_ERR: Raised if this node is of a type that does not allow children of the type of the newChild node, or if the node to insert is one of this node's ancestors or this node itself, or if this node is of type Document and the DOM application attempts to insert a second DocumentType or Element node.  WRONG_DOCUMENT_ERR: Raised if newChild was created from a different document than the one that created this node.  NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly or if the parent of the node being inserted is readonly.  NOT_FOUND_ERR: Raised if refChild is not a child of this node.  NOT_SUPPORTED_ERR: if this node is of type Document, this exception might be raised if the DOM implementation doesn't support the insertion of a DocumentType or Element node.

> *Since 1.4, DOM Level 3*
