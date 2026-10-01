---
id: "java-en-function-pbekeyspec-getsalt"
language: "java"
lang: "en"
category: "function"
name: "PBEKeySpec.getSalt"
signature: "public final byte[] getSalt()"
title: "PBEKeySpec.getSalt"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/PBEKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PBEKeySpec.getSalt

```java
public final byte[] getSalt()
```

Returns a copy of the salt or null if not specified.

 

 Note: this method should return a copy of the salt. It is
 the caller's responsibility to zero out the salt information after
 it is no longer needed.

**返回**

- the salt.
