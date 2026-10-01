---
id: "java-en-function-sslcontext-init"
language: "java"
lang: "en"
category: "function"
name: "SSLContext.init"
signature: "public final void init(KeyManager[] km, TrustManager[] tm, SecureRandom random) throws KeyManagementException"
title: "SSLContext.init"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLContext.init

```java
public final void init(KeyManager[] km, TrustManager[] tm, SecureRandom random) throws KeyManagementException
```

Initializes this context. Either of the first two parameters
 may be null in which case the installed security providers will
 be searched for the highest priority implementation of the
 appropriate factory. Likewise, the secure random parameter may
 be null in which case the default implementation will be used.
 

 Only the first instance of a particular key and/or trust manager
 implementation type in the array is used.  (For example, only
 the first javax.net.ssl.X509KeyManager in the array will be used.)

**参数**

- **km** — the sources of authentication keys or null
- **tm** — the sources of peer authentication trust decisions or null
- **random** — the source of randomness for this generator or null

**异常**

- **KeyManagementException** — if this operation fails
