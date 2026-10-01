---
id: "java-en-function-securerandom-getparameters"
language: "java"
lang: "en"
category: "function"
name: "SecureRandom.getParameters"
signature: "public SecureRandomParameters getParameters()"
title: "SecureRandom.getParameters"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureRandom.getParameters

```java
public SecureRandomParameters getParameters()
```

Returns the effective `SecureRandomParameters` for this
 `SecureRandom` instance.
 

 The returned value can be different from the
 `SecureRandomParameters` object passed into a `getInstance`
 method, but it cannot change during the lifetime of this
 `SecureRandom` object.
 

 A caller can use the returned value to find out what features this
 `SecureRandom` supports.

**返回**

- the effective `SecureRandomParameters` parameters, or `null` if no parameters were used.

**参见**

- SecureRandomSpi

> *Since 9*
