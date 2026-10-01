---
id: "java-en-function-spliterator-immutable"
language: "java"
lang: "en"
category: "function"
name: "Spliterator.IMMUTABLE"
signature: "public static final int IMMUTABLE = 0x00000400"
title: "Spliterator.IMMUTABLE"
directive: "field"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterator.IMMUTABLE

```java
public static final int IMMUTABLE = 0x00000400
```

Characteristic value signifying that the element source cannot be
 structurally modified; that is, elements cannot be added, replaced, or
 removed, so such changes cannot occur during traversal. A Spliterator
 that does not report `IMMUTABLE` or `CONCURRENT` is expected
 to have a documented policy (for example throwing
 `ConcurrentModificationException`) concerning structural
 interference detected during traversal.
