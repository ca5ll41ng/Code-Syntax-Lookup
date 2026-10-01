---
id: "java-en-function-pushbackinputstream-unread"
language: "java"
lang: "en"
category: "function"
name: "PushbackInputStream.unread"
signature: "public void unread(int b) throws IOException"
title: "PushbackInputStream.unread"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PushbackInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushbackInputStream.unread

```java
public void unread(int b) throws IOException
```

Pushes back a byte by copying it to the front of the pushback buffer.
 After this method returns, the next byte to be read will have the value
 `(byte)b`.

**参数**

- **b** — the `int` value whose low-order byte is to be pushed back.

**异常**

- **IOException** — If there is not enough room in the pushback buffer for the byte, or this input stream has been closed by invoking its `close` method.
