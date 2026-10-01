---
id: "java-en-function-range-selectnodecontents"
language: "java"
lang: "en"
category: "function"
name: "Range.selectNodeContents"
signature: "public void selectNodeContents(Node refNode) throws RangeException, DOMException"
title: "Range.selectNodeContents"
directive: "method"
module: "java.xml/org.w3c.dom.ranges"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ranges/Range.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Range.selectNodeContents

```java
public void selectNodeContents(Node refNode) throws RangeException, DOMException
```

Select the contents within a node

**参数**

- **refNode** — Node to select from

**异常**

- **RangeException** — INVALID_NODE_TYPE_ERR: Raised if refNode or an ancestor of refNode is an Entity, Notation or DocumentType node.
- **DOMException** — INVALID_STATE_ERR: Raised if detach() has already been invoked on this object.  WRONG_DOCUMENT_ERR: Raised if refNode was created from a different document than the one that created this range.
