---
id: "java-en-function-cipherspi-enginesetpadding"
language: "java"
lang: "en"
category: "function"
name: "CipherSpi.engineSetPadding"
signature: "protected abstract void engineSetPadding(String padding) throws NoSuchPaddingException"
title: "CipherSpi.engineSetPadding"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherSpi.engineSetPadding

```java
protected abstract void engineSetPadding(String padding) throws NoSuchPaddingException
```

Sets the padding mechanism of this cipher.

**参数**

- **padding** — the padding mechanism

**异常**

- **NoSuchPaddingException** — if the requested padding mechanism does not exist
