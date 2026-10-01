---
id: "java-en-function-sslsessioncontext-getids"
language: "java"
lang: "en"
category: "function"
name: "SSLSessionContext.getIds"
signature: "Enumeration<byte[]> getIds()"
title: "SSLSessionContext.getIds"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSessionContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSessionContext.getIds

```java
Enumeration<byte[]> getIds()
```

Returns an Enumeration of all known session id's grouped under this
 `SSLSessionContext`.
 

Session contexts may not contain all sessions. For example,
 stateless sessions are not stored in the session context.

**返回**

- an enumeration of all the Session id's
