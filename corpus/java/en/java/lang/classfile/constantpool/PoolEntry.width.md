---
id: "java-en-function-poolentry-width"
language: "java"
lang: "en"
category: "function"
name: "PoolEntry.width"
signature: "int width()"
title: "PoolEntry.width"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/PoolEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PoolEntry.width

```java
int width()
```

{@return the number of constant pool slots this entry consumes}
 

 All pool entries except `LongEntry CONSTANT_Long` and `DoubleEntry CONSTANT_Double` have width `1`. These two exceptions
 have width `2`, and their subsequent indices at `index()
 index() + 1` are considered unusable.

 If this entry is `LoadableConstantEntry loadable`, the width
 of this entry does not decide if this entry should be loaded with `LDC ldc` or `LDC2_W ldc2_w`.  For example, `ConstantDynamicEntry` always has width `1`, but it must be loaded
 with `ldc2_w` if its `typeKind()
 type` is `LONG long` or `DOUBLE double`.
 Use `typeKind` to
 determine the loading instruction instead.

**参见**

- ConstantPool##index Index in the Constant Pool
