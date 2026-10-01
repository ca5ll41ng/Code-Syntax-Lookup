---
id: "java-en-function-varhandle-fullfence"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.fullFence"
signature: "public static void fullFence()"
title: "VarHandle.fullFence"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.fullFence

```java
public static void fullFence()
```

Ensures that loads and stores before the fence will not be reordered
 with
 loads and stores after the fence.

 method has memory ordering effects compatible with
 `atomic_thread_fence(memory_order_seq_cst)`
