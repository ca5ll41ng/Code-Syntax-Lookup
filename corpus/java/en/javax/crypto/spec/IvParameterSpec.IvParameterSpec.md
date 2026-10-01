---
id: "java-en-function-ivparameterspec-ivparameterspec"
language: "java"
lang: "en"
category: "function"
name: "IvParameterSpec.IvParameterSpec"
signature: "public IvParameterSpec(byte[] iv)"
title: "IvParameterSpec.IvParameterSpec"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/IvParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IvParameterSpec.IvParameterSpec

```java
public IvParameterSpec(byte[] iv)
```

Creates an IvParameterSpec object using the bytes in iv
 as the IV.

**参数**

- **iv** — the buffer with the IV. The contents of the buffer are copied to protect against subsequent modification.

**异常**

- **NullPointerException** — if `iv` is `null`
