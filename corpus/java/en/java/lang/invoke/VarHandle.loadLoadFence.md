---
id: "java-en-function-varhandle-loadloadfence"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.loadLoadFence"
signature: "public static void loadLoadFence()"
title: "VarHandle.loadLoadFence"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.loadLoadFence

```java
public static void loadLoadFence()
```

Ensures that loads before the fence will not be reordered with
 loads after the fence.
