---
id: "java-en-function-sslsessioncontext-getsession"
language: "java"
lang: "en"
category: "function"
name: "SSLSessionContext.getSession"
signature: "SSLSession getSession(byte[] sessionId)"
title: "SSLSessionContext.getSession"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSessionContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSessionContext.getSession

```java
SSLSession getSession(byte[] sessionId)
```

Returns the `SSLSession` bound to the specified session id.

**参数**

- **sessionId** — the Session identifier

**返回**

- the `SSLSession` or null if the specified session id does not refer to a valid SSLSession.

**异常**

- **NullPointerException** — if `sessionId` is null.
