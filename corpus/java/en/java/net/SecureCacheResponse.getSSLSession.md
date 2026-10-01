---
id: "java-en-function-securecacheresponse-getsslsession"
language: "java"
lang: "en"
category: "function"
name: "SecureCacheResponse.getSSLSession"
signature: "public Optional<SSLSession> getSSLSession()"
title: "SecureCacheResponse.getSSLSession"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SecureCacheResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureCacheResponse.getSSLSession

```java
public Optional<SSLSession> getSSLSession()
```

Returns an `Optional` containing the `SSLSession` in
 use on the original connection that retrieved the network resource.
 Returns an empty `Optional` if the underlying implementation
 does not support this method.

           method returns an empty `Optional`.  Subclasses
           should override this method with an appropriate
           implementation since an application may need to access
           additional parameters associated with the SSL session.

**返回**

- an `Optional` containing the `SSLSession` in use on the original connection

**参见**

- SSLSession

> *Since 12*
