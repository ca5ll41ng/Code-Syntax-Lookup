---
id: "java-en-function-classbuilder-transformmethod"
language: "java"
lang: "en"
category: "function"
name: "ClassBuilder.transformMethod"
signature: "ClassBuilder transformMethod(MethodModel method, MethodTransform transform)"
title: "ClassBuilder.transformMethod"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassBuilder.transformMethod

```java
ClassBuilder transformMethod(MethodModel method, MethodTransform transform)
```

Adds a method by transforming a method from another class.  The transform
 cannot modify the `ACC_STATIC ACC_STATIC` flag of the
 original method.
 

 This method behaves as if:
 {@snippet lang=java :
 // @link substring=withMethod target="#withMethod(Utf8Entry, Utf8Entry, int, Consumer)" :
 withMethod(method.methodName(), method.methodType(), method.flags().flagMask(),
            mb -> mb.transform(method, transform)) // @link regex="transform(?=\()" target="MethodBuilder#transform"
 }

**参数**

- **method** — the method to be transformed
- **transform** — the transform to apply to the method

**返回**

- this builder

**参见**

- MethodTransform
