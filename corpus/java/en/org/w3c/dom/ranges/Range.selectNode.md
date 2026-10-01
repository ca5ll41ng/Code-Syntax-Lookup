---
id: "java-en-function-range-selectnode"
language: "java"
lang: "en"
category: "function"
name: "Range.selectNode"
signature: "public void selectNode(Node refNode) throws RangeException, DOMException"
title: "Range.selectNode"
directive: "method"
module: "java.xml/org.w3c.dom.ranges"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ranges/Range.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Range.selectNode

```java
public void selectNode(Node refNode) throws RangeException, DOMException
```

Select a node and its contents

**参数**

- **refNode** — The node to select.

**异常**

- **RangeException** — INVALID_NODE_TYPE_ERR: Raised if an ancestor of refNode is an Entity, Notation or DocumentType node or if refNode is a Document, DocumentFragment, Attr, Entity, or Notation node.
- **DOMException** — INVALID_STATE_ERR: Raised if detach() has already been invoked on this object.  WRONG_DOCUMENT_ERR: Raised if refNode was created from a different document than the one that created this range.
