---
id: "java-en-function-classfiletransform-andthen"
language: "java"
lang: "en"
category: "function"
name: "ClassFileTransform.andThen"
signature: "C andThen(C next)"
title: "ClassFileTransform.andThen"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFileTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFileTransform.andThen

```java
C andThen(C next)
```

Chain this transform with another; elements presented to the builder of
 this transform will become the input to the next transform.
 

 This method is implemented by the Class-File API.  Users usually don't
 have sufficient access to Class-File API functionalities to override this
 method correctly for generic downstream transforms.

**参数**

- **next** — the downstream transform

**返回**

- the chained transform
