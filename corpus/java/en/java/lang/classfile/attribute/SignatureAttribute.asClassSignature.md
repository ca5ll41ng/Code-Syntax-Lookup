---
id: "java-en-function-signatureattribute-asclasssignature"
language: "java"
lang: "en"
category: "function"
name: "SignatureAttribute.asClassSignature"
signature: "default ClassSignature asClassSignature()"
title: "SignatureAttribute.asClassSignature"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/SignatureAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SignatureAttribute.asClassSignature

```java
default ClassSignature asClassSignature()
```

Parses the signature string as a class signature.

**返回**

- the class signature

**异常**

- **IllegalArgumentException** — if the signature string is not a valid class signature string
