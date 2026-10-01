---
id: "java-en-function-encryptedprivatekeyinfo-getalgname"
language: "java"
lang: "en"
category: "function"
name: "EncryptedPrivateKeyInfo.getAlgName"
signature: "public String getAlgName()"
title: "EncryptedPrivateKeyInfo.getAlgName"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/EncryptedPrivateKeyInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EncryptedPrivateKeyInfo.getAlgName

```java
public String getAlgName()
```

Returns the encryption algorithm.
 

Note: Standard name is returned instead of the specified one
 in the constructor when such mapping is available.
 See the 
 Java Security Standard Algorithm Names document
 for information about standard Cipher algorithm names.

**返回**

- the encryption algorithm name.
