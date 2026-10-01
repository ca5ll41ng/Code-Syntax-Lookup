---
id: "java-en-function-sslsessioncontext-setsessiontimeout"
language: "java"
lang: "en"
category: "function"
name: "SSLSessionContext.setSessionTimeout"
signature: "void setSessionTimeout(int seconds)"
title: "SSLSessionContext.setSessionTimeout"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSessionContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSessionContext.setSessionTimeout

```java
void setSessionTimeout(int seconds)
```

Sets the timeout limit for `SSLSession` objects grouped
 under this `SSLSessionContext`.
 

 If the timeout limit is set to 't' seconds, a session exceeds the
 timeout limit 't' seconds after its creation time.
 When the timeout limit is exceeded for a session, the
 `SSLSession` object is marked so that future connections
 cannot resume or rejoin the session. Active sessions can continue
 to be used so long as resume and rejoin operations are not attempted.
 A check for sessions exceeding the timeout is made immediately whenever
 the timeout limit is changed for this `SSLSessionContext`.

          the session cache size and timeout.  See
          `getSessionCacheSize` and `getSessionTimeout` for
          more information.  Applications should consider their
          performance requirements and override the defaults if necessary.

**参数**

- **seconds** — the new session timeout limit in seconds; zero means there is no limit.

**异常**

- **IllegalArgumentException** — if the timeout specified is `< 0`.

**参见**

- #getSessionTimeout
