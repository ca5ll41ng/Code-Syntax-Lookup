---
id: "java-en-function-urlconnection-setusecaches"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.setUseCaches"
signature: "public void setUseCaches(boolean usecaches)"
title: "URLConnection.setUseCaches"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.setUseCaches

```java
public void setUseCaches(boolean usecaches)
```

Sets the value of the `useCaches` field of this
 `URLConnection` to the specified value.
 

 Some protocols do caching of documents.  Occasionally, it is important
 to be able to "tunnel through" and ignore the caches (e.g., the
 "reload" button in a browser).  If the UseCaches flag on a connection
 is true, the connection is allowed to use whatever caches it can.
  If false, caches are to be ignored.
  The default value comes from defaultUseCaches, which defaults to
 true. A default value can also be set per-protocol using
 `setDefaultUseCaches`.

**参数**

- **usecaches** — a `boolean` indicating whether or not to allow caching

**异常**

- **IllegalStateException** — if already connected

**参见**

- #getUseCaches()
