---
id: "java-en-function-cipherspi-engineupdateaad"
language: "java"
lang: "en"
category: "function"
name: "CipherSpi.engineUpdateAAD"
signature: "protected void engineUpdateAAD(byte[] src, int offset, int len)"
title: "CipherSpi.engineUpdateAAD"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherSpi.engineUpdateAAD

```java
protected void engineUpdateAAD(byte[] src, int offset, int len)
```

Continues a multipart update of the Additional Authentication
 Data (AAD), using a subset of the provided buffer.
 

 Calls to this method provide AAD to the cipher when operating in
 modes such as AEAD (GCM or CCM).  If this cipher is operating in
 either GCM or CCM mode, all AAD must be supplied before beginning
 operations on the ciphertext (via the `update` and
 `doFinal` methods).

**参数**

- **src** — the buffer containing the AAD
- **offset** — the offset in `src` where the AAD input starts
- **len** — the number of AAD bytes

**异常**

- **IllegalStateException** — if this `CipherSpi` object is in a wrong state (e.g., has not been initialized), does not accept AAD, or if operating in either GCM or CCM mode and one of the `update` methods has already been called for the active encryption/decryption operation
- **UnsupportedOperationException** — if this method has not been overridden by an implementation

> *Since 1.7*
