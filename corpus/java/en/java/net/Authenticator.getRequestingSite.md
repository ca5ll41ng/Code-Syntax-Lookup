---
id: "java-en-function-authenticator-getrequestingsite"
language: "java"
lang: "en"
category: "function"
name: "Authenticator.getRequestingSite"
signature: "protected final InetAddress getRequestingSite()"
title: "Authenticator.getRequestingSite"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Authenticator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Authenticator.getRequestingSite

```java
protected final InetAddress getRequestingSite()
```

Gets the `InetAddress` of the
 site requesting authorization, or `null`
 if not available.

**返回**

- the InetAddress of the site requesting authorization, or null if it's not available.
