---
id: "java-en-function-ofint-copyinto"
language: "java"
lang: "en"
category: "function"
name: "OfInt.copyInto"
signature: "default void copyInto(Integer[] boxed, int offset)"
title: "OfInt.copyInto"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfInt.copyInto

```java
default void copyInto(Integer[] boxed, int offset)
```

{@inheritDoc}

 obtain an int[] array then and copies the elements from that int[]
 array into the boxed Integer[] array.  This is not efficient and it
 is recommended to invoke `copyInto`.
