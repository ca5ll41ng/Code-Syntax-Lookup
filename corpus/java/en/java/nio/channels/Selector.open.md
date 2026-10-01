---
id: "java-en-function-selector-open"
language: "java"
lang: "en"
category: "function"
name: "Selector.open"
signature: "public static Selector open() throws IOException"
title: "Selector.open"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Selector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Selector.open

```java
public static Selector open() throws IOException
```

Opens a selector.

 

 The new selector is created by invoking the `openSelector openSelector` method
 of the system-wide default `java.nio.channels.spi.SelectorProvider` object.

**返回**

- A new selector

**异常**

- **IOException** — If an I/O error occurs
