---
id: "java-en-function-varhandle-storestorefence"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.storeStoreFence"
signature: "public static void storeStoreFence()"
title: "VarHandle.storeStoreFence"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.storeStoreFence

```java
public static void storeStoreFence()
```

Ensures that stores before the fence will not be reordered with
 stores after the fence.
