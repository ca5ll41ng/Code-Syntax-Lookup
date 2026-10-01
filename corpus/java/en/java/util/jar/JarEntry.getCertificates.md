---
id: "java-en-function-jarentry-getcertificates"
language: "java"
lang: "en"
category: "function"
name: "JarEntry.getCertificates"
signature: "public Certificate[] getCertificates()"
title: "JarEntry.getCertificates"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarEntry.getCertificates

```java
public Certificate[] getCertificates()
```

Returns the `Certificate` objects for this entry, or
 `null` if none. This method can only be called once
 the `JarEntry` has been completely verified by reading
 from the entry input stream until the end of the stream has been
 reached. Otherwise, this method will return `null`.

 

It is recommended to use the `getCodeSigners` method instead,
 which returns an array of `CodeSigner`s.

 

The returned certificate array comprises all the signer certificates
 that were used to verify this entry. Each signer certificate is
 followed by its supporting certificate chain (which may be empty).
 Each signer certificate and its supporting certificate chain are ordered
 bottom-to-top (i.e., with the signer certificate first and the (root)
 certificate authority last).

 The verification process does not include validating or establishing
 trust in the code signers. A caller should perform additional checks,
 such as using a `java.security.cert.CertPathValidator` to
 validate each signer's certificate chain, and determining whether
 to trust the entry signed by the signers.

           this method is invoked.

**返回**

- the `Certificate` objects for this entry, or `null` if none.
