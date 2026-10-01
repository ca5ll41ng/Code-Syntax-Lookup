---
id: "java-en-function-scanner-nextline"
language: "java"
lang: "en"
category: "function"
name: "Scanner.nextLine"
signature: "public String nextLine()"
title: "Scanner.nextLine"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.nextLine

```java
public String nextLine()
```

Advances this scanner past the current line and returns the input
 that was skipped.

 This method returns the rest of the current line, excluding any line
 separator at the end. The position is set to the beginning of the next
 line.

 

Since this method continues to search through the input looking
 for a line separator, it may buffer all of the input searching for
 the line to skip if no line separators are present.

**返回**

- the line that was skipped

**异常**

- **NoSuchElementException** — if no line was found
- **IllegalStateException** — if this scanner is closed
