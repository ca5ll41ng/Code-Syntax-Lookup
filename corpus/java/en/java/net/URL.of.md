---
id: "java-en-function-url-of"
language: "java"
lang: "en"
category: "function"
name: "URL.of"
signature: "public static URL of(URI uri, URLStreamHandler handler) throws MalformedURLException"
title: "URL.of"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URL.of

```java
public static URL of(URI uri, URLStreamHandler handler) throws MalformedURLException
```

Creates a URL from a URI, as if by invoking `uri.toURL()`, but
 associating it with the given `URLStreamHandler`, if allowed.

 Applications should consider performing additional integrity
 checks before constructing a `URL` and opening a connection.
 See the API note in the class level API
 documentation.

 selected handler.

**参数**

- **uri** — the `URI` from which the returned `URL` should be built
- **handler** — a custom protocol stream handler for the returned `URL`. Can be `null`, in which case the default stream handler for the protocol if any, will be used.

**返回**

- a new `URL` instance created from the given `URI` and associated with the given `URLStreamHandler`, if any

**异常**

- **NullPointerException** — if `uri` is `null`
- **IllegalArgumentException** — if no protocol is specified (the `getScheme() uri scheme` is `null`), or if the `URLStreamHandler` is not `null` and can not be set for the given protocol
- **MalformedURLException** — if an unknown protocol is found, or the given URI fails to comply with the specific syntax of the associated protocol, or the underlying stream handler's `parseURL(URL, String, int, int) parseURL method` throws `IllegalArgumentException`

**参见**

- java.net.URI#toURL()

> *Since 20*
