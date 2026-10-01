---
id: "java-en-function-securerandomspi-enginereseed"
language: "java"
lang: "en"
category: "function"
name: "SecureRandomSpi.engineReseed"
signature: "protected void engineReseed(SecureRandomParameters params)"
title: "SecureRandomSpi.engineReseed"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureRandomSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureRandomSpi.engineReseed

```java
protected void engineReseed(SecureRandomParameters params)
```

Reseeds this random object with entropy input read from its
 entropy source with additional parameters.
 

 If this method is called by `reseed`,
 `params` will be `null`.
 

 Do not override this method if the implementation does not
 support reseeding.

           an `UnsupportedOperationException`.

**参数**

- **params** — extra parameters, can be `null`.

**异常**

- **UnsupportedOperationException** — if the implementation has not overridden this method
- **IllegalArgumentException** — if `params` is illegal or unsupported by this `SecureRandom`

> *Since 9*
