---
id: "java-en-function-jarurlconnection-getcertificates"
language: "java"
lang: "en"
category: "function"
name: "JarURLConnection.getCertificates"
signature: "public java.security.cert.Certificate[] getCertificates() throws IOException"
title: "JarURLConnection.getCertificates"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/JarURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarURLConnection.getCertificates

```java
public java.security.cert.Certificate[] getCertificates() throws IOException
```

Returns the Certificate objects for this connection if the URL
 for it points to a JAR file entry, null otherwise. This method
 can only be called once
 the connection has been completely verified by reading
 from the input stream until the end of the stream has been
 reached. Otherwise, this method will return `null`.

 

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

**返回**

- the Certificate objects for this connection if the URL for it points to a JAR file entry, null otherwise.

**异常**

- **IOException** — if getting the JAR entry causes an IOException to be thrown.

**参见**

- #getJarEntry
