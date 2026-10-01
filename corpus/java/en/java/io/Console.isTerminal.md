---
id: "java-en-function-console-isterminal"
language: "java"
lang: "en"
category: "function"
name: "Console.isTerminal"
signature: "public boolean isTerminal()"
title: "Console.isTerminal"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Console.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Console.isTerminal

```java
public boolean isTerminal()
```

{@return `true` if the `Console` instance is a terminal}
 

 This method always returns `true`, since `console`
 provides a `Console` instance only when both standard input and
 output are unredirected, that is, when running in an interactive terminal.

> *Since 22*
