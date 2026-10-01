---
id: "java-en-function-uri-tourl"
language: "java"
lang: "en"
category: "function"
name: "URI.toURL"
signature: "public URL toURL() throws MalformedURLException"
title: "URI.toURL"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.toURL

```java
public URL toURL() throws MalformedURLException
```

Constructs a URL from this URI.

 

 This convenience method works as if invoking it were equivalent to
 evaluating the expression `new URL(this.toString())` after
 first checking that this URI is absolute.

**返回**

- A URL constructed from this URI

**异常**

- **IllegalArgumentException** — If this URL is not absolute
- **MalformedURLException** — If a protocol handler for the URL could not be found, or if some other error occurred while constructing the URL
