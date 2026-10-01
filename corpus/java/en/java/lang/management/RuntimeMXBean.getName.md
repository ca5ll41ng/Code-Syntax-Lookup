---
id: "java-en-function-runtimemxbean-getname"
language: "java"
lang: "en"
category: "function"
name: "RuntimeMXBean.getName"
signature: "public String getName()"
title: "RuntimeMXBean.getName"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/RuntimeMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimeMXBean.getName

```java
public String getName()
```

Returns the name representing the running Java virtual machine.
 The returned name string can be any arbitrary string and
 a Java virtual machine implementation can choose
 to embed platform-specific useful information in the
 returned name string.  Each running virtual machine could have
 a different name.

**返回**

- the name representing the running Java virtual machine.
