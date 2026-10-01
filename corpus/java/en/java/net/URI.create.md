---
id: "java-en-function-uri-create"
language: "java"
lang: "en"
category: "function"
name: "URI.create"
signature: "public static URI create(String str)"
title: "URI.create"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.create

```java
public static URI create(String str)
```

Creates a URI by parsing the given string.

 

 This convenience factory method works as if by invoking the `URI` constructor; any `URISyntaxException` thrown by the
 constructor is caught and wrapped in a new `IllegalArgumentException` object, which is then thrown.

 

 This method is provided for use in situations where it is known that
 the given string is a legal URI, for example for URI constants declared
 within a program, and so it would be considered a programming error
 for the string not to parse as such.  The constructors, which throw
 `URISyntaxException` directly, should be used in situations where a
 URI is being constructed from user input or from some other source that
 may be prone to errors.

**参数**

- **str** — The string to be parsed into a URI

**返回**

- The new URI

**异常**

- **NullPointerException** — If `str` is `null`
- **IllegalArgumentException** — If the given string violates RFC&nbsp;2396
