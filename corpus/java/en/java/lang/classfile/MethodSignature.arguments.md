---
id: "java-en-function-methodsignature-arguments"
language: "java"
lang: "en"
category: "function"
name: "MethodSignature.arguments"
signature: "List<Signature> arguments()"
title: "MethodSignature.arguments"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/MethodSignature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodSignature.arguments

```java
List<Signature> arguments()
```

{@return the signatures of the parameters of this method or constructor,
 may be empty}  The parameters may differ from those in the method
 descriptor because some synthetic or implicit parameters are omitted.

**参见**

- Executable#getGenericParameterTypes()
