---
id: "java-en-function-gcmparameterspec-gcmparameterspec"
language: "java"
lang: "en"
category: "function"
name: "GCMParameterSpec.GCMParameterSpec"
signature: "public GCMParameterSpec(int tLen, byte[] src)"
title: "GCMParameterSpec.GCMParameterSpec"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/GCMParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GCMParameterSpec.GCMParameterSpec

```java
public GCMParameterSpec(int tLen, byte[] src)
```

Constructs a GCMParameterSpec using the specified authentication
 tag bit-length and IV buffer.

**参数**

- **tLen** — the authentication tag length (in bits)
- **src** — the IV source buffer.  The contents of the buffer are copied to protect against subsequent modification.

**异常**

- **IllegalArgumentException** — if `tLen` is negative, or `src` is null.
