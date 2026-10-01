---
id: "java-en-function-bodypublishers-offile"
language: "java"
lang: "en"
category: "function"
name: "BodyPublishers.ofFile"
signature: "public static BodyPublisher ofFile(Path path) throws FileNotFoundException"
title: "BodyPublishers.ofFile"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyPublishers.ofFile

```java
public static BodyPublisher ofFile(Path path) throws FileNotFoundException
```

A request body publisher that takes data from the contents of a File.

**参数**

- **path** — the path to the file containing the body

**返回**

- a BodyPublisher

**异常**

- **java.io.FileNotFoundException** — if the path is not found
