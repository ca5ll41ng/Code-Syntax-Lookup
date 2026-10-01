---
id: "java-en-function-ofdouble-copyinto"
language: "java"
lang: "en"
category: "function"
name: "OfDouble.copyInto"
signature: "default void copyInto(Double[] boxed, int offset)"
title: "OfDouble.copyInto"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfDouble.copyInto

```java
default void copyInto(Double[] boxed, int offset)
```

{@inheritDoc}

 to obtain a double[] array then and copies the elements from that
 double[] array into the boxed Double[] array.  This is not efficient
 and it is recommended to invoke `copyInto`.
