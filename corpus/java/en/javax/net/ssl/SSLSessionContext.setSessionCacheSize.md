---
id: "java-en-function-sslsessioncontext-setsessioncachesize"
language: "java"
lang: "en"
category: "function"
name: "SSLSessionContext.setSessionCacheSize"
signature: "void setSessionCacheSize(int size)"
title: "SSLSessionContext.setSessionCacheSize"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSessionContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSessionContext.setSessionCacheSize

```java
void setSessionCacheSize(int size)
```

Sets the size of the cache used for storing `SSLSession`
 objects grouped under this `SSLSessionContext`.

          the session cache size and timeout.  See
          `getSessionCacheSize` and `getSessionTimeout` for
          more information.  Applications should consider their
          performance requirements and override the defaults if necessary.

**参数**

- **size** — the new session cache size limit; zero means there is no limit.

**异常**

- **IllegalArgumentException** — if the specified size is `< 0`.

**参见**

- #getSessionCacheSize
