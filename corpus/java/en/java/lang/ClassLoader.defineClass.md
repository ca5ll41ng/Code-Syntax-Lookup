---
id: "java-en-function-classloader-defineclass"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.defineClass"
signature: "protected final Class<?> defineClass(byte[] b, int off, int len) throws ClassFormatError"
title: "ClassLoader.defineClass"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.defineClass

```java
protected final Class<?> defineClass(byte[] b, int off, int len) throws ClassFormatError
```

Converts an array of bytes into an instance of class `Class`.
 Before the `Class` can be used it must be resolved.  This method
 is deprecated in favor of the version that takes a binary name as its first argument, and is more secure.

**参数**

- **b** — The bytes that make up the class data.  The bytes in positions `off` through `off+len-1` should have the format of a valid class file as defined by The Java Virtual Machine Specification.
- **off** — The start offset in `b` of the class data
- **len** — The length of the class data

**返回**

- The `Class` object that was created from the specified class data

**异常**

- **ClassFormatError** — If the data did not contain a valid class
- **IndexOutOfBoundsException** — If either `off` or `len` is negative, or if `off+len` is greater than `b.length`.
- **SecurityException** — If an attempt is made to add this class to a package that contains classes that were signed by a different set of certificates than this class, or if an attempt is made to define a class in a package with a fully-qualified name that starts with "`java.`".

**参见**

- #loadClass(String, boolean)
- #resolveClass(Class)

> **⚠ Deprecated** — Replaced by `defineClass(String, byte[], int, int) defineClass`
