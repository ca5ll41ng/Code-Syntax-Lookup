---
id: "java-en-function-uri-tostring"
language: "java"
lang: "en"
category: "function"
name: "URI.toString"
signature: "public String toString()"
title: "URI.toString"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.toString

```java
public String toString()
```

Returns the content of this URI as a string.

 

 If this URI was created by invoking one of the constructors in this
 class then a string equivalent to the original input string, or to the
 string computed from the originally-given components, as appropriate, is
 returned.  Otherwise this URI was created by normalization, resolution,
 or relativization, and so a string is constructed from this URI's
 components according to the rules specified in RFC&nbsp;2396,
 section&nbsp;5.2, step&nbsp;7. 

      RFC 2396: Uniform Resource Identifiers (URI): Generic Syntax

**返回**

- The string form of this URI
