---
id: "java-en-function-secureclassloader-defineclass"
language: "java"
lang: "en"
category: "function"
name: "SecureClassLoader.defineClass"
signature: "protected final Class<?> defineClass(String name, byte[] b, int off, int len, CodeSource cs)"
title: "SecureClassLoader.defineClass"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureClassLoader.defineClass

```java
protected final Class<?> defineClass(String name, byte[] b, int off, int len, CodeSource cs)
```

Converts an array of bytes into an instance of class `Class`,
 with an optional CodeSource. Before the
 class can be used it must be resolved.
 

 If a non-null CodeSource is supplied a ProtectionDomain is
 constructed and associated with the class being defined.

**参数**

- **name** — the expected name of the class, or `null` if not known, using '.' and not '/' as the separator and without a trailing ".class" suffix.
- **b** — the bytes that make up the class data. The bytes in positions `off` through `off+len-1` should have the format of a valid class file as defined by The Java Virtual Machine Specification.
- **off** — the start offset in `b` of the class data
- **len** — the length of the class data
- **cs** — the associated CodeSource, or `null` if none

**返回**

- the `Class` object created from the data, and optional CodeSource.

**异常**

- **ClassFormatError** — if the data did not contain a valid class
- **IndexOutOfBoundsException** — if either `off` or `len` is negative, or if `off+len` is greater than `b.length`.
- **SecurityException** — if an attempt is made to add this class to a package that contains classes that were signed by a different set of certificates than this class, or if the class name begins with "java.".
