---
id: "java-en-function-builder-priority"
language: "java"
lang: "en"
category: "function"
name: "Builder.priority"
signature: "public Builder priority(int priority)"
title: "Builder.priority"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.priority

```java
public Builder priority(int priority)
```

Sets the default priority for any HTTP/2 requests sent from this
 client. The value provided must be between `1` and `256`
 (inclusive).

**参数**

- **priority** — the priority weighting

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if the given priority is out of range
