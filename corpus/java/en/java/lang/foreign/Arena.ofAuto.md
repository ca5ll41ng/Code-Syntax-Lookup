---
id: "java-en-function-arena-ofauto"
language: "java"
lang: "en"
category: "function"
name: "Arena.ofAuto"
signature: "static Arena ofAuto()"
title: "Arena.ofAuto"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/Arena.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arena.ofAuto

```java
static Arena ofAuto()
```

Creates a new arena that is managed, automatically, by the garbage collector.
 Segments allocated with the returned arena can be
 `isAccessibleBy(Thread) accessed` by any thread.
 Calling `close` on the returned arena will result in an `UnsupportedOperationException`.
 

 Memory segments `allocate(long, long) allocated` by the returned arena
 are zero-initialized.

**返回**

- a new arena that is managed, automatically, by the garbage collector
