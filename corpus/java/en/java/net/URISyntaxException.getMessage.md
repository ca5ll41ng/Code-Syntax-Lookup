---
id: "java-en-function-urisyntaxexception-getmessage"
language: "java"
lang: "en"
category: "function"
name: "URISyntaxException.getMessage"
signature: "public String getMessage()"
title: "URISyntaxException.getMessage"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URISyntaxException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URISyntaxException.getMessage

```java
public String getMessage()
```

Returns a string describing the parse error.  The resulting string
 consists of the reason string followed by a colon character
 (`':'`), a space, and the input string.  If the error index is
 defined then the string `" at index "` followed by the index, in
 decimal, is inserted after the reason string and before the colon
 character.

**返回**

- A string describing the parse error
