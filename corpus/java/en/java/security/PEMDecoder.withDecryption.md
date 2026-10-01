---
id: "java-en-function-pemdecoder-withdecryption"
language: "java"
lang: "en"
category: "function"
name: "PEMDecoder.withDecryption"
signature: "public PEMDecoder withDecryption(char[] password)"
title: "PEMDecoder.withDecryption"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PEMDecoder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PEMDecoder.withDecryption

```java
public PEMDecoder withDecryption(char[] password)
```

Returns a copy of this `PEMDecoder` that decodes and decrypts
 encrypted private keys using the specified password.
 Unencrypted PEM can also be decoded by the returned instance.

**参数**

- **password** — the password to decrypt the encrypted PEM data. This array is cloned and stored in the new instance.

**返回**

- a new `PEMDecoder` instance configured for decryption

**异常**

- **NullPointerException** — if `password` is `null`
