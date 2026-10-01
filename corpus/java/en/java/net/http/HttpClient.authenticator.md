---
id: "java-en-function-httpclient-authenticator"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.authenticator"
signature: "public abstract Optional<Authenticator> authenticator()"
title: "HttpClient.authenticator"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.authenticator

```java
public abstract Optional<Authenticator> authenticator()
```

Returns an `Optional` containing the `Authenticator` set on
 this client. If no `Authenticator` was set in the client's builder,
 then the `Optional` is empty.

**返回**

- an `Optional` containing this client's `Authenticator`
