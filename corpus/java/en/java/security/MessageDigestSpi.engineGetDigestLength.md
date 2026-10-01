---
id: "java-en-function-messagedigestspi-enginegetdigestlength"
language: "java"
lang: "en"
category: "function"
name: "MessageDigestSpi.engineGetDigestLength"
signature: "protected int engineGetDigestLength()"
title: "MessageDigestSpi.engineGetDigestLength"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/MessageDigestSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageDigestSpi.engineGetDigestLength

```java
protected int engineGetDigestLength()
```

Returns the digest length in bytes.

 

This concrete method has been added to this previously-defined
 abstract class. (For backwards compatibility, it cannot be abstract.)

 

The default behavior is to return 0.

 

This method may be overridden by a provider to return the digest
 length.

**返回**

- the digest length in bytes.

> *Since 1.2*
