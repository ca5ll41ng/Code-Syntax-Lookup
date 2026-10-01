---
id: "java-en-function-classfile-verify"
language: "java"
lang: "en"
category: "function"
name: "ClassFile.verify"
signature: "List<VerifyError> verify(ClassModel model)"
title: "ClassFile.verify"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFile.verify

```java
List<VerifyError> verify(ClassModel model)
```

Verify a `class` file.  All verification errors found will be returned.

**参数**

- **model** — the class model to verify

**返回**

- a list of verification errors, or an empty list if no error is found
