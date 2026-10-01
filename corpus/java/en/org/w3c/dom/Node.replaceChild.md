---
id: "java-en-function-node-replacechild"
language: "java"
lang: "en"
category: "function"
name: "Node.replaceChild"
signature: "public Node replaceChild(Node newChild, Node oldChild) throws DOMException"
title: "Node.replaceChild"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.replaceChild

```java
public Node replaceChild(Node newChild, Node oldChild) throws DOMException
```

Replaces the child node oldChild with newChild
  in the list of children, and returns the oldChild node.
 
If newChild is a DocumentFragment object,
 oldChild is replaced by all of the
 DocumentFragment children, which are inserted in the
 same order. If the newChild is already in the tree, it
 is first removed.
 

**Note:**  Replacing a node with itself is implementation
 dependent.

**参数**

- **newChild** — The new node to put in the child list.
- **oldChild** — The node being replaced in the list.

**返回**

- The node replaced.

**异常**

- **DOMException** — HIERARCHY_REQUEST_ERR: Raised if this node is of a type that does not allow children of the type of the newChild node, or if the node to put in is one of this node's ancestors or this node itself, or if this node is of type Document and the result of the replacement operation would add a second DocumentType or Element on the Document node.  WRONG_DOCUMENT_ERR: Raised if newChild was created from a different document than the one that created this node.  NO_MODIFICATION_ALLOWED_ERR: Raised if this node or the parent of the new node is readonly.  NOT_FOUND_ERR: Raised if oldChild is not a child of this node.  NOT_SUPPORTED_ERR: if this node is of type Document, this exception might be raised if the DOM implementation doesn't support the replacement of the DocumentType child or Element child.

> *Since 1.4, DOM Level 3*
