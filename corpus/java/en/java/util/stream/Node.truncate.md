---
id: "java-en-function-node-truncate"
language: "java"
lang: "en"
category: "function"
name: "Node.truncate"
signature: "default Node<T> truncate(long from, long to, IntFunction<T[]> generator)"
title: "Node.truncate"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.truncate

```java
default Node<T> truncate(long from, long to, IntFunction<T[]> generator)
```

Return a node describing a subsequence of the elements of this node,
 starting at the given inclusive start offset and ending at the given
 exclusive end offset.

**参数**

- **from** — The (inclusive) starting offset of elements to include, must be in range 0..count().
- **to** — The (exclusive) end offset of elements to include, must be in range 0..count().
- **generator** — A function to be used to create a new array, if needed, for reference nodes.

**返回**

- the truncated node
