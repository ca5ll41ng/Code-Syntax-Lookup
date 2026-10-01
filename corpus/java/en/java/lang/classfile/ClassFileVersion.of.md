---
id: "java-en-function-classfileversion-of"
language: "java"
lang: "en"
category: "function"
name: "ClassFileVersion.of"
signature: "static ClassFileVersion of(int majorVersion, int minorVersion)"
title: "ClassFileVersion.of"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFileVersion.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFileVersion.of

```java
static ClassFileVersion of(int majorVersion, int minorVersion)
```

{@return a `ClassFileVersion` element}  The minor version number
 may be `-1` to represent `ClassFile#PREVIEW_MINOR_VERSION`.

**参数**

- **majorVersion** — the major version
- **minorVersion** — the minor version

**异常**

- **IllegalArgumentException** — if the major version or the minor version is not `#u2 u2`; the minor version may be `-1`
