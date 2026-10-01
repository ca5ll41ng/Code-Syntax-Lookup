---
id: "java-en-function-signature-parsefrom"
language: "java"
lang: "en"
category: "function"
name: "Signature.parseFrom"
signature: "public static Signature parseFrom(String javaTypeSignature)"
title: "Signature.parseFrom"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Signature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Signature.parseFrom

```java
public static Signature parseFrom(String javaTypeSignature)
```

Parses a Java type signature from a raw string.

**参数**

- **javaTypeSignature** — raw Java type signature string

**返回**

- a Java type signature

**异常**

- **IllegalArgumentException** — if the string is not a valid Java type signature string
