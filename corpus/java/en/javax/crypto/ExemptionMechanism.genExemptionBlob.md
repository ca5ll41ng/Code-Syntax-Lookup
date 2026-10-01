---
id: "java-en-function-exemptionmechanism-genexemptionblob"
language: "java"
lang: "en"
category: "function"
name: "ExemptionMechanism.genExemptionBlob"
signature: "public final byte[] genExemptionBlob() throws IllegalStateException, ExemptionMechanismException"
title: "ExemptionMechanism.genExemptionBlob"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/ExemptionMechanism.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExemptionMechanism.genExemptionBlob

```java
public final byte[] genExemptionBlob() throws IllegalStateException, ExemptionMechanismException
```

Generates the exemption mechanism key blob.

**返回**

- the new buffer with the result key blob.

**异常**

- **IllegalStateException** — if this exemption mechanism is in a wrong state (e.g., has not been initialized).
- **ExemptionMechanismException** — if problem(s) encountered in the process of generating.
