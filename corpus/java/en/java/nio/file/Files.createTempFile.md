---
id: "java-en-function-files-createtempfile"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path-traversal-in"],"cwe":["CWE-22"],"params":[1,2]}
name: "Files.createTempFile"
signature: "public static Path createTempFile(Path dir, String prefix, String suffix, FileAttribute<?>... attrs) throws IOException"
title: "Files.createTempFile"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.createTempFile

```java
public static Path createTempFile(Path dir, String prefix, String suffix, FileAttribute<?>... attrs) throws IOException
```

Creates a new empty file in the specified directory, using the given
 prefix and suffix strings to generate its name. The resulting
 `Path` is associated with the same `FileSystem` as the given
 directory.

 

 The details as to how the name of the file is constructed is
 implementation dependent and therefore not specified. Where possible
 the `prefix` and `suffix` are used to construct candidate
 names in the same manner as the `createTempFile` method.

 

 As with the `File.createTempFile` methods, this method is only
 part of a temporary-file facility. Where used as a work file,
 the resulting file may be opened using the `DELETE_ON_CLOSE DELETE_ON_CLOSE` option so that the
 file is deleted when the appropriate `close` method is invoked.
 Alternatively, a `addShutdownHook shutdown-hook`, or the
 `deleteOnExit` mechanism may be used to delete the
 file automatically.

 

 The `attrs` parameter is optional `FileAttribute
 file-attributes` to set atomically when creating the file. Each attribute
 is identified by its `name name`. If more than one
 attribute of the same name is included in the array then all but the last
 occurrence is ignored. When no file attributes are specified, then the
 resulting file may have more restrictive access permissions than files
 created by the `createTempFile`
 method.

**参数**

- **dir** — the path to directory in which to create the file
- **prefix** — the prefix string to be used in generating the file's name; may be `null`
- **suffix** — the suffix string to be used in generating the file's name; may be `null`, in which case "`.tmp`" is used
- **attrs** — an optional list of file attributes to set atomically when creating the file

**返回**

- the path to the newly created file that did not exist before this method was invoked

**异常**

- **IllegalArgumentException** — if the prefix or suffix parameters cannot be used to generate a candidate file name
- **UnsupportedOperationException** — if the array contains an attribute that cannot be set atomically when creating the directory
- **IOException** — if an I/O error occurs or `dir` does not exist
