---
id: "java-en-function-sslsession-getlastaccessedtime"
language: "java"
lang: "en"
category: "function"
name: "SSLSession.getLastAccessedTime"
signature: "long getLastAccessedTime()"
title: "SSLSession.getLastAccessedTime"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSession.getLastAccessedTime

```java
long getLastAccessedTime()
```

Returns the last time this Session representation was accessed by the
 session level infrastructure, in milliseconds since
 midnight, January 1, 1970 UTC.
 

 Access indicates a new connection being established using session data.
 Application level operations, such as getting or setting a value
 associated with the session, are not reflected in this access time.

 

 This information is particularly useful in session management
 policies.  For example, a session manager thread could leave all
 sessions in a given context which haven't been used in a long time;
 or, the sessions might be sorted according to age to optimize some task.

**返回**

- the last time this Session was accessed
