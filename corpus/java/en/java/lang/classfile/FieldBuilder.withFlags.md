---
id: "java-en-function-fieldbuilder-withflags"
language: "java"
lang: "en"
category: "function"
name: "FieldBuilder.withFlags"
signature: "default FieldBuilder withFlags(int flags)"
title: "FieldBuilder.withFlags"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/FieldBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FieldBuilder.withFlags

```java
default FieldBuilder withFlags(int flags)
```

Sets the field access flags.

**参数**

- **flags** — the access flags, as a bit mask

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `flags` is not `#u2 u2`

**参见**

- AccessFlags
- AccessFlag.Location#FIELD
- ClassBuilder#withField(String, ClassDesc, int)
