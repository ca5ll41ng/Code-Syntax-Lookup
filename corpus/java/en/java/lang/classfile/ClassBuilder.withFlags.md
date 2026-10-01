---
id: "java-en-function-classbuilder-withflags"
language: "java"
lang: "en"
category: "function"
name: "ClassBuilder.withFlags"
signature: "default ClassBuilder withFlags(int flags)"
title: "ClassBuilder.withFlags"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassBuilder.withFlags

```java
default ClassBuilder withFlags(int flags)
```

Sets the access flags of this class.

**参数**

- **flags** — the access flags, as a bit mask

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `flags` is not `#u2 u2`

**参见**

- AccessFlags
- AccessFlag.Location#CLASS
