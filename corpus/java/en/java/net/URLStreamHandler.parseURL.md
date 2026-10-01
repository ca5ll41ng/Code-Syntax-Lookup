---
id: "java-en-function-urlstreamhandler-parseurl"
language: "java"
lang: "en"
category: "function"
name: "URLStreamHandler.parseURL"
signature: "protected void parseURL(URL u, String spec, int start, int limit)"
title: "URLStreamHandler.parseURL"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLStreamHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLStreamHandler.parseURL

```java
protected void parseURL(URL u, String spec, int start, int limit)
```

Parses the string representation of a `URL` into a
 `URL` object.
 

 If there is any inherited context, then it has already been
 copied into the `URL` argument.
 

 The `parseURL` method of `URLStreamHandler`
 parses the string representation as if it were an
 `http` specification. Most URL protocol families have a
 similar parsing. A stream protocol handler for a protocol that has
 a different syntax must override this routine.

**参数**

- **u** — the `URL` to receive the result of parsing the spec.
- **spec** — the `String` representing the URL that must be parsed.
- **start** — the character index at which to begin parsing. This is just past the '`:`' (if there is one) that specifies the determination of the protocol name.
- **limit** — the character position to stop parsing at. This is the end of the string or the position of the "`#`" character, if present. All information after the sharp sign indicates an anchor.

**异常**

- **IllegalArgumentException** — if the implementation of the protocol handler rejects any of the given parameters
- **NullPointerException** — if `u` is `null`, or if `start < limit` and `spec` is `null`
