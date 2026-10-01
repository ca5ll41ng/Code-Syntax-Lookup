---
id: "java-en-function-macspi-enginedofinal"
language: "java"
lang: "en"
category: "function"
name: "MacSpi.engineDoFinal"
signature: "protected abstract byte[] engineDoFinal()"
title: "MacSpi.engineDoFinal"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/MacSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MacSpi.engineDoFinal

```java
protected abstract byte[] engineDoFinal()
```

Completes the MAC computation and resets the MAC for further use,
 maintaining the secret key that the MAC was initialized with.

**返回**

- the MAC result.
