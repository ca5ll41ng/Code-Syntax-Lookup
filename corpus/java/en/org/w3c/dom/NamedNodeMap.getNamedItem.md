---
id: "java-en-function-namednodemap-getnameditem"
language: "java"
lang: "en"
category: "function"
name: "NamedNodeMap.getNamedItem"
signature: "public Node getNamedItem(String name)"
title: "NamedNodeMap.getNamedItem"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/NamedNodeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamedNodeMap.getNamedItem

```java
public Node getNamedItem(String name)
```

Retrieves a node specified by name.

**参数**

- **name** — The nodeName of a node to retrieve.

**返回**

- A Node (of any type) with the specified nodeName, or null if it does not identify any node in this map.
