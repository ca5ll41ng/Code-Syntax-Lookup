---
id: "java-en-function-range-setend"
language: "java"
lang: "en"
category: "function"
name: "Range.setEnd"
signature: "public void setEnd(Node refNode, int offset) throws RangeException, DOMException"
title: "Range.setEnd"
directive: "method"
module: "java.xml/org.w3c.dom.ranges"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ranges/Range.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Range.setEnd

```java
public void setEnd(Node refNode, int offset) throws RangeException, DOMException
```

Sets the attributes describing the end of a Range.

**参数**

- **refNode** — The refNode value. This parameter must be different from null.
- **offset** — The endOffset value.

**异常**

- **RangeException** — INVALID_NODE_TYPE_ERR: Raised if refNode or an ancestor of refNode is an Entity, Notation, or DocumentType node.
- **DOMException** — INDEX_SIZE_ERR: Raised if offset is negative or greater than the number of child units in refNode. Child units are 16-bit units if refNode is a type of CharacterData node (e.g., a Text or Comment node) or a ProcessingInstruction node. Child units are Nodes in all other cases.  INVALID_STATE_ERR: Raised if detach() has already been invoked on this object.  WRONG_DOCUMENT_ERR: Raised if refNode was created from a different document than the one that created this range.
