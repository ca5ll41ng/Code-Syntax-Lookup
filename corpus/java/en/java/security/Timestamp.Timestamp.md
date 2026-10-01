---
id: "java-en-function-timestamp-timestamp"
language: "java"
lang: "en"
category: "function"
name: "Timestamp.Timestamp"
signature: "public Timestamp(Date timestamp, CertPath signerCertPath)"
title: "Timestamp.Timestamp"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Timestamp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timestamp.Timestamp

```java
public Timestamp(Date timestamp, CertPath signerCertPath)
```

Constructs a `Timestamp`.

**参数**

- **timestamp** — is the timestamp's date and time. It must not be `null`.
- **signerCertPath** — is the TSA's certificate path. It must not be `null`.

**异常**

- **NullPointerException** — if timestamp or signerCertPath is `null`.
