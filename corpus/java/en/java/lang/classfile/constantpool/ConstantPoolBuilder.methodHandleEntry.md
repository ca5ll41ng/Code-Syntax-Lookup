---
id: "java-en-function-constantpoolbuilder-methodhandleentry"
language: "java"
lang: "en"
category: "function"
name: "ConstantPoolBuilder.methodHandleEntry"
signature: "default MethodHandleEntry methodHandleEntry(DirectMethodHandleDesc descriptor)"
title: "ConstantPoolBuilder.methodHandleEntry"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPoolBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPoolBuilder.methodHandleEntry

```java
default MethodHandleEntry methodHandleEntry(DirectMethodHandleDesc descriptor)
```

{@return a `MethodHandleEntry` describing the same method handle as
 the given `DirectMethodHandleDesc`}

**参数**

- **descriptor** — the symbolic descriptor of the method handle

**参见**

- MethodHandleEntry#asSymbol() MethodHandleEntry::asSymbol
