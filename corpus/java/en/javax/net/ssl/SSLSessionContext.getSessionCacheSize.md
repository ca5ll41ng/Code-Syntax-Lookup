---
id: "java-en-function-sslsessioncontext-getsessioncachesize"
language: "java"
lang: "en"
category: "function"
name: "SSLSessionContext.getSessionCacheSize"
signature: "int getSessionCacheSize()"
title: "SSLSessionContext.getSessionCacheSize"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSessionContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSessionContext.getSessionCacheSize

```java
int getSessionCacheSize()
```

Returns the size of the cache used for storing `SSLSession`
 objects grouped under this `SSLSessionContext`.

           the `setSessionCacheSize` method, or if not set, the
           value of the {@systemProperty javax.net.ssl.sessionCacheSize}
           system property.  If neither is set, it returns a default
           value of 20480.

**返回**

- size of the session cache; zero means there is no size limit.

**参见**

- #setSessionCacheSize
