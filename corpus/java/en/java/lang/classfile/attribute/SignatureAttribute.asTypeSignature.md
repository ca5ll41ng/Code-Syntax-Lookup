---
id: "java-en-function-signatureattribute-astypesignature"
language: "java"
lang: "en"
category: "function"
name: "SignatureAttribute.asTypeSignature"
signature: "default Signature asTypeSignature()"
title: "SignatureAttribute.asTypeSignature"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/SignatureAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SignatureAttribute.asTypeSignature

```java
default Signature asTypeSignature()
```

Parses the signature string as a Java type signature.

**返回**

- the type signature

**异常**

- **IllegalArgumentException** — if the signature string is not a valid Java type signature string

**参见**

- Field#getGenericType()
- RecordComponent#getGenericType()
