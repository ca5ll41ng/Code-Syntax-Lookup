---
id: "java-en-function-pbeparameterspec-pbeparameterspec"
language: "java"
lang: "en"
category: "function"
name: "PBEParameterSpec.PBEParameterSpec"
signature: "public PBEParameterSpec(byte[] salt, int iterationCount)"
title: "PBEParameterSpec.PBEParameterSpec"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/PBEParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PBEParameterSpec.PBEParameterSpec

```java
public PBEParameterSpec(byte[] salt, int iterationCount)
```

Constructs a parameter set for password-based encryption as defined in
 the PKCS #5 standard.

**参数**

- **salt** — the salt. The contents of salt are copied to protect against subsequent modification.
- **iterationCount** — the iteration count.

**异常**

- **NullPointerException** — if salt is null.
