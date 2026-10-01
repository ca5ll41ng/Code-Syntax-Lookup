---
id: "java-en-function-bodypublishers-ofstring"
language: "java"
lang: "en"
category: "function"
name: "BodyPublishers.ofString"
signature: "public static BodyPublisher ofString(String body)"
title: "BodyPublishers.ofString"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyPublishers.ofString

```java
public static BodyPublisher ofString(String body)
```

Returns a request body publisher whose body is the given `String`, converted using the `UTF_8 UTF_8`
 character set.

**参数**

- **body** — the String containing the body

**返回**

- a BodyPublisher
