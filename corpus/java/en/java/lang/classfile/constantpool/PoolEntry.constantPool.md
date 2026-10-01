---
id: "java-en-function-poolentry-constantpool"
language: "java"
lang: "en"
category: "function"
name: "PoolEntry.constantPool"
signature: "ConstantPool constantPool()"
title: "PoolEntry.constantPool"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/PoolEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PoolEntry.constantPool

```java
ConstantPool constantPool()
```

{@return the constant pool this entry is from}

 Given a `ConstantPoolBuilder` `builder` and a `PoolEntry entry`, use `canWriteDirect
 builder.canWriteDirect` instead of object equality
 of the constant pool to determine if an entry belongs to the builder.

**参见**

- ##unbound Unbound Constant Pool Entries
