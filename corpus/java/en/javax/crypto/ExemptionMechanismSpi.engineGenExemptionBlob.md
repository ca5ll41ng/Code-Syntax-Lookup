---
id: "java-en-function-exemptionmechanismspi-enginegenexemptionblob"
language: "java"
lang: "en"
category: "function"
name: "ExemptionMechanismSpi.engineGenExemptionBlob"
signature: "protected abstract byte[] engineGenExemptionBlob() throws ExemptionMechanismException"
title: "ExemptionMechanismSpi.engineGenExemptionBlob"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/ExemptionMechanismSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExemptionMechanismSpi.engineGenExemptionBlob

```java
protected abstract byte[] engineGenExemptionBlob() throws ExemptionMechanismException
```

Generates the exemption mechanism key blob.

**返回**

- the new buffer with the result key blob.

**异常**

- **ExemptionMechanismException** — if problem(s) encountered in the process of generating.
