---
id: "java-en-function-internalnodespliterator-findnextleafnode"
language: "java"
lang: "en"
category: "function"
name: "InternalNodeSpliterator.findNextLeafNode"
signature: "protected final N findNextLeafNode(Deque<N> stack)"
title: "InternalNodeSpliterator.findNextLeafNode"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Nodes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InternalNodeSpliterator.findNextLeafNode

```java
protected final N findNextLeafNode(Deque<N> stack)
```

Depth first search, in left-to-right order, of the node tree, using
 an explicit stack, to find the next non-empty leaf node.
