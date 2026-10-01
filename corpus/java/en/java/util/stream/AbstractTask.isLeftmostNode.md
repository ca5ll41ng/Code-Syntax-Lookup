---
id: "java-en-function-abstracttask-isleftmostnode"
language: "java"
lang: "en"
category: "function"
name: "AbstractTask.isLeftmostNode"
signature: "protected boolean isLeftmostNode()"
title: "AbstractTask.isLeftmostNode"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractTask.isLeftmostNode

```java
protected boolean isLeftmostNode()
```

Returns whether this node is a "leftmost" node -- whether the path from
 the root to this node involves only traversing leftmost child links.  For
 a leaf node, this means it is the first leaf node in the encounter order.

**返回**

- `true` if this node is a "leftmost" node
