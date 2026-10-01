---
id: "java-en-function-securerandomspi-enginegenerateseed"
language: "java"
lang: "en"
category: "function"
name: "SecureRandomSpi.engineGenerateSeed"
signature: "protected abstract byte[] engineGenerateSeed(int numBytes)"
title: "SecureRandomSpi.engineGenerateSeed"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureRandomSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureRandomSpi.engineGenerateSeed

```java
protected abstract byte[] engineGenerateSeed(int numBytes)
```

Returns the given number of seed bytes.  This call may be used to
 seed other random number generators.

**参数**

- **numBytes** — the number of seed bytes to generate.

**返回**

- the seed bytes.
