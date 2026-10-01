---
id: "java-en-function-constantpoolbuilder-of"
language: "java"
lang: "en"
category: "function"
name: "ConstantPoolBuilder.of"
signature: "static ConstantPoolBuilder of(ClassModel classModel)"
title: "ConstantPoolBuilder.of"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPoolBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPoolBuilder.of

```java
static ConstantPoolBuilder of(ClassModel classModel)
```

{@return a new constant pool builder}  The new constant pool builder will
 be pre-populated with the contents of the constant pool `constantPool() associated with` the given class model.  The
 index of new entries will start from the `size()
 size` of the source pool.

**参数**

- **classModel** — the class to copy from

**参见**

- ClassFile#build(ClassEntry, ConstantPoolBuilder, Consumer)
- ClassFile.ConstantPoolSharingOption#SHARED_POOL
