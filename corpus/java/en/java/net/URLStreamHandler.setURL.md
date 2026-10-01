---
id: "java-en-function-urlstreamhandler-seturl"
language: "java"
lang: "en"
category: "function"
name: "URLStreamHandler.setURL"
signature: "protected void setURL(URL u, String protocol, String host, int port, String authority, String userInfo, String path, String query, String ref)"
title: "URLStreamHandler.setURL"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLStreamHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLStreamHandler.setURL

```java
protected void setURL(URL u, String protocol, String host, int port, String authority, String userInfo, String path, String query, String ref)
```

Sets the fields of the `URL` argument to the indicated values.
 Only classes derived from URLStreamHandler are able
 to use this method to set the values of the URL fields.

**参数**

- **u** — the URL to modify.
- **protocol** — the protocol name.
- **host** — the remote host value for the URL.
- **port** — the port on the remote machine.
- **authority** — the authority part for the URL.
- **userInfo** — the userInfo part of the URL.
- **path** — the path component of the URL.
- **query** — the query part for the URL.
- **ref** — the reference.

**异常**

- **SecurityException** — if the protocol handler of the URL is different from this one
- **IllegalArgumentException** — if the implementation of the protocol handler rejects any of the given parameters
- **NullPointerException** — if `u` is `null`

> *Since 1.3*
