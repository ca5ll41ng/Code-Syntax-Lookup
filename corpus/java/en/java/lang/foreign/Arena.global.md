---
id: "java-en-function-arena-global"
language: "java"
lang: "en"
category: "function"
name: "Arena.global"
signature: "static Arena global()"
title: "Arena.global"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/Arena.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arena.global

```java
static Arena global()
```

{@return the global arena} Segments allocated with the global arena can be
          `isAccessibleBy(Thread) accessed` by any thread.
          Calling `close` on the returned arena will result in
          an `UnsupportedOperationException`.
 

 Memory segments `allocate(long, long) allocated` by the returned arena
 are zero-initialized.
