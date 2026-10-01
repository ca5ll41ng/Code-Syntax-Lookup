---
id: "java-en-function-consolehandler-close"
language: "java"
lang: "en"
category: "function"
name: "ConsoleHandler.close"
signature: "public void close()"
title: "ConsoleHandler.close"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/ConsoleHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConsoleHandler.close

```java
public void close()
```

Override `StreamHandler.close` to do a flush but not
 to close the output stream.  That is, we do **not**
 close `System.err`.
