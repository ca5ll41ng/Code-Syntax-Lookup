---
id: "java-en-function-certificate-encode"
language: "java"
lang: "en"
category: "function"
name: "Certificate.encode"
signature: "public abstract void encode(OutputStream stream) throws KeyException, IOException"
title: "Certificate.encode"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Certificate.encode

```java
public abstract void encode(OutputStream stream) throws KeyException, IOException
```

Encodes the certificate to an output stream in a format that can
 be decoded by the `decode` method.

**参数**

- **stream** — the output stream to which to encode the certificate.

**异常**

- **KeyException** — if the certificate is not properly initialized, or data is missing, etc.
- **IOException** — if a stream exception occurs while trying to output the encoded certificate to the output stream.

**参见**

- #decode
- #getFormat
