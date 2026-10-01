---
id: "java-en-function-httpcookie-setvalue"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.setValue"
signature: "public void setValue(String newValue)"
title: "HttpCookie.setValue"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.setValue

```java
public void setValue(String newValue)
```

Assigns a new value to a cookie after the cookie is created.
 If you use a binary value, you may want to use BASE64 encoding.

 

 With Version 0 cookies, values should not contain white space,
 brackets, parentheses, equals signs, commas, double quotes, slashes,
 question marks, at signs, colons, and semicolons. Empty values may not
 behave the same way on all browsers.

**参数**

- **newValue** — a `String` specifying the new value

**参见**

- #getValue
