---
id: "java-en-function-filewriter-filewriter"
language: "java"
lang: "en"
category: "function"
name: "FileWriter.FileWriter"
signature: "public FileWriter(String fileName) throws IOException"
title: "FileWriter.FileWriter"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileWriter.FileWriter

```java
public FileWriter(String fileName) throws IOException
```

Constructs a `FileWriter` given a file name, using the
 `defaultCharset() default charset`

**参数**

- **fileName** — String The system-dependent filename.

**异常**

- **IOException** — if the named file exists but is a directory rather than a regular file, does not exist but cannot be created, or cannot be opened for any other reason

**参见**

- Charset#defaultCharset()
