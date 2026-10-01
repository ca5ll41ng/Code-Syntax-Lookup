---
id: "java-en-function-sslsocket-getsession"
language: "java"
lang: "en"
category: "function"
name: "SSLSocket.getSession"
signature: "public abstract SSLSession getSession()"
title: "SSLSocket.getSession"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket.getSession

```java
public abstract SSLSession getSession()
```

Returns the SSL Session in use by this connection.  These can
 be long-lived, and frequently correspond to an entire login session
 for some user.  The session specifies a particular cipher suite
 which is being actively used by all connections in that session,
 as well as the identities of the session's client and server.
 

 This method will initiate the initial handshake if
 necessary and then block until the handshake has been
 established.
 

 If an error occurs during the initial handshake, this method
 returns an invalid session object which reports an invalid
 cipher suite of "SSL_NULL_WITH_NULL_NULL".

**返回**

- the SSLSession
