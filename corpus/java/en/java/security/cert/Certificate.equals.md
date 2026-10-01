---
id: "java-en-function-certificate-equals"
language: "java"
lang: "en"
category: "function"
name: "Certificate.equals"
signature: "public boolean equals(Object other)"
title: "Certificate.equals"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Certificate.equals

```java
public boolean equals(Object other)
```

Compares this certificate for equality with the specified
 object. If the `other` object is an
 `instanceof` `Certificate`, then
 its encoded form is retrieved and compared with the
 encoded form of this certificate.

**参数**

- **other** — the object to test for equality with this certificate.

**返回**

- true iff the encoded forms of the two certificates match, false otherwise.
