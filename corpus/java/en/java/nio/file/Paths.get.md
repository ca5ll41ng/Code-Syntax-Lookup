---
id: "java-en-function-paths-get"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path-traversal-in"],"cwe":["CWE-22"],"params":[0,1]}
name: "Paths.get"
signature: "public static Path get(String first, String... more)"
title: "Paths.get"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Paths.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Paths.get

```java
public static Path get(String first, String... more)
```

Converts a path string, or a sequence of strings that when joined form
 a path string, to a `Path`.

 This method simply invokes `of(String,String...)
 Path.of` with the given parameters.

**参数**

- **first** — the path string or initial part of the path string
- **more** — additional strings to be joined to form the path string

**返回**

- the resulting `Path`

**异常**

- **InvalidPathException** — if the path string cannot be converted to a `Path`

**参见**

- FileSystem#getPath
- Path#of(String,String...)
