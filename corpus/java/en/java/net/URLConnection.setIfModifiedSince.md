---
id: "java-en-function-urlconnection-setifmodifiedsince"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.setIfModifiedSince"
signature: "public void setIfModifiedSince(long ifmodifiedsince)"
title: "URLConnection.setIfModifiedSince"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.setIfModifiedSince

```java
public void setIfModifiedSince(long ifmodifiedsince)
```

Sets the value of the `ifModifiedSince` field of
 this `URLConnection` to the specified value.

**参数**

- **ifmodifiedsince** — the new value.

**异常**

- **IllegalStateException** — if already connected

**参见**

- #getIfModifiedSince()
