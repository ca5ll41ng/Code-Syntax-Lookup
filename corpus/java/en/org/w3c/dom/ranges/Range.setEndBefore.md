---
id: "java-en-function-range-setendbefore"
language: "java"
lang: "en"
category: "function"
name: "Range.setEndBefore"
signature: "public void setEndBefore(Node refNode) throws RangeException, DOMException"
title: "Range.setEndBefore"
directive: "method"
module: "java.xml/org.w3c.dom.ranges"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ranges/Range.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Range.setEndBefore

```java
public void setEndBefore(Node refNode) throws RangeException, DOMException
```

Sets the end position to be before a node.

**参数**

- **refNode** — Range ends before refNode

**异常**

- **RangeException** — INVALID_NODE_TYPE_ERR: Raised if the root container of refNode is not an Attr, Document, or DocumentFragment node or if refNode is a Document, DocumentFragment, Attr, Entity, or Notation node.
- **DOMException** — INVALID_STATE_ERR: Raised if detach() has already been invoked on this object.  WRONG_DOCUMENT_ERR: Raised if refNode was created from a different document than the one that created this range.
