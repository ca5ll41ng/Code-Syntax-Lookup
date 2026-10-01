---
id: "java-en-function-httpcookie-getversion"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.getVersion"
signature: "public int getVersion()"
title: "HttpCookie.getVersion"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.getVersion

```java
public int getVersion()
```

Returns the version of the protocol this cookie complies with. Version 1
 complies with RFC 2965/2109, and version 0 complies with the original
 cookie specification drafted by Netscape. Cookies provided by a browser
 use and identify the browser's cookie version.

**返回**

- 0 if the cookie complies with the original Netscape specification; 1 if the cookie complies with RFC 2965/2109

**参见**

- #setVersion
