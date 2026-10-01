---
id: "java-en-function-varhandle-releasefence"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.releaseFence"
signature: "public static void releaseFence()"
title: "VarHandle.releaseFence"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.releaseFence

```java
public static void releaseFence()
```

Ensures that loads and stores before the fence will not be
 reordered with stores after the fence.

 method has memory ordering effects compatible with
 `atomic_thread_fence(memory_order_release)`
