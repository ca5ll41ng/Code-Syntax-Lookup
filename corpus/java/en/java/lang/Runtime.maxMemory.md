---
id: "java-en-function-runtime-maxmemory"
language: "java"
lang: "en"
category: "function"
name: "Runtime.maxMemory"
signature: "public native long maxMemory()"
title: "Runtime.maxMemory"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Runtime.maxMemory

```java
public native long maxMemory()
```

Returns the maximum amount of memory that the Java virtual machine
 will attempt to use.  If there is no inherent limit then the value
 `MAX_VALUE` will be returned.

**返回**

- the maximum amount of memory that the virtual machine will attempt to use, measured in bytes

> *Since 1.4*
