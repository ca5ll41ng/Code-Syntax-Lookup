---
id: "java-en-function-trustmanagerfactory-gettrustmanagers"
language: "java"
lang: "en"
category: "function"
name: "TrustManagerFactory.getTrustManagers"
signature: "public final TrustManager[] getTrustManagers()"
title: "TrustManagerFactory.getTrustManagers"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/TrustManagerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TrustManagerFactory.getTrustManagers

```java
public final TrustManager[] getTrustManagers()
```

Returns one trust manager for each type of trust material.

**返回**

- the trust managers

**异常**

- **IllegalStateException** — if the factory is not initialized.
