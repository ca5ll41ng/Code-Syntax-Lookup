---
id: "java-en-function-cipher-updateaad"
language: "java"
lang: "en"
category: "function"
name: "Cipher.updateAAD"
signature: "public final void updateAAD(byte[] src)"
title: "Cipher.updateAAD"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Cipher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cipher.updateAAD

```java
public final void updateAAD(byte[] src)
```

Continues a multi-part update of the Additional Authentication
 Data (AAD).
 

 Calls to this method provide AAD to the `Cipher` object
 when operating in modes such as AEAD (GCM/CCM).  If this
 `Cipher` object is operating in either GCM or CCM mode, all AAD
 must be supplied before beginning operations on the ciphertext
 (via the `update` and `doFinal` methods).

**参数**

- **src** — the buffer containing the Additional Authentication Data

**异常**

- **IllegalArgumentException** — if the `src` byte array is `null`
- **IllegalStateException** — if this `Cipher` object is in a wrong state (e.g., has not been initialized, or is not in `ENCRYPT_MODE` or `DECRYPT_MODE`), does not accept AAD, or if operating in either GCM or CCM mode and one of the `update` methods has already been called for the active encryption/decryption operation
- **UnsupportedOperationException** — if the corresponding method in the `CipherSpi` has not been overridden by an implementation

> *Since 1.7*
