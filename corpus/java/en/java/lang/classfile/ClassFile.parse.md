---
id: "java-en-function-classfile-parse"
language: "java"
lang: "en"
category: "function"
name: "ClassFile.parse"
signature: "ClassModel parse(byte[] bytes)"
title: "ClassFile.parse"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFile.parse

```java
ClassModel parse(byte[] bytes)
```

Parses a `class` file into a `ClassModel`.
 

 Due to the on-demand nature of `class` file parsing, an `IllegalArgumentException` may be thrown on any accessor method invocation
 on the returned model or any structure returned by the accessors in the
 structure hierarchy.

**参数**

- **bytes** — the bytes of the `class` file

**返回**

- the class model

**异常**

- **IllegalArgumentException** — if the `class` file is malformed or of a version `latestMajorVersion() not supported` by the current runtime
