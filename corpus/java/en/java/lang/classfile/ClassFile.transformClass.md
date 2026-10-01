---
id: "java-en-function-classfile-transformclass"
language: "java"
lang: "en"
category: "function"
name: "ClassFile.transformClass"
signature: "default byte[] transformClass(ClassModel model, ClassTransform transform)"
title: "ClassFile.transformClass"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFile.transformClass

```java
default byte[] transformClass(ClassModel model, ClassTransform transform)
```

Transform one `class` file into a new `class` file according
 to a `ClassTransform`.  The transform will receive each element of
 this class, as well as a `ClassBuilder` for building the new class.
 The transform is free to preserve, remove, or replace elements as it
 sees fit.
 

 This method behaves as if:
 {@snippet lang=java :
 ConstantPoolBuilder cpb = null; // @replace substring=null; replacement=...
 this.build(model.thisClass(), cpb,
            clb -> clb.transform(model, transform));
 }
 where `cpb` is determined by `ConstantPoolSharingOption`.

 This is named `transformClass` instead of `transform` for
 consistency with `transformField`, `transformMethod`, and `transformCode`,
 and to distinguish from `transform`, which is
 more generic and powerful.

**参数**

- **model** — the class model to transform
- **transform** — the transform

**返回**

- the bytes of the new class

**异常**

- **IllegalArgumentException** — if building encounters a failure

**参见**

- ConstantPoolSharingOption
