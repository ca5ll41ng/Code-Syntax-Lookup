---
id: "java-en-function-httpcookie-httpcookie"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.HttpCookie"
signature: "public HttpCookie(String name, String value)"
title: "HttpCookie.HttpCookie"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.HttpCookie

```java
public HttpCookie(String name, String value)
```

Constructs a cookie with a specified name and value.

 

 The name must conform to RFC 2965. That means it can contain
 only ASCII alphanumeric characters and cannot contain commas,
 semicolons, or white space or begin with a $ character. The cookie's
 name cannot be changed after creation.

 

 The value can be anything the server chooses to send. Its
 value is probably of interest only to the server. The cookie's
 value can be changed after creation with the
 `setValue` method.

 

 By default, cookies are created according to the RFC 2965
 cookie specification. The version can be changed with the
 `setVersion` method.

**参数**

- **name** — a `String` specifying the name of the cookie
- **value** — a `String` specifying the value of the cookie

**异常**

- **IllegalArgumentException** — if the cookie name contains illegal characters
- **NullPointerException** — if `name` is `null`

**参见**

- #setValue
- #setVersion
