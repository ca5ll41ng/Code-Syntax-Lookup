---
id: "java-en-function-pipe-open"
language: "java"
lang: "en"
category: "function"
name: "Pipe.open"
signature: "public static Pipe open() throws IOException"
title: "Pipe.open"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Pipe.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pipe.open

```java
public static Pipe open() throws IOException
```

Opens a pipe.

 

 The new pipe is created by invoking the `openPipe openPipe` method of the
 system-wide default `java.nio.channels.spi.SelectorProvider`
 object.

**返回**

- A new pipe

**异常**

- **IOException** — If an I/O error occurs
