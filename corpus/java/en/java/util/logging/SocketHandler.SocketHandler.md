---
id: "java-en-function-sockethandler-sockethandler"
language: "java"
lang: "en"
category: "function"
name: "SocketHandler.SocketHandler"
signature: "public SocketHandler() throws IOException"
title: "SocketHandler.SocketHandler"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/SocketHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketHandler.SocketHandler

```java
public SocketHandler() throws IOException
```

Create a `SocketHandler`, using only `LogManager` properties
 (or their defaults).

**异常**

- **IllegalArgumentException** — if the host or port are invalid or are not specified as LogManager properties.
- **IOException** — if we are unable to connect to the target host and port.
