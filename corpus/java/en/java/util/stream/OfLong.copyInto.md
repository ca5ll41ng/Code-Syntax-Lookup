---
id: "java-en-function-oflong-copyinto"
language: "java"
lang: "en"
category: "function"
name: "OfLong.copyInto"
signature: "default void copyInto(Long[] boxed, int offset)"
title: "OfLong.copyInto"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfLong.copyInto

```java
default void copyInto(Long[] boxed, int offset)
```

{@inheritDoc}

 to obtain a long[] array then and copies the elements from that
 long[] array into the boxed Long[] array.  This is not efficient and
 it is recommended to invoke `copyInto`.
