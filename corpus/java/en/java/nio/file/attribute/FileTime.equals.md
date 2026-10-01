---
id: "java-en-function-filetime-equals"
language: "java"
lang: "en"
category: "function"
name: "FileTime.equals"
signature: "public boolean equals(Object obj)"
title: "FileTime.equals"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/FileTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileTime.equals

```java
public boolean equals(Object obj)
```

Tests this `FileTime` for equality with the given object.

 

 The result is `true` if and only if the argument is not `null` and is a `FileTime` that represents the same time. This
 method satisfies the general contract of the `Object.equals` method.

**参数**

- **obj** — the object to compare with

**返回**

- `true` if, and only if, the given object is a `FileTime` that represents the same time
