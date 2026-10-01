---
id: "java-en-function-methodbuilder-withflags"
language: "java"
lang: "en"
category: "function"
name: "MethodBuilder.withFlags"
signature: "default MethodBuilder withFlags(int flags)"
title: "MethodBuilder.withFlags"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/MethodBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodBuilder.withFlags

```java
default MethodBuilder withFlags(int flags)
```

Sets the method access flags.  The `STATIC` flag cannot
 be modified after the builder is created.

**参数**

- **flags** — the access flags, as a bit mask

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `flags` is not `#u2 u2`, or the `ACC_STATIC ACC_STATIC` flag is modified

**参见**

- AccessFlags
- AccessFlag.Location#METHOD
