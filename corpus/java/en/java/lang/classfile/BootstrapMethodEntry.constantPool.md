---
id: "java-en-function-bootstrapmethodentry-constantpool"
language: "java"
lang: "en"
category: "function"
name: "BootstrapMethodEntry.constantPool"
signature: "ConstantPool constantPool()"
title: "BootstrapMethodEntry.constantPool"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/BootstrapMethodEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BootstrapMethodEntry.constantPool

```java
ConstantPool constantPool()
```

{@return the constant pool associated with this entry}

 Given a `ConstantPoolBuilder` `builder` and a `BootstrapMethodEntry` `entry`, use `canWriteDirect
 builder.canWriteDirect` instead of object equality
 of the constant pool to determine if an entry is compatible.
