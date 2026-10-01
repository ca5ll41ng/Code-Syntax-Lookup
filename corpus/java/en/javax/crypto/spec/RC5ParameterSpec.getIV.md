---
id: "java-en-function-rc5parameterspec-getiv"
language: "java"
lang: "en"
category: "function"
name: "RC5ParameterSpec.getIV"
signature: "public byte[] getIV()"
title: "RC5ParameterSpec.getIV"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/RC5ParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RC5ParameterSpec.getIV

```java
public byte[] getIV()
```

Returns the IV or null if this parameter set does not contain an IV.

**返回**

- the IV or null if this parameter set does not contain an IV. Returns a new array each time this method is called.
