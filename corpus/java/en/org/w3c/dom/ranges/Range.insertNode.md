---
id: "java-en-function-range-insertnode"
language: "java"
lang: "en"
category: "function"
name: "Range.insertNode"
signature: "public void insertNode(Node newNode) throws DOMException, RangeException"
title: "Range.insertNode"
directive: "method"
module: "java.xml/org.w3c.dom.ranges"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ranges/Range.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Range.insertNode

```java
public void insertNode(Node newNode) throws DOMException, RangeException
```

Inserts a node into the Document or DocumentFragment at the start of
 the Range. If the container is a Text node, this will be split at the
 start of the Range (as if the Text node's splitText method was
 performed at the insertion point) and the insertion will occur
 between the two resulting Text nodes. Adjacent Text nodes will not be
 automatically merged. If the node to be inserted is a
 DocumentFragment node, the children will be inserted rather than the
 DocumentFragment node itself.

**参数**

- **newNode** — The node to insert at the start of the Range

**异常**

- **DOMException** — NO_MODIFICATION_ALLOWED_ERR: Raised if an ancestor container of the start of the Range is read-only.  WRONG_DOCUMENT_ERR: Raised if newNode and the container of the start of the Range were not created from the same document.  HIERARCHY_REQUEST_ERR: Raised if the container of the start of the Range is of a type that does not allow children of the type of newNode or if newNode is an ancestor of the container.  INVALID_STATE_ERR: Raised if detach() has already been invoked on this object.
- **RangeException** — INVALID_NODE_TYPE_ERR: Raised if newNode is an Attr, Entity, Notation, or Document node.
