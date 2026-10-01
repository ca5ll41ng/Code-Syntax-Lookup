---
id: "java-en-function-filehandler-filehandler"
language: "java"
lang: "en"
category: "function"
name: "FileHandler.FileHandler"
signature: "public FileHandler() throws IOException"
title: "FileHandler.FileHandler"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/FileHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileHandler.FileHandler

```java
public FileHandler() throws IOException
```

Construct a default `FileHandler`.  This will be configured
 entirely from `LogManager` properties (or their default values).

**异常**

- **IOException** — if there are IO problems opening the files.
- **NullPointerException** — if pattern property is an empty String.
