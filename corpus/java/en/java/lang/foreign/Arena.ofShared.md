---
id: "java-en-function-arena-ofshared"
language: "java"
lang: "en"
category: "function"
name: "Arena.ofShared"
signature: "static Arena ofShared()"
title: "Arena.ofShared"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/Arena.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arena.ofShared

```java
static Arena ofShared()
```

{@return a new shared arena} Segments allocated with the shared arena can be
          `isAccessibleBy(Thread) accessed` by any thread.
 

 Memory segments `allocate(long, long) allocated` by the returned arena
 are zero-initialized.
