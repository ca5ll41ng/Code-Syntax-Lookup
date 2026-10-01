---
id: "java-en-function-authenticator-getrequestinghost"
language: "java"
lang: "en"
category: "function"
name: "Authenticator.getRequestingHost"
signature: "protected final String getRequestingHost()"
title: "Authenticator.getRequestingHost"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Authenticator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Authenticator.getRequestingHost

```java
protected final String getRequestingHost()
```

Gets the `hostname` of the
 site or proxy requesting authentication, or `null`
 if not available.

**返回**

- the hostname of the connection requiring authentication, or null if it's not available.

> *Since 1.4*
