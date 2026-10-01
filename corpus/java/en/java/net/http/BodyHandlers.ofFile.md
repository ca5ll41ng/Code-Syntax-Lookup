---
id: "java-en-function-bodyhandlers-offile"
language: "java"
lang: "en"
category: "function"
name: "BodyHandlers.ofFile"
signature: "public static BodyHandler<Path> ofFile(Path file, OpenOption... openOptions)"
title: "BodyHandlers.ofFile"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyHandlers.ofFile

```java
public static BodyHandler<Path> ofFile(Path file, OpenOption... openOptions)
```

Returns a `BodyHandler` that returns a
 `BodySubscriber BodySubscriber``` obtained from
 `ofFile(Path, OpenOption...)
 BodySubscribers.ofFile`.

 

 When the `HttpResponse` object is returned, the body has
 been completely written to the file, and `body` returns a
 reference to its `Path`.

**参数**

- **file** — the file to store the body in
- **openOptions** — any options to use when opening/creating the file

**返回**

- a response body handler

**异常**

- **IllegalArgumentException** — if an invalid set of open options are specified
