---
id: "java-en-function-constantpoolbuilder-classentry"
language: "java"
lang: "en"
category: "function"
name: "ConstantPoolBuilder.classEntry"
signature: "ClassEntry classEntry(Utf8Entry ne)"
title: "ConstantPoolBuilder.classEntry"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPoolBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPoolBuilder.classEntry

```java
ClassEntry classEntry(Utf8Entry ne)
```

{@return a `ClassEntry` referring to the provided `Utf8Entry`}  The `Utf8Entry` describes the internal form
 of the binary name of a class or interface or the field descriptor
 string of an array type.

**参数**

- **ne** — the `Utf8Entry`

**参见**

- ClassEntry#name() ClassEntry::name
