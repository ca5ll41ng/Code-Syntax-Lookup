---
id: "java-en-function-nodes-flattenlong"
language: "java"
lang: "en"
category: "function"
name: "Nodes.flattenLong"
signature: "public static Node.OfLong flattenLong(Node.OfLong node)"
title: "Nodes.flattenLong"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Nodes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Nodes.flattenLong

```java
public static Node.OfLong flattenLong(Node.OfLong node)
```

Flatten, in parallel, a `Node.OfLong`.  A flattened node is one that
 has no children.  If the node is already flat, it is simply returned.

 If a new node is to be created, a new long[] array is created whose length
 is `count`.  Then the node tree is traversed and leaf node
 elements are placed in the array concurrently by leaf tasks at the
 correct offsets.

**参数**

- **node** — the node to flatten

**返回**

- a flat `Node.OfLong`
