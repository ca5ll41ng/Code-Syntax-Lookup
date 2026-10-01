---
id: "java-en-function-constantpoolbuilder-canwritedirect"
language: "java"
lang: "en"
category: "function"
name: "ConstantPoolBuilder.canWriteDirect"
signature: "boolean canWriteDirect(ConstantPool constantPool)"
title: "ConstantPoolBuilder.canWriteDirect"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPoolBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPoolBuilder.canWriteDirect

```java
boolean canWriteDirect(ConstantPool constantPool)
```

{@return `true` if the index of any entry in the given constant
 pool refers to the same entry in this builder}  This may be because they
 are the same builder, or because this builder was `of(ClassModel) pre-populated` from the given constant pool.
 

 If the constant pool of an entry is not directly writable to this pool,
 it is alien to this pool, and a `ClassFileBuilder` associated
 with this constant pool will convert that alien constant pool entry.

**参数**

- **constantPool** — the given constant pool

**参见**

- ClassFileBuilder#constantPool() ClassFileBuilder::constantPool
- ##alien Alien Constant Pool Entries
