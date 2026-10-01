---
id: "java-en-function-scanner-skip"
language: "java"
lang: "en"
category: "function"
name: "Scanner.skip"
signature: "public Scanner skip(Pattern pattern)"
title: "Scanner.skip"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.skip

```java
public Scanner skip(Pattern pattern)
```

Skips input that matches the specified pattern, ignoring delimiters.
 This method will skip input if an anchored match of the specified
 pattern succeeds.

 

If a match to the specified pattern is not found at the
 current position, then no input is skipped and a
 `NoSuchElementException` is thrown.

 

Since this method seeks to match the specified pattern starting at
 the scanner's current position, patterns that can match a lot of
 input (".*", for example) may cause the scanner to buffer a large
 amount of input.

 

Note that it is possible to skip something without risking a
 `NoSuchElementException` by using a pattern that can
 match nothing, e.g., `sc.skip("[ \t]*")`.

**参数**

- **pattern** — the pattern to skip over

**返回**

- this scanner

**异常**

- **NoSuchElementException** — if the specified pattern is not found
- **IllegalStateException** — if this scanner is closed
