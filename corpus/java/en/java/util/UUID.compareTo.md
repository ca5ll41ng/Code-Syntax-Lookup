---
id: "java-en-function-uuid-compareto"
language: "java"
lang: "en"
category: "function"
name: "UUID.compareTo"
signature: "public int compareTo(UUID val)"
title: "UUID.compareTo"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/UUID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UUID.compareTo

```java
public int compareTo(UUID val)
```

Compares this UUID with the specified UUID.

 

 The first of two UUIDs is greater than the second if the most
 significant field in which the UUIDs differ is greater for the first
 UUID.

**参数**

- **val** — `UUID` to which this `UUID` is to be compared

**返回**

- -1, 0 or 1 as this `UUID` is less than, equal to, or greater than `val`
