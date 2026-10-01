---
id: "java-en-function-runtime-freememory"
language: "java"
lang: "en"
category: "function"
name: "Runtime.freeMemory"
signature: "public native long freeMemory()"
title: "Runtime.freeMemory"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Runtime.freeMemory

```java
public native long freeMemory()
```

Returns the amount of free memory in the Java Virtual Machine.
 Calling the
 `gc` method may result in increasing the value returned
 by `freeMemory.`

**返回**

- an approximation to the total amount of memory currently available for future allocated objects, measured in bytes.
