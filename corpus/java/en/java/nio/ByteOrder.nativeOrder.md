---
id: "java-en-function-byteorder-nativeorder"
language: "java"
lang: "en"
category: "function"
name: "ByteOrder.nativeOrder"
signature: "public static ByteOrder nativeOrder()"
title: "ByteOrder.nativeOrder"
directive: "method"
module: "java.base/java.nio"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/ByteOrder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ByteOrder.nativeOrder

```java
public static ByteOrder nativeOrder()
```

Retrieves the native byte order of the underlying platform.

 

 This method is defined so that performance-sensitive Java code can
 allocate direct buffers with the same byte order as the hardware.
 Native code libraries are often more efficient when such buffers are
 used.

**返回**

- The native byte order of the hardware upon which this Java virtual machine is running
