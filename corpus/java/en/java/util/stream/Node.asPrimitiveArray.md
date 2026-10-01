---
id: "java-en-function-node-asprimitivearray"
language: "java"
lang: "en"
category: "function"
name: "Node.asPrimitiveArray"
signature: "T_ARR asPrimitiveArray()"
title: "Node.asPrimitiveArray"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.asPrimitiveArray

```java
T_ARR asPrimitiveArray()
```

Views this node as a primitive array.

 

Depending on the underlying implementation this may return a
 reference to an internal array rather than a copy.  It is the callers
 responsibility to decide if either this node or the array is utilized
 as the primary reference for the data.

**返回**

- an array containing the contents of this `Node`
