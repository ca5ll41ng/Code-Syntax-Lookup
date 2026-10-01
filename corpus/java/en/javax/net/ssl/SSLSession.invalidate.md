---
id: "java-en-function-sslsession-invalidate"
language: "java"
lang: "en"
category: "function"
name: "SSLSession.invalidate"
signature: "void invalidate()"
title: "SSLSession.invalidate"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSession.invalidate

```java
void invalidate()
```

Invalidates the session.
 

 Future connections will not be able to
 resume or join this session.  However, any existing connection
 using this session can continue to use the session until the
 connection is closed.

**参见**

- #isValid()
