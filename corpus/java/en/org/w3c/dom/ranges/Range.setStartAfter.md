---
id: "java-en-function-range-setstartafter"
language: "java"
lang: "en"
category: "function"
name: "Range.setStartAfter"
signature: "public void setStartAfter(Node refNode) throws RangeException, DOMException"
title: "Range.setStartAfter"
directive: "method"
module: "java.xml/org.w3c.dom.ranges"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ranges/Range.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Range.setStartAfter

```java
public void setStartAfter(Node refNode) throws RangeException, DOMException
```

Sets the start position to be after a node

**参数**

- **refNode** — Range starts after refNode

**异常**

- **RangeException** — INVALID_NODE_TYPE_ERR: Raised if the root container of refNode is not an Attr, Document, or DocumentFragment node or if refNode is a Document, DocumentFragment, Attr, Entity, or Notation node.
- **DOMException** — INVALID_STATE_ERR: Raised if detach() has already been invoked on this object.  WRONG_DOCUMENT_ERR: Raised if refNode was created from a different document than the one that created this range.
