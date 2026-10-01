---
id: "java-en-function-filepermission-filepermission"
language: "java"
lang: "en"
category: "function"
name: "FilePermission.FilePermission"
signature: "public FilePermission(String path, String actions)"
title: "FilePermission.FilePermission"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilePermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilePermission.FilePermission

```java
public FilePermission(String path, String actions)
```

Creates a new FilePermission object with the specified actions.
 path is the pathname of a file or directory, and actions
 contains a comma-separated list of the desired actions granted on the
 file or directory. Possible actions are
 "read", "write", "execute", "delete", and "readlink".

 

A pathname that ends in "/*" (where "/" is
 the file separator character, `File.separatorChar`)
 indicates all the files and directories contained in that directory.
 A pathname that ends with "/-" indicates (recursively) all files and
 subdirectories contained in that directory. The special pathname
 "<>" matches any file.

 

A pathname consisting of a single "*" indicates all the files
 in the current directory, while a pathname consisting of a single "-"
 indicates all the files in the current directory and
 (recursively) all files and subdirectories contained in the current
 directory.

 

A pathname containing an empty string represents an empty path.

 {@systemProperty jdk.io.permissionsUseCanonicalPath} system property
 dictates how the `path` argument is processed and stored.
 

 If the value of the system property is set to `true`, `path`
 is canonicalized and stored as a String object named `cpath`.
 This means a relative path is converted to an absolute path, a Windows
 DOS-style 8.3 path is expanded to a long path, and a symbolic link is
 resolved to its target, etc.
 

 If the value of the system property is set to `false`, `path`
 is converted to a `java.nio.file.Path` object named `npath`
 after `normalize() normalization`. No canonicalization is
 performed which means the underlying file system is not accessed.
 If an `InvalidPathException` is thrown during the conversion,
 this `FilePermission` will be labeled as invalid.
 

 In either case, the "*" or "-" character at the end of a wildcard
 `path` is removed before canonicalization or normalization.
 It is stored in a separate wildcard flag field.
 

 The default value of the `jdk.io.permissionsUseCanonicalPath`
 system property is `false` in this implementation.
 

 The value can also be set with a security property using the same name,
 but setting a system property will override the security property value.

**参数**

- **path** — the pathname of the file/directory.
- **actions** — the action string.

**异常**

- **IllegalArgumentException** — if actions is `null`, empty, malformed or contains an action other than the specified possible actions
