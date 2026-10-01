---
id: "java-en-function-files-createtempdirectory"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path-traversal-in"],"cwe":["CWE-22"],"params":[1]}
name: "Files.createTempDirectory"
signature: "public static Path createTempDirectory(Path dir, String prefix, FileAttribute<?>... attrs) throws IOException"
title: "Files.createTempDirectory"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.createTempDirectory

```java
public static Path createTempDirectory(Path dir, String prefix, FileAttribute<?>... attrs) throws IOException
```

Creates a new directory in the specified directory, using the given
 prefix to generate its name.  The resulting `Path` is associated
 with the same `FileSystem` as the given directory.

 

 The details as to how the name of the directory is constructed is
 implementation dependent and therefore not specified. Where possible
 the `prefix` is used to construct candidate names.

 

 As with the `createTempFile` methods, this method is only
 part of a temporary-file facility. A `addShutdownHook
 shutdown-hook`, or the `deleteOnExit` mechanism may be
 used to delete the directory automatically.

 

 The `attrs` parameter is optional `FileAttribute
 file-attributes` to set atomically when creating the directory. Each
 attribute is identified by its `name name`. If more
 than one attribute of the same name is included in the array then all but
 the last occurrence is ignored. When no file attributes are specified,
 then the resulting directory may have more restrictive access
 permissions than directories created by the
 `createDirectory` method.

**参数**

- **dir** — the path to directory in which to create the directory
- **prefix** — the prefix string to be used in generating the directory's name; may be `null`
- **attrs** — an optional list of file attributes to set atomically when creating the directory

**返回**

- the path to the newly created directory that did not exist before this method was invoked

**异常**

- **IllegalArgumentException** — if the prefix cannot be used to generate a candidate directory name
- **UnsupportedOperationException** — if the array contains an attribute that cannot be set atomically when creating the directory
- **IOException** — if an I/O error occurs or `dir` does not exist
