---
id: "java-en-function-signature-of"
language: "java"
lang: "en"
category: "function"
name: "Signature.of"
signature: "public static Signature of(ClassDesc classDesc)"
title: "Signature.of"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Signature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Signature.of

```java
public static Signature of(ClassDesc classDesc)
```

{@return a Java type signature from a field descriptor}  The returned
 signature represents a reifiable type (JLS {@jls 4.7}).

**参数**

- **classDesc** — the symbolic description of the Java type

**异常**

- **IllegalArgumentException** — if the field descriptor cannot be `#identifier denoted`
