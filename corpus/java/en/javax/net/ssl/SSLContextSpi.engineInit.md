---
id: "java-en-function-sslcontextspi-engineinit"
language: "java"
lang: "en"
category: "function"
name: "SSLContextSpi.engineInit"
signature: "protected abstract void engineInit(KeyManager[] km, TrustManager[] tm, SecureRandom sr) throws KeyManagementException"
title: "SSLContextSpi.engineInit"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLContextSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLContextSpi.engineInit

```java
protected abstract void engineInit(KeyManager[] km, TrustManager[] tm, SecureRandom sr) throws KeyManagementException
```

Initializes this context.

**参数**

- **km** — the sources of authentication keys
- **tm** — the sources of peer authentication trust decisions
- **sr** — the source of randomness

**异常**

- **KeyManagementException** — if this operation fails

**参见**

- SSLContext#init(KeyManager[], TrustManager[], SecureRandom)
