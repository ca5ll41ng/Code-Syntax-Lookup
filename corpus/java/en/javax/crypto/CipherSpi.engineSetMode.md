---
id: "java-en-function-cipherspi-enginesetmode"
language: "java"
lang: "en"
category: "function"
name: "CipherSpi.engineSetMode"
signature: "protected abstract void engineSetMode(String mode) throws NoSuchAlgorithmException"
title: "CipherSpi.engineSetMode"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherSpi.engineSetMode

```java
protected abstract void engineSetMode(String mode) throws NoSuchAlgorithmException
```

Sets the mode of this cipher.

**参数**

- **mode** — the cipher mode

**异常**

- **NoSuchAlgorithmException** — if the requested cipher mode does not exist
