---
id: "java-en-function-sslsessioncontext-getsessiontimeout"
language: "java"
lang: "en"
category: "function"
name: "SSLSessionContext.getSessionTimeout"
signature: "int getSessionTimeout()"
title: "SSLSessionContext.getSessionTimeout"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSessionContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSessionContext.getSessionTimeout

```java
int getSessionTimeout()
```

Returns the timeout limit of `SSLSession` objects grouped
 under this `SSLSessionContext`.
 

 If the timeout limit is set to 't' seconds, a session exceeds the
 timeout limit 't' seconds after its creation time.
 When the timeout limit is exceeded for a session, the
 `SSLSession` object is marked so that future connections
 cannot resume or rejoin the session. Active sessions can continue
 to be used so long as resume and rejoin operations are not attempted.
 A check for sessions exceeding the timeout limit is made immediately
 whenever the timeout limit is changed for this
 `SSLSessionContext`.

           the `setSessionTimeout` method, or if not set, a default
           value of 86400 seconds (24 hours).

**返回**

- the session timeout limit in seconds; zero means there is no limit.

**参见**

- #setSessionTimeout
