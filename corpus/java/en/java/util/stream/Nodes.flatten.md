---
id: "java-en-function-nodes-flatten"
language: "java"
lang: "en"
category: "function"
name: "Nodes.flatten"
signature: "public static <T> Node<T> flatten(Node<T> node, IntFunction<T[]> generator)"
title: "Nodes.flatten"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Nodes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Nodes.flatten

```java
public static <T> Node<T> flatten(Node<T> node, IntFunction<T[]> generator)
```

Flatten, in parallel, a `Node`.  A flattened node is one that has
 no children.  If the node is already flat, it is simply returned.

 If a new node is to be created, the generator is used to create an array
 whose length is `count`.  Then the node tree is traversed
 and leaf node elements are placed in the array concurrently by leaf tasks
 at the correct offsets.

**参数**

- **type** — of elements contained by the node
- **node** — the node to flatten
- **generator** — the array factory used to create array instances

**返回**

- a flat `Node`
