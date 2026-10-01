---
id: "java-en-function-pbekey-getsalt"
language: "java"
lang: "en"
category: "function"
name: "PBEKey.getSalt"
signature: "byte[] getSalt()"
title: "PBEKey.getSalt"
directive: "method"
module: "java.base/javax.crypto.interfaces"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/interfaces/PBEKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PBEKey.getSalt

```java
byte[] getSalt()
```

Returns the salt or null if not specified.

 

 Note: this method should return a copy of the salt. It is
 the caller's responsibility to zero out the salt information after
 it is no longer needed.

**返回**

- the salt.
