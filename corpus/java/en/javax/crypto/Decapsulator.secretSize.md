---
id: "java-en-function-decapsulator-secretsize"
language: "java"
lang: "en"
category: "function"
name: "Decapsulator.secretSize"
signature: "public int secretSize()"
title: "Decapsulator.secretSize"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KEM.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Decapsulator.secretSize

```java
public int secretSize()
```

Returns the size of the shared secret.
 

 This method can be called to find out the length of the shared secret
 before `decapsulate` is called or if the obtained
 `SecretKey` is not extractable.

**返回**

- the size of the shared secret
