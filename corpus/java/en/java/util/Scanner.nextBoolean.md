---
id: "java-en-function-scanner-nextboolean"
language: "java"
lang: "en"
category: "function"
name: "Scanner.nextBoolean"
signature: "public boolean nextBoolean()"
title: "Scanner.nextBoolean"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.nextBoolean

```java
public boolean nextBoolean()
```

Scans the next token of the input into a boolean value and returns
 that value. This method will throw `InputMismatchException`
 if the next token cannot be translated into a valid boolean value.
 If the match is successful, the scanner advances past the input that
 matched.

**返回**

- the boolean scanned from the input

**异常**

- **InputMismatchException** — if the next token is not a valid boolean
- **NoSuchElementException** — if input is exhausted
- **IllegalStateException** — if this scanner is closed
