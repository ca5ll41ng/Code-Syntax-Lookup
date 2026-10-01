---
id: "java-en-function-filesystem-getpath"
language: "java"
lang: "en"
category: "function"
name: "FileSystem.getPath"
signature: "public abstract Path getPath(String first, String... more)"
title: "FileSystem.getPath"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileSystem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystem.getPath

```java
public abstract Path getPath(String first, String... more)
```

Converts a path string, or a sequence of strings that when joined form
 a path string, to a `Path`. If `more` does not specify any
 elements then the value of the `first` parameter is the path string
 to convert. If `more` specifies one or more elements then each
 non-empty string, including `first`, is considered to be a sequence
 of name elements (see `Path`) and is joined to form a path string.
 The details as to how the Strings are joined is provider specific but
 typically they will be joined using the `getSeparator
 name-separator` as the separator. For example, if the name separator is
 "`/`" and `getPath("/foo","bar","gus")` is invoked, then the
 path string `"/foo/bar/gus"` is converted to a `Path`.
 A `Path` representing an empty path is returned if `first`
 is the empty string and `more` does not contain any non-empty
 strings.

 

 The parsing and conversion to a path object is inherently
 implementation dependent. In the simplest case, the path string is rejected,
 and `InvalidPathException` thrown, if the path string contains
 characters that cannot be converted to characters that are legal
 to the file store. For example, on UNIX systems, the NUL (&#92;u0000)
 character is not allowed to be present in a path. An implementation may
 choose to reject path strings that contain names that are longer than those
 allowed by any file store, and where an implementation supports a complex
 path syntax, it may choose to reject path strings that are badly
 formed.

 

 In the case of the default provider, path strings are parsed based
 on the definition of paths at the platform or virtual file system level.
 For example, an operating system may not allow specific characters to be
 present in a file name, but a specific underlying file store may impose
 different or additional restrictions on the set of legal
 characters.

 

 This method throws `InvalidPathException` when the path string
 cannot be converted to a path. Where possible, and where applicable,
 the exception is created with an `getIndex
 index` value indicating the first position in the `path` parameter
 that caused the path string to be rejected.

**参数**

- **first** — the path string or initial part of the path string
- **more** — additional strings to be joined to form the path string

**返回**

- the resulting `Path`

**异常**

- **InvalidPathException** — If the path string cannot be converted
