---
id: "java-en-function-files-writestring"
language: "java"
lang: "en"
category: "function"
name: "Files.writeString"
signature: "public static Path writeString(Path path, CharSequence csq, OpenOption... options) throws IOException"
title: "Files.writeString"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.writeString

```java
public static Path writeString(Path path, CharSequence csq, OpenOption... options) throws IOException
```

Write a `java.lang.CharSequence CharSequence` to a file.
 Characters are encoded into bytes using the
 `UTF_8 UTF-8` `Charset charset`.

 

 This method is equivalent to: `writeString(Path, CharSequence, Charset, OpenOption...)
 writeString(path, csq, StandardCharsets.UTF_8, options)`.

**参数**

- **path** — the path to the file
- **csq** — the CharSequence to be written
- **options** — options specifying how the file is opened

**返回**

- the path

**异常**

- **IllegalArgumentException** — if `options` contains an invalid combination of options
- **IOException** — if an I/O error occurs writing to or creating the file, or the text cannot be encoded using UTF-8
- **UnsupportedOperationException** — if an unsupported option is specified

> *Since 11*
