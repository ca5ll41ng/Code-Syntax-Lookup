---
id: "java-en-function-reader-of"
language: "java"
lang: "en"
category: "function"
name: "Reader.of"
signature: "public static Reader of(final CharSequence cs)"
title: "Reader.of"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Reader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reader.of

```java
public static Reader of(final CharSequence cs)
```

Returns a `Reader` that reads characters from a
 `CharSequence`. The reader is initially open and reading starts at
 the first character in the sequence.

 

 The returned reader supports the `mark mark` and
 `reset reset` operations.

 

 The resulting reader is not safe for use by multiple
 concurrent threads. If the reader is to be used by more than one
 thread it should be controlled by appropriate synchronization.

 

 If the sequence changes while the reader is open, e.g. the length
 changes, the behavior is undefined.

**参数**

- **cs** — `CharSequence` providing the character stream.

**返回**

- a `Reader` which reads characters from `cs`

**异常**

- **NullPointerException** — if `cs` is `null`

> *Since 24*
