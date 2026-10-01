---
id: "java-en-function-spliterator-subsized"
language: "java"
lang: "en"
category: "function"
name: "Spliterator.SUBSIZED"
signature: "public static final int SUBSIZED = 0x00004000"
title: "Spliterator.SUBSIZED"
directive: "field"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterator.SUBSIZED

```java
public static final int SUBSIZED = 0x00004000
```

Characteristic value signifying that all Spliterators resulting from
 `trySplit()` will be both `SIZED` and `SUBSIZED`.
 (This means that all child Spliterators, whether direct or indirect, will
 be `SIZED`.)

 

A Spliterator that does not report `SIZED` as required by
 `SUBSIZED` is inconsistent and no guarantees can be made about any
 computation using that Spliterator.

 approximately balanced binary tree, will report `SIZED` but not
 `SUBSIZED`, since it is common to know the size of the entire tree
 but not the exact sizes of subtrees.
