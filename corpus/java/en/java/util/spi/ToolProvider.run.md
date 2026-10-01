---
id: "java-en-function-toolprovider-run"
language: "java"
lang: "en"
category: "function"
name: "ToolProvider.run"
signature: "int run(PrintWriter out, PrintWriter err, String... args)"
title: "ToolProvider.run"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/ToolProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ToolProvider.run

```java
int run(PrintWriter out, PrintWriter err, String... args)
```

Runs an instance of the tool, returning zero for a successful run.
 Any non-zero return value indicates a tool-specific error during the
 execution.

 Two streams should be provided, for "expected" output, and for any
 error messages. If it is not necessary to distinguish the output,
 the same stream may be used for both.

 each tool.

**参数**

- **out** — a stream to which "expected" output should be written
- **err** — a stream to which any error messages should be written
- **args** — the command-line arguments for the tool

**返回**

- the result of executing the tool. A return value of 0 means the tool did not encounter any errors; any other value indicates that at least one error occurred during execution.

**异常**

- **NullPointerException** — if any of the arguments are `null`, or if there are any `null` values in the `args` array
