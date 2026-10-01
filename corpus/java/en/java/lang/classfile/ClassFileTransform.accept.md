---
id: "java-en-function-classfiletransform-accept"
language: "java"
lang: "en"
category: "function"
name: "ClassFileTransform.accept"
signature: "void accept(B builder, E element)"
title: "ClassFileTransform.accept"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFileTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFileTransform.accept

```java
void accept(B builder, E element)
```

Transform an element by taking the appropriate actions on the builder.
 Used when transforming a classfile entity (class, method, field, method
 body.) If no transformation is desired, the element can be presented to
 `with`.  If the element is to be dropped, no
 action is required.
 

 This method is called by the Class-File API.  Users should never call
 this method.

**参数**

- **builder** — the builder for the new entity
- **element** — the element
