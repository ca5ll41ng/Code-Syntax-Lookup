---
id: "java-en-function-arena-ofconfined"
language: "java"
lang: "en"
category: "function"
name: "Arena.ofConfined"
signature: "static Arena ofConfined()"
title: "Arena.ofConfined"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/Arena.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arena.ofConfined

```java
static Arena ofConfined()
```

{@return a new confined arena} Segments allocated with the confined arena can
          only be `isAccessibleBy(Thread) accessed` by the
          thread that created the arena, the arena's owner thread.
 

 Memory segments `allocate(long, long) allocated` by the returned arena
 are zero-initialized.
