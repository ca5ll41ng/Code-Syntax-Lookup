---
id: "java-en-function-keyrep-readresolve"
language: "java"
lang: "en"
category: "function"
name: "KeyRep.readResolve"
signature: "protected Object readResolve() throws ObjectStreamException"
title: "KeyRep.readResolve"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyRep.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyRep.readResolve

```java
protected Object readResolve() throws ObjectStreamException
```

Resolve the Key object.

 

 This method supports three Type/format combinations:
 
 
-  Type.SECRET/"RAW" - returns a SecretKeySpec object
 constructed using encoded key bytes and algorithm
 
-  Type.PUBLIC/"X.509" - gets a KeyFactory instance for
 the key algorithm, constructs an X509EncodedKeySpec with the
 encoded key bytes, and generates a public key from the spec
 
-  Type.PRIVATE/"PKCS#8" - gets a KeyFactory instance for
 the key algorithm, constructs a PKCS8EncodedKeySpec with the
 encoded key bytes, and generates a private key from the spec

**返回**

- the resolved Key object

**异常**

- **ObjectStreamException** — if the Type/format combination is unrecognized, if the algorithm, key format, or encoded key bytes are unrecognized/invalid, of if the resolution of the key fails for any reason
