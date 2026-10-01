---
id: "java-en-function-hpkeparameterspec-withauthkey"
language: "java"
lang: "en"
category: "function"
name: "HPKEParameterSpec.withAuthKey"
signature: "public HPKEParameterSpec withAuthKey(AsymmetricKey kS)"
title: "HPKEParameterSpec.withAuthKey"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/HPKEParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HPKEParameterSpec.withAuthKey

```java
public HPKEParameterSpec withAuthKey(AsymmetricKey kS)
```

Creates a new `HPKEParameterSpec` object with the specified
 authentication key value.
 

 Note: this method does not check whether the KEM algorithm supports
 `mode_auth` or `mode_auth_psk`. If the resulting object is
 used to initialize an HPKE cipher with an unsupported mode, an
 `InvalidAlgorithmParameterException` will be thrown at that time.

**参数**

- **kS** — the authentication key

**返回**

- a new `HPKEParameterSpec` object

**异常**

- **NullPointerException** — if `kS` is `null`
