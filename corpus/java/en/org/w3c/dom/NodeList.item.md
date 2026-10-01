---
id: "java-en-function-nodelist-item"
language: "java"
lang: "en"
category: "function"
name: "NodeList.item"
signature: "public Node item(int index)"
title: "NodeList.item"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/NodeList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NodeList.item

```java
public Node item(int index)
```

Returns the indexth item in the collection. If
 index is greater than or equal to the number of nodes in
 the list, this returns null.

**参数**

- **index** — Index into the collection.

**返回**

- The node at the indexth position in the NodeList, or null if that is not a valid index.
