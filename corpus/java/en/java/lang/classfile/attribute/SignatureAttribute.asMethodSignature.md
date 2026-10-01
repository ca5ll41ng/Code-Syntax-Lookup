---
id: "java-en-function-signatureattribute-asmethodsignature"
language: "java"
lang: "en"
category: "function"
name: "SignatureAttribute.asMethodSignature"
signature: "default MethodSignature asMethodSignature()"
title: "SignatureAttribute.asMethodSignature"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/SignatureAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SignatureAttribute.asMethodSignature

```java
default MethodSignature asMethodSignature()
```

Parse the signature string as a method signature.

**返回**

- the method signature

**异常**

- **IllegalArgumentException** — if the signature string is not a valid method signature string
