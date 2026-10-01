---
id: "java-en-function-httpsurlconnection-getsslsession"
language: "java"
lang: "en"
category: "function"
name: "HttpsURLConnection.getSSLSession"
signature: "public Optional<SSLSession> getSSLSession()"
title: "HttpsURLConnection.getSSLSession"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HttpsURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpsURLConnection.getSSLSession

```java
public Optional<SSLSession> getSSLSession()
```

Returns an `Optional` containing the `SSLSession` in
 use on this connection.  Returns an empty `Optional` if the
 underlying implementation does not support this method.

           method returns an empty `Optional`.  Subclasses
           should override this method with an appropriate
           implementation since an application may need to access
           additional parameters associated with the SSL session.

**返回**

- an `Optional` containing the `SSLSession` in use on this connection.

**异常**

- **IllegalStateException** — if this method is called before the connection has been established

**参见**

- SSLSession

> *Since 12*
