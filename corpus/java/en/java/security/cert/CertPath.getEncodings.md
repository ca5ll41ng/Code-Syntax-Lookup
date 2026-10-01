---
id: "java-en-function-certpath-getencodings"
language: "java"
lang: "en"
category: "function"
name: "CertPath.getEncodings"
signature: "public abstract Iterator<String> getEncodings()"
title: "CertPath.getEncodings"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPath.getEncodings

```java
public abstract Iterator<String> getEncodings()
```

Returns an iteration of the encodings supported by this certification
 path, with the default encoding first. Attempts to modify the returned
 `Iterator` via its `remove` method result in an
 `UnsupportedOperationException`.

**返回**

- an `Iterator` over the names of the supported encodings (as Strings)
