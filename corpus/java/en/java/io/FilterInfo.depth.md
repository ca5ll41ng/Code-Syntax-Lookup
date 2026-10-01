---
id: "java-en-function-filterinfo-depth"
language: "java"
lang: "en"
category: "function"
name: "FilterInfo.depth"
signature: "long depth()"
title: "FilterInfo.depth"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilterInfo.depth

```java
long depth()
```

The current depth.
 The depth starts at `1` and increases for each nested object and
 decrements when each nested object returns.

**返回**

- the current depth
