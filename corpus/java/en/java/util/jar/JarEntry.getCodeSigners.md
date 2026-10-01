---
id: "java-en-function-jarentry-getcodesigners"
language: "java"
lang: "en"
category: "function"
name: "JarEntry.getCodeSigners"
signature: "public CodeSigner[] getCodeSigners()"
title: "JarEntry.getCodeSigners"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarEntry.getCodeSigners

```java
public CodeSigner[] getCodeSigners()
```

Returns the `CodeSigner` objects for this entry, or
 `null` if none. This method can only be called once
 the `JarEntry` has been completely verified by reading
 from the entry input stream until the end of the stream has been
 reached. Otherwise, this method will return `null`.

 

The returned array comprises all the code signers that have signed
 this entry.

 The verification process does not include validating or establishing
 trust in the code signers. A caller should perform additional checks,
 such as using a `java.security.cert.CertPathValidator` to
 validate each signer's certificate chain, and determining whether
 to trust the entry signed by the signers.

           this method is invoked.

**返回**

- the `CodeSigner` objects for this entry, or `null` if none.

> *Since 1.5*
