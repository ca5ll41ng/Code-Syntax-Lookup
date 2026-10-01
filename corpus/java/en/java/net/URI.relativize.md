---
id: "java-en-function-uri-relativize"
language: "java"
lang: "en"
category: "function"
name: "URI.relativize"
signature: "public URI relativize(URI uri)"
title: "URI.relativize"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.relativize

```java
public URI relativize(URI uri)
```

Relativizes the given URI against this URI.

 

 The relativization of the given URI against this URI is computed as
 follows: 

 

   
- 

 If either this URI or the given URI are opaque, or if the
   scheme and authority components of the two URIs are not identical, or
   if the path of this URI is not a prefix of the path of the given URI,
   then the given URI is returned. 

   
- 

 Otherwise a new relative hierarchical URI is constructed with
   query and fragment components taken from the given URI and with a path
   component computed by removing this URI's path from the beginning of
   the given URI's path.

**参数**

- **uri** — The URI to be relativized against this URI

**返回**

- The resulting URI

**异常**

- **NullPointerException** — If `uri` is `null`
