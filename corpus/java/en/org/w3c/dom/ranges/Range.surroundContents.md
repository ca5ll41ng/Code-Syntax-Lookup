---
id: "java-en-function-range-surroundcontents"
language: "java"
lang: "en"
category: "function"
name: "Range.surroundContents"
signature: "public void surroundContents(Node newParent) throws DOMException, RangeException"
title: "Range.surroundContents"
directive: "method"
module: "java.xml/org.w3c.dom.ranges"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ranges/Range.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Range.surroundContents

```java
public void surroundContents(Node newParent) throws DOMException, RangeException
```

Reparents the contents of the Range to the given node and inserts the
 node at the position of the start of the Range.

**参数**

- **newParent** — The node to surround the contents with.

**异常**

- **DOMException** — NO_MODIFICATION_ALLOWED_ERR: Raised if an ancestor container of either boundary-point of the Range is read-only.  WRONG_DOCUMENT_ERR: Raised if  newParent and the container of the start of the Range were not created from the same document.  HIERARCHY_REQUEST_ERR: Raised if the container of the start of the Range is of a type that does not allow children of the type of newParent or if newParent is an ancestor of the container or if node would end up with a child node of a type not allowed by the type of node.  INVALID_STATE_ERR: Raised if detach() has already been invoked on this object.
- **RangeException** — BAD_BOUNDARYPOINTS_ERR: Raised if the Range partially selects a non-text node.  INVALID_NODE_TYPE_ERR: Raised if  node is an Attr, Entity, DocumentType, Notation, Document, or DocumentFragment node.
