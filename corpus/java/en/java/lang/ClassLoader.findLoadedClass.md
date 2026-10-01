---
id: "java-en-function-classloader-findloadedclass"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.findLoadedClass"
signature: "protected final Class<?> findLoadedClass(String name)"
title: "ClassLoader.findLoadedClass"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.findLoadedClass

```java
protected final Class<?> findLoadedClass(String name)
```

Returns the class with the given binary name if this
 loader has been recorded by the Java virtual machine as an initiating
 loader of a class with that binary name.  Otherwise
 `null` is returned.

**参数**

- **name** — The binary name of the class

**返回**

- The `Class` object, or `null` if the class has not been loaded

> *Since 1.1*
