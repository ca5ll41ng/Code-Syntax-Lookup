---
id: "java-en-function-filepermission-equals"
language: "java"
lang: "en"
category: "function"
name: "FilePermission.equals"
signature: "public boolean equals(Object obj)"
title: "FilePermission.equals"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilePermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilePermission.equals

```java
public boolean equals(Object obj)
```

Checks two FilePermission objects for equality. Checks that obj is
 a FilePermission, and has the same pathname and actions as this object.

 they have the same wildcard flag and their `cpath`
 (if `jdk.io.permissionsUseCanonicalPath` is `true`) or
 `npath` (if `jdk.io.permissionsUseCanonicalPath`
 is `false`) are equal. Or they are both "<>".
 

 When `jdk.io.permissionsUseCanonicalPath` is `false`, an
 invalid `FilePermission` does not equal to any object except
 for itself, even if they are created using the same invalid path.

**参数**

- **obj** — the object we are testing for equality with this object.

**返回**

- `true` if obj is a FilePermission, and has the same pathname and actions as this FilePermission object, `false` otherwise.
