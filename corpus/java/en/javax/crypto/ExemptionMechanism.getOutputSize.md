---
id: "java-en-function-exemptionmechanism-getoutputsize"
language: "java"
lang: "en"
category: "function"
name: "ExemptionMechanism.getOutputSize"
signature: "public final int getOutputSize(int inputLen) throws IllegalStateException"
title: "ExemptionMechanism.getOutputSize"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/ExemptionMechanism.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExemptionMechanism.getOutputSize

```java
public final int getOutputSize(int inputLen) throws IllegalStateException
```

Returns the length in bytes that an output buffer would need to be in
 order to hold the result of the next
 `genExemptionBlob(byte[]) genExemptionBlob`
 operation, given the input length `inputLen` (in bytes).

 

The actual output length of the next
 `genExemptionBlob(byte[]) genExemptionBlob`
 call may be smaller than the length returned by this method.

**参数**

- **inputLen** — the input length (in bytes)

**返回**

- the required output buffer size (in bytes)

**异常**

- **IllegalStateException** — if this exemption mechanism is in a wrong state (e.g., has not yet been initialized)
