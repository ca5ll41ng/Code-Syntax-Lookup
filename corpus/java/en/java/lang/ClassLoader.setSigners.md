---
id: "java-en-function-classloader-setsigners"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.setSigners"
signature: "protected final void setSigners(Class<?> c, Object[] signers)"
title: "ClassLoader.setSigners"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.setSigners

```java
protected final void setSigners(Class<?> c, Object[] signers)
```

Sets the signers of a class.  This should be invoked after defining a
 class.

**参数**

- **c** — The `Class` object
- **signers** — The signers for the class

> *Since 1.1*
