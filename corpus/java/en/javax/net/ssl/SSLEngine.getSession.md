---
id: "java-en-function-sslengine-getsession"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.getSession"
signature: "public abstract SSLSession getSession()"
title: "SSLEngine.getSession"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.getSession

```java
public abstract SSLSession getSession()
```

Returns the `SSLSession` in use in this
 `SSLEngine`.
 

 These can be long-lived, and frequently correspond to an entire
 login session for some user.  The session specifies a particular
 cipher suite which is being actively used by all connections in
 that session, as well as the identities of the session's client
 and server.
 

 Unlike `getSession`
 this method does not block until handshaking is complete.
 

 Until the initial handshake has completed, this method returns
 a session object which reports an invalid cipher suite of
 "SSL_NULL_WITH_NULL_NULL".

**返回**

- the `SSLSession` for this `SSLEngine`

**参见**

- SSLSession
