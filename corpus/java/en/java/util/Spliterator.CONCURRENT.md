---
id: "java-en-function-spliterator-concurrent"
language: "java"
lang: "en"
category: "function"
name: "Spliterator.CONCURRENT"
signature: "public static final int CONCURRENT = 0x00001000"
title: "Spliterator.CONCURRENT"
directive: "field"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterator.CONCURRENT

```java
public static final int CONCURRENT = 0x00001000
```

Characteristic value signifying that the element source may be safely
 concurrently modified (allowing additions, replacements, and/or removals)
 by multiple threads without external synchronization. If so, the
 Spliterator is expected to have a documented policy concerning the impact
 of modifications during traversal.

 

A top-level Spliterator should not report both `CONCURRENT` and
 `SIZED`, since the finite size, if known, may change if the source
 is concurrently modified during traversal. Such a Spliterator is
 inconsistent and no guarantees can be made about any computation using
 that Spliterator. Sub-spliterators may report `SIZED` if the
 sub-split size is known and additions or removals to the source are not
 reflected when traversing.

 

A top-level Spliterator should not report both `CONCURRENT` and
 `IMMUTABLE`, since they are mutually exclusive. Such a Spliterator
 is inconsistent and no guarantees can be made about any computation using
 that Spliterator. Sub-spliterators may report `IMMUTABLE` if
 additions or removals to the source are not reflected when traversing.

 guaranteeing accuracy with respect to elements present at the point of
 Spliterator construction, but possibly not reflecting subsequent
 additions or removals.
