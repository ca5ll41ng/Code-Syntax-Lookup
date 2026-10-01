---
id: "java-en-function-namednodemap-item"
language: "java"
lang: "en"
category: "function"
name: "NamedNodeMap.item"
signature: "public Node item(int index)"
title: "NamedNodeMap.item"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/NamedNodeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamedNodeMap.item

```java
public Node item(int index)
```

Returns the indexth item in the map. If index
 is greater than or equal to the number of nodes in this map, this
 returns null.

**参数**

- **index** — Index into this map.

**返回**

- The node at the indexth position in the map, or null if that is not a valid index.
