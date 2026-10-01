---
id: "java-en-function-classfilebuilder-transform"
language: "java"
lang: "en"
category: "function"
name: "ClassFileBuilder.transform"
signature: "default B transform(CompoundElement<E> model, ClassFileTransform<?, E, B> transform)"
title: "ClassFileBuilder.transform"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFileBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFileBuilder.transform

```java
default B transform(CompoundElement<E> model, ClassFileTransform<?, E, B> transform)
```

Applies a transform to a compound structure, directing results to this
 builder.
 

 The transform will receive each element of the compound structure, as
 well as this builder for building the structure.  The transform is free
 to preserve, remove, or replace elements as it sees fit.
 

 A builder can run multiple transforms against different compound
 structures, integrating member elements of different origins.

 Many subinterfaces have methods like `transformMethod`
 or `transformCode`.  However, calling them is
 fundamentally different from calling this method: those methods call the
 `transform` on the child builders instead of on itself.  For
 example, `classBuilder.transformMethod` calls `methodBuilder.transform` with a new method builder instead of calling
 `classBuilder.transform` on itself.

**参数**

- **model** — the structure to transform
- **transform** — the transform to apply

**返回**

- this builder

**参见**

- ClassFileTransform
