---
id: "java-en-function-httpurlconnection-setauthenticator"
language: "java"
lang: "en"
category: "function"
name: "HttpURLConnection.setAuthenticator"
signature: "public void setAuthenticator(Authenticator auth)"
title: "HttpURLConnection.setAuthenticator"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection.setAuthenticator

```java
public void setAuthenticator(Authenticator auth)
```

Supplies an `java.net.Authenticator Authenticator` to be used
 when authentication is requested through the HTTP protocol for
 this `HttpURLConnection`.
 If no authenticator is supplied, the
 `setDefault(java.net.Authenticator) default
 authenticator` will be used.

           throw `UnsupportedOperationException`. Concrete
           implementations of `HttpURLConnection`
           which support supplying an `Authenticator` for a
           specific `HttpURLConnection` instance should
           override this method to implement a different behavior.

           may or may not need to use the provided authenticator
           to obtain a password. For instance, an implementation that
           relies on third-party security libraries may still invoke the
           default authenticator if these libraries are configured
           to do so.
           Likewise, an implementation that supports transparent
           NTLM authentication may let the system attempt
           to connect using the system user credentials first,
           before invoking the provided authenticator.
           

           However, if an authenticator is specifically provided,
           then the underlying connection may only be reused for
           `HttpURLConnection` instances which share the same
           `Authenticator` instance, and authentication information,
           if cached, may only be reused for an `HttpURLConnection`
           sharing that same `Authenticator`.

**参数**

- **auth** — The `Authenticator` that should be used by this `HttpURLConnection`.

**异常**

- **UnsupportedOperationException** — if setting an Authenticator is not supported by the underlying implementation.
- **IllegalStateException** — if URLConnection is already connected.
- **NullPointerException** — if the supplied `auth` is `null`.

> *Since 9*
