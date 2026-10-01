---
id: "java-en-function-securerandomspi-enginenextbytes"
language: "java"
lang: "en"
category: "function"
name: "SecureRandomSpi.engineNextBytes"
signature: "protected abstract void engineNextBytes(byte[] bytes)"
title: "SecureRandomSpi.engineNextBytes"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureRandomSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureRandomSpi.engineNextBytes

```java
protected abstract void engineNextBytes(byte[] bytes)
```

Generates a user-specified number of random bytes.
 

 Some random number generators can only generate a limited amount
 of random bytes per invocation. If the size of `bytes`
 is greater than this limit, the implementation should invoke
 its generation process multiple times to completely fill the
 buffer before returning from this method.

**参数**

- **bytes** — the array to be filled in with random bytes.
