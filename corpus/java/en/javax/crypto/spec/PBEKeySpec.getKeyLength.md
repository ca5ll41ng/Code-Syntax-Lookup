---
id: "java-en-function-pbekeyspec-getkeylength"
language: "java"
lang: "en"
category: "function"
name: "PBEKeySpec.getKeyLength"
signature: "public final int getKeyLength()"
title: "PBEKeySpec.getKeyLength"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/PBEKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PBEKeySpec.getKeyLength

```java
public final int getKeyLength()
```

Returns the to-be-derived key length or 0 if not specified.

 

 Note: this is used to indicate the preference on key length
 for variable-key-size ciphers. The actual key size depends on
 each provider's implementation.

**返回**

- the to-be-derived key length.
