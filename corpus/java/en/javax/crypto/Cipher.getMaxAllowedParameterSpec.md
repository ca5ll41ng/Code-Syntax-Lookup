---
id: "java-en-function-cipher-getmaxallowedparameterspec"
language: "java"
lang: "en"
category: "function"
name: "Cipher.getMaxAllowedParameterSpec"
signature: "public static final AlgorithmParameterSpec getMaxAllowedParameterSpec( String transformation) throws NoSuchAlgorithmException"
title: "Cipher.getMaxAllowedParameterSpec"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Cipher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cipher.getMaxAllowedParameterSpec

```java
public static final AlgorithmParameterSpec getMaxAllowedParameterSpec( String transformation) throws NoSuchAlgorithmException
```

Returns an `AlgorithmParameterSpec` object which contains
 the maximum `Cipher` parameter value according to the
 jurisdiction policy file. If JCE unlimited strength jurisdiction
 policy files are installed or there is no maximum limit on the
 parameters for the specified transformation in the policy file,
 `null` will be returned.

**参数**

- **transformation** — the cipher transformation

**返回**

- an `AlgorithmParameterSpec` object which holds the maximum value or `null`

**异常**

- **NullPointerException** — if `transformation` is `null`
- **NoSuchAlgorithmException** — if `transformation` is not a valid transformation, i.e. in the form of "algorithm" or "algorithm/mode/padding"

> *Since 1.5*
