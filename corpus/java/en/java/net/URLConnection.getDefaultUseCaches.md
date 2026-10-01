---
id: "java-en-function-urlconnection-getdefaultusecaches"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getDefaultUseCaches"
signature: "public boolean getDefaultUseCaches()"
title: "URLConnection.getDefaultUseCaches"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getDefaultUseCaches

```java
public boolean getDefaultUseCaches()
```

Returns the default value of a `URLConnection`'s
 `useCaches` flag.
 

 This default is "sticky", being a part of the static state of all
 URLConnections.  This flag applies to the next, and all following
 URLConnections that are created. This default value can be over-ridden
 per protocol using `setDefaultUseCaches`

**返回**

- the default value of a `URLConnection`'s `useCaches` flag.

**参见**

- #setDefaultUseCaches(boolean)
