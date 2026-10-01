---
id: "java-en-function-cipher-getmaxallowedkeylength"
language: "java"
lang: "en"
category: "function"
name: "Cipher.getMaxAllowedKeyLength"
signature: "public static final int getMaxAllowedKeyLength(String transformation) throws NoSuchAlgorithmException"
title: "Cipher.getMaxAllowedKeyLength"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Cipher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cipher.getMaxAllowedKeyLength

```java
public static final int getMaxAllowedKeyLength(String transformation) throws NoSuchAlgorithmException
```

Returns the maximum key length for the specified transformation
 according to the installed JCE jurisdiction policy files. If
 JCE unlimited strength jurisdiction policy files are installed,
 `Integer.MAX_VALUE` will be returned.
 For more information on the default key sizes and the JCE jurisdiction
 policy files, please see the Cryptographic defaults and limitations in
 the `security_guide_jdk_providers JDK Providers Documentation`.

**参数**

- **transformation** — the cipher transformation

**返回**

- the maximum key length in bits or `Integer.MAX_VALUE`

**异常**

- **NullPointerException** — if `transformation` is `null`
- **NoSuchAlgorithmException** — if `transformation` is not a valid transformation, i.e. in the form of "algorithm" or "algorithm/mode/padding"

> *Since 1.5*
