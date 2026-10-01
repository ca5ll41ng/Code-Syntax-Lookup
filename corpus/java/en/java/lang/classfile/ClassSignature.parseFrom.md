---
id: "java-en-function-classsignature-parsefrom"
language: "java"
lang: "en"
category: "function"
name: "ClassSignature.parseFrom"
signature: "public static ClassSignature parseFrom(String classSignature)"
title: "ClassSignature.parseFrom"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassSignature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassSignature.parseFrom

```java
public static ClassSignature parseFrom(String classSignature)
```

Parses a raw class signature string into a `Signature`.

**参数**

- **classSignature** — the raw class signature string

**返回**

- class signature

**异常**

- **IllegalArgumentException** — if the string is not a valid class signature string
