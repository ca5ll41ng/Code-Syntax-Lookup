---
id: "java-en-function-scanner-hasnextboolean"
language: "java"
lang: "en"
category: "function"
name: "Scanner.hasNextBoolean"
signature: "public boolean hasNextBoolean()"
title: "Scanner.hasNextBoolean"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.hasNextBoolean

```java
public boolean hasNextBoolean()
```

Returns true if the next token in this scanner's input can be
 interpreted as a boolean value using a case insensitive pattern
 created from the string "true|false".  The scanner does not
 advance past the input that matched.

**返回**

- true if and only if this scanner's next token is a valid boolean value

**异常**

- **IllegalStateException** — if this scanner is closed
