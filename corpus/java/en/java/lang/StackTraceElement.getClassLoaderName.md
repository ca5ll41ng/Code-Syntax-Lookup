---
id: "java-en-function-stacktraceelement-getclassloadername"
language: "java"
lang: "en"
category: "function"
name: "StackTraceElement.getClassLoaderName"
signature: "public String getClassLoaderName()"
title: "StackTraceElement.getClassLoaderName"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackTraceElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackTraceElement.getClassLoaderName

```java
public String getClassLoaderName()
```

Returns the name of the class loader of the class containing the
 execution point represented by this stack trace element.

**返回**

- the name of the class loader of the class containing the execution point represented by this stack trace element; `null` if the class loader is not named.

**参见**

- java.lang.ClassLoader#getName()

> *Since 9*
