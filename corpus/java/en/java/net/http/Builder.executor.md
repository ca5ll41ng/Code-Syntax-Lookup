---
id: "java-en-function-builder-executor"
language: "java"
lang: "en"
category: "function"
name: "Builder.executor"
signature: "public Builder executor(Executor executor)"
title: "Builder.executor"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.executor

```java
public Builder executor(Executor executor)
```

Sets the executor to be used for asynchronous and dependent tasks.

 

 If this method is not invoked prior to `build()
 building`, a default executor is created for each newly built `HttpClient`.

 thread factory.

**参数**

- **executor** — the Executor

**返回**

- this builder
