---
id: "java-en-function-pushbackreader-unread"
language: "java"
lang: "en"
category: "function"
name: "PushbackReader.unread"
signature: "public void unread(int c) throws IOException"
title: "PushbackReader.unread"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PushbackReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushbackReader.unread

```java
public void unread(int c) throws IOException
```

Pushes back a single character by copying it to the front of the
 pushback buffer. After this method returns, the next character to be read
 will have the value `(char)c`.

**参数**

- **c** — The int value representing a character to be pushed back

**异常**

- **IOException** — If the pushback buffer is full, or if some other I/O error occurs
