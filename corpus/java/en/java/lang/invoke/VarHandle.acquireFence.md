---
id: "java-en-function-varhandle-acquirefence"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.acquireFence"
signature: "public static void acquireFence()"
title: "VarHandle.acquireFence"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.acquireFence

```java
public static void acquireFence()
```

Ensures that loads before the fence will not be reordered with loads and
 stores after the fence.

 method has memory ordering effects compatible with
 `atomic_thread_fence(memory_order_acquire)`
