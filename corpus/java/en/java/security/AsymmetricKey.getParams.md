---
id: "java-en-function-asymmetrickey-getparams"
language: "java"
lang: "en"
category: "function"
name: "AsymmetricKey.getParams"
signature: "default AlgorithmParameterSpec getParams()"
title: "AsymmetricKey.getParams"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AsymmetricKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsymmetricKey.getParams

```java
default AlgorithmParameterSpec getParams()
```

Returns the parameters associated with this key.
 The parameters are optional and may be either
 explicitly specified or implicitly created during
 key pair generation.

 The default implementation returns `null`.

**返回**

- the associated parameters, may be `null`
