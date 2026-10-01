---
id: "java-en-function-rsakey-getparams"
language: "java"
lang: "en"
category: "function"
name: "RSAKey.getParams"
signature: "default AlgorithmParameterSpec getParams()"
title: "RSAKey.getParams"
directive: "method"
module: "java.base/java.security.interfaces"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/interfaces/RSAKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RSAKey.getParams

```java
default AlgorithmParameterSpec getParams()
```

Returns the parameters associated with this key.
 The parameters are optional and may be either
 explicitly specified or implicitly created during
 key pair generation.

 The default implementation returns `null`.

**返回**

- the associated parameters, may be null

> *Since 11*
