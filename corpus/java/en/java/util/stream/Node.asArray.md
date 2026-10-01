---
id: "java-en-function-node-asarray"
language: "java"
lang: "en"
category: "function"
name: "Node.asArray"
signature: "T[] asArray(IntFunction<T[]> generator)"
title: "Node.asArray"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.asArray

```java
T[] asArray(IntFunction<T[]> generator)
```

Provides an array view of the contents of this node.

 

Depending on the underlying implementation, this may return a
 reference to an internal array rather than a copy.  Since the returned
 array may be shared, the returned array should not be modified.  The
 `generator` function may be consulted to create the array if a new
 array needs to be created.

**参数**

- **generator** — a factory function which takes an integer parameter and returns a new, empty array of that size and of the appropriate array type

**返回**

- an array containing the contents of this `Node`
