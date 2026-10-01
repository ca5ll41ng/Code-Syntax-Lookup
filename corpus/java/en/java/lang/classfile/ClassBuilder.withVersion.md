---
id: "java-en-function-classbuilder-withversion"
language: "java"
lang: "en"
category: "function"
name: "ClassBuilder.withVersion"
signature: "default ClassBuilder withVersion(int major, int minor)"
title: "ClassBuilder.withVersion"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassBuilder.withVersion

```java
default ClassBuilder withVersion(int major, int minor)
```

Sets the version of this class.

**参数**

- **major** — the major version number
- **minor** — the minor version number

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `major` or `minor` is not `#u2 u2`; `minor` may be `-1` to indicate `ClassFile#PREVIEW_MINOR_VERSION`

**参见**

- ClassFileVersion
