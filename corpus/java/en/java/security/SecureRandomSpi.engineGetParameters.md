---
id: "java-en-function-securerandomspi-enginegetparameters"
language: "java"
lang: "en"
category: "function"
name: "SecureRandomSpi.engineGetParameters"
signature: "protected SecureRandomParameters engineGetParameters()"
title: "SecureRandomSpi.engineGetParameters"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureRandomSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureRandomSpi.engineGetParameters

```java
protected SecureRandomParameters engineGetParameters()
```

Returns the effective `SecureRandomParameters` for this
 `SecureRandom` instance.

**返回**

- the effective `SecureRandomParameters` parameters, or `null` if no parameters were used.

> *Since 9*
