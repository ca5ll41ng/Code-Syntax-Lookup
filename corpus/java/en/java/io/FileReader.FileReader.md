---
id: "java-en-function-filereader-filereader"
language: "java"
lang: "en"
category: "function"
name: "FileReader.FileReader"
signature: "public FileReader(String fileName) throws FileNotFoundException"
title: "FileReader.FileReader"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileReader.FileReader

```java
public FileReader(String fileName) throws FileNotFoundException
```

Creates a new `FileReader`, given the name of the file to read,
 using the `defaultCharset() default charset`.

**参数**

- **fileName** — the name of the file to read

**异常**

- **FileNotFoundException** — if the named file does not exist, is a directory rather than a regular file, or for some other reason cannot be opened for reading.

**参见**

- Charset#defaultCharset()
