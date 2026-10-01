---
id: "java-en-function-node-getchild"
language: "java"
lang: "en"
category: "function"
name: "Node.getChild"
signature: "default Node<T> getChild(int i)"
title: "Node.getChild"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.getChild

```java
default Node<T> getChild(int i)
```

Retrieves the child `Node` at a given index.

 `IndexOutOfBoundsException`.

**参数**

- **i** — the index to the child node

**返回**

- the child node

**异常**

- **IndexOutOfBoundsException** — if the index is less than 0 or greater than or equal to the number of child nodes
