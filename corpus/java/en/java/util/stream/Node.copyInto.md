---
id: "java-en-function-node-copyinto"
language: "java"
lang: "en"
category: "function"
name: "Node.copyInto"
signature: "void copyInto(T[] array, int offset)"
title: "Node.copyInto"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.copyInto

```java
void copyInto(T[] array, int offset)
```

Copies the content of this `Node` into an array, starting at a
 given offset into the array.  It is the caller's responsibility to ensure
 there is sufficient room in the array, otherwise unspecified behaviour
 will occur if the array length is less than the number of elements
 contained in this node.

**参数**

- **array** — the array into which to copy the contents of this `Node`
- **offset** — the starting offset within the array

**异常**

- **IndexOutOfBoundsException** — if copying would cause access of data outside array bounds
- **NullPointerException** — if `array` is `null`
