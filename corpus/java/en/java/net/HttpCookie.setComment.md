---
id: "java-en-function-httpcookie-setcomment"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.setComment"
signature: "public void setComment(String purpose)"
title: "HttpCookie.setComment"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.setComment

```java
public void setComment(String purpose)
```

Specifies a comment that describes a cookie's purpose.
 The comment is useful if the browser presents the cookie
 to the user. Comments are not supported by Netscape Version 0 cookies.

**参数**

- **purpose** — a `String` specifying the comment to display to the user

**参见**

- #getComment
