---
id: "java-en-function-httpclient-executor"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.executor"
signature: "public abstract Optional<Executor> executor()"
title: "HttpClient.executor"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.executor

```java
public abstract Optional<Executor> executor()
```

Returns an `Optional` containing this client's `Executor`. If no `Executor` was set in the client's builder,
 then the `Optional` is empty.

 

 Even though this method may return an empty optional, the `HttpClient` may still have an non-exposed `executor(Executor) default executor` that is used for
 executing asynchronous and dependent tasks.

**返回**

- an `Optional` containing this client's `Executor`
