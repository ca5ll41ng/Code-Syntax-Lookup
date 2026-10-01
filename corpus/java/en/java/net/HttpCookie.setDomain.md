---
id: "java-en-function-httpcookie-setdomain"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.setDomain"
signature: "public void setDomain(String pattern)"
title: "HttpCookie.setDomain"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.setDomain

```java
public void setDomain(String pattern)
```

Specifies the domain within which this cookie should be presented.

 

 The form of the domain name is specified by RFC 2965. A domain
 name begins with a dot (`.foo.com`) and means that
 the cookie is visible to servers in a specified Domain Name System
 (DNS) zone (for example, `www.foo.com`, but not
 `a.b.foo.com`). By default, cookies are only returned
 to the server that sent them.

**参数**

- **pattern** — a `String` containing the domain name within which this cookie is visible; form is according to RFC 2965

**参见**

- #getDomain
