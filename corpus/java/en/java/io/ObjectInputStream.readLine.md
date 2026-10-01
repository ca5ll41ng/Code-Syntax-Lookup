---
id: "java-en-function-objectinputstream-readline"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.readLine"
signature: "public String readLine() throws IOException"
title: "ObjectInputStream.readLine"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.readLine

```java
public String readLine() throws IOException
```

Reads in a line that has been terminated by a \n, \r, \r\n or EOF.

**返回**

- a String copy of the line.

**异常**

- **IOException** — if there are I/O errors while reading from the underlying `InputStream`

> **⚠ Deprecated** — This method does not properly convert bytes to characters. see DataInputStream for the details and alternatives.
