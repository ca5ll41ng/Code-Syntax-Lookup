---
id: "java-en-function-ofplatform-stacksize"
language: "java"
lang: "en"
category: "function"
name: "OfPlatform.stackSize"
signature: "OfPlatform stackSize(long stackSize)"
title: "OfPlatform.stackSize"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfPlatform.stackSize

```java
OfPlatform stackSize(long stackSize)
```

Sets the desired stack size.

 

 The stack size is the approximate number of bytes of address space
 that the Java virtual machine is to allocate for the thread's stack. The
 effect is highly platform dependent and the Java virtual machine is free
 to treat the `stackSize` parameter as a "suggestion". If the value
 is unreasonably low for the platform then a platform specific minimum
 may be used. If the value is unreasonably high then a platform specific
 maximum may be used. A value of zero is always ignored.

**参数**

- **stackSize** — the desired stack size

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if the stack size is negative
