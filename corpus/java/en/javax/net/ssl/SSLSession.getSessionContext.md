---
id: "java-en-function-sslsession-getsessioncontext"
language: "java"
lang: "en"
category: "function"
name: "SSLSession.getSessionContext"
signature: "SSLSessionContext getSessionContext()"
title: "SSLSession.getSessionContext"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSession.getSessionContext

```java
SSLSessionContext getSessionContext()
```

Returns the context in which this session is bound.
 

 This context may be unavailable in some environments,
 in which case this method returns null.

**返回**

- the session context used for this session, or null if the context is unavailable.
