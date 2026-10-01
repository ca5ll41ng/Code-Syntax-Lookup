---
id: "java-en-function-abstracttask-isleaf"
language: "java"
lang: "en"
category: "function"
name: "AbstractTask.isLeaf"
signature: "protected boolean isLeaf()"
title: "AbstractTask.isLeaf"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractTask.isLeaf

```java
protected boolean isLeaf()
```

Indicates whether this task is a leaf node.  (Only valid after
 `compute` has been called on this node).  If the node is not a
 leaf node, then children will be non-null and numChildren will be
 positive.

**返回**

- `true` if this task is a leaf node
