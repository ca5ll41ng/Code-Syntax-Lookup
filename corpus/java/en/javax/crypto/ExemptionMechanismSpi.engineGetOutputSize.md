---
id: "java-en-function-exemptionmechanismspi-enginegetoutputsize"
language: "java"
lang: "en"
category: "function"
name: "ExemptionMechanismSpi.engineGetOutputSize"
signature: "protected abstract int engineGetOutputSize(int inputLen)"
title: "ExemptionMechanismSpi.engineGetOutputSize"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/ExemptionMechanismSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExemptionMechanismSpi.engineGetOutputSize

```java
protected abstract int engineGetOutputSize(int inputLen)
```

Returns the length in bytes that an output buffer would need to be in
 order to hold the result of the next
 `engineGenExemptionBlob(byte[], int) engineGenExemptionBlob`
 operation, given the input length `inputLen` (in bytes).

 

The actual output length of the next
 `engineGenExemptionBlob(byte[], int) engineGenExemptionBlob`
 call may be smaller than the length returned by this method.

**参数**

- **inputLen** — the input length (in bytes)

**返回**

- the required output buffer size (in bytes)
