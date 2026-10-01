---
id: "java-en-function-classloader-resolveclass"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.resolveClass"
signature: "protected final void resolveClass(Class<?> c)"
title: "ClassLoader.resolveClass"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.resolveClass

```java
protected final void resolveClass(Class<?> c)
```

Links the specified class.  This (misleadingly named) method may be
 used by a class loader to link a class.  If the class `c` has
 already been linked, then this method simply returns. Otherwise, the
 class is linked as described in the "Execution" chapter of
 The Java Language Specification.

**参数**

- **c** — The class to link

**异常**

- **NullPointerException** — If `c` is `null`.

**参见**

- #defineClass(String, byte[], int, int)
