---
id: "java-en-function-text-splittext"
language: "java"
lang: "en"
category: "function"
name: "Text.splitText"
signature: "public Text splitText(int offset) throws DOMException"
title: "Text.splitText"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Text.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Text.splitText

```java
public Text splitText(int offset) throws DOMException
```

Breaks this node into two nodes at the specified offset,
 keeping both in the tree as siblings. After being split, this node
 will contain all the content up to the offset point. A
 new node of the same type, which contains all the content at and
 after the offset point, is returned. If the original
 node had a parent node, the new node is inserted as the next sibling
 of the original node. When the offset is equal to the
 length of this node, the new node has no data.

**参数**

- **offset** — The 16-bit unit offset at which to split, starting from 0.

**返回**

- The new node, of the same type as this node.

**异常**

- **DOMException** — INDEX_SIZE_ERR: Raised if the specified offset is negative or greater than the number of 16-bit units in data.  NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly.
