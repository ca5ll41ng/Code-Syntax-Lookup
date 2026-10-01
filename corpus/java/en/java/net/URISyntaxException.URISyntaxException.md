---
id: "java-en-function-urisyntaxexception-urisyntaxexception"
language: "java"
lang: "en"
category: "function"
name: "URISyntaxException.URISyntaxException"
signature: "public URISyntaxException(String input, String reason, int index)"
title: "URISyntaxException.URISyntaxException"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URISyntaxException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URISyntaxException.URISyntaxException

```java
public URISyntaxException(String input, String reason, int index)
```

Constructs an instance from the given input string, reason, and error
 index.

**参数**

- **input** — The input string
- **reason** — A string explaining why the input could not be parsed
- **index** — The index at which the parse error occurred, or `-1` if the index is not known

**异常**

- **NullPointerException** — If either the input or reason strings are `null`
- **IllegalArgumentException** — If the error index is less than `-1`
