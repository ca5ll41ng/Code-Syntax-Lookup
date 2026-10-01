---
id: "java-en-function-path-equals"
language: "java"
lang: "en"
category: "function"
name: "Path.equals"
signature: "boolean equals(Object other)"
title: "Path.equals"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.equals

```java
boolean equals(Object other)
```

Tests this path for equality with the given object.

 

 If the given object is not a Path, or is a Path associated with a
 different `FileSystem`, then this method returns `false`.

 

 Whether or not two path are equal depends on the file system
 implementation. In some cases the paths are compared without regard
 to case, and others are case sensitive. This method does not access the
 file system and the file is not required to exist. Where required, the
 `isSameFile isSameFile` method may be used to check if two
 paths locate the same file.

 

 This method satisfies the general contract of the `equals(Object) Object.equals` method.

**参数**

- **other** — the object to which this object is to be compared

**返回**

- `true` if, and only if, the given object is a `Path` that is identical to this `Path`
