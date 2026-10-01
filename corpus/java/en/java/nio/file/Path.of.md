---
id: "java-en-function-path-of"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path-traversal-in"],"cwe":["CWE-22"],"params":[0,1]}
name: "Path.of"
signature: "public static Path of(String first, String... more)"
title: "Path.of"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.of

```java
public static Path of(String first, String... more)
```

Returns a `Path` by converting a path string, or a sequence of
 strings that when joined form a path string. If `more` does not
 specify any elements then the value of the `first` parameter is
 the path string to convert. If `more` specifies one or more
 elements then each non-empty string, including `first`, is
 considered to be a sequence of name elements and is joined to form a
 path string. The details as to how the Strings are joined is provider
 specific but typically they will be joined using the
 `getSeparator name-separator` as the separator.
 For example, if the name separator is "`/`" and
 `getPath("/foo","bar","gus")` is invoked, then the path string
 `"/foo/bar/gus"` is converted to a `Path`. A `Path`
 representing an empty path is returned if `first` is the empty
 string and `more` does not contain any non-empty strings.

 

 The `Path` is obtained by invoking the `getPath
 getPath` method of the `getDefault default` `FileSystem`.

 

 Note that while this method is very convenient, using it will imply
 an assumed reference to the default `FileSystem` and limit the
 utility of the calling code. Hence it should not be used in library code
 intended for flexible reuse. A more flexible alternative is to use an
 existing `Path` instance as an anchor, such as:
 {@snippet lang=java :
     Path dir = ...
     Path path = dir.resolve("file");
 }

**参数**

- **first** — the path string or initial part of the path string
- **more** — additional strings to be joined to form the path string

**返回**

- the resulting `Path`

**异常**

- **InvalidPathException** — if the path string cannot be converted to a `Path`

**参见**

- FileSystem#getPath

> *Since 11*
