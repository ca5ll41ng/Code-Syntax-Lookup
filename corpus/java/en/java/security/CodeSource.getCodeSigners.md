---
id: "java-en-function-codesource-getcodesigners"
language: "java"
lang: "en"
category: "function"
name: "CodeSource.getCodeSigners"
signature: "public final CodeSigner[] getCodeSigners()"
title: "CodeSource.getCodeSigners"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/CodeSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeSource.getCodeSigners

```java
public final CodeSigner[] getCodeSigners()
```

Returns the code signers associated with this `CodeSource`.
 

 If this `CodeSource` object was created using the
 `CodeSource`
 constructor then its certificate chains are extracted and used to
 create an array of `CodeSigner` objects. Note that only X.509
 certificates are examined - all other certificate types are ignored.

**返回**

- a copy of the code signer array, or `null` if there is none.

> *Since 1.5*
