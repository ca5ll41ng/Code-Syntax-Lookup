---
id: "java-en-function-methodbuilder-transformcode"
language: "java"
lang: "en"
category: "function"
name: "MethodBuilder.transformCode"
signature: "MethodBuilder transformCode(CodeModel code, CodeTransform transform)"
title: "MethodBuilder.transformCode"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/MethodBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodBuilder.transformCode

```java
MethodBuilder transformCode(CodeModel code, CodeTransform transform)
```

Build the method body for this method by transforming the body of another
 method.
 

 This method behaves as if:
 {@snippet lang=java :
 withCode(cob -> cob.transform(code, transform));
 }

**参数**

- **code** — the method body to be transformed
- **transform** — the transform to apply to the method body

**返回**

- this builder

**参见**

- CodeTransform
