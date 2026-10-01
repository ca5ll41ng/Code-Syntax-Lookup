---
id: "java-en-function-path-touri"
language: "java"
lang: "en"
category: "function"
name: "Path.toUri"
signature: "URI toUri()"
title: "Path.toUri"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.toUri

```java
URI toUri()
```

Returns a URI to represent this path.

 

 This method constructs an absolute `URI` with a `getScheme() scheme` equal to the URI scheme that identifies the
 provider. The exact form of the scheme specific part is highly provider
 dependent.

 

 In the case of the default provider, the URI is hierarchical with
 a `getPath() path` component that is absolute. The query and
 fragment components are undefined. Whether the authority component is
 defined or not is implementation dependent. There is no guarantee that
 the `URI` may be used to construct a `java.io.File java.io.File`.
 In particular, if this path represents a Universal Naming Convention (UNC)
 path, then the UNC server name may be encoded in the authority component
 of the resulting URI. In the case of the default provider, and the file
 exists, and it can be determined that the file is a directory, then the
 resulting `URI` will end with a slash.

 

 The default provider provides a similar round-trip guarantee
 to the `java.io.File` class. For a given `Path` p it
 is guaranteed that
 
 `of(URI) Path.of``(`p`.toUri()).equals(`p
 `.``toAbsolutePath() toAbsolutePath``())`
 
 so long as the original `Path`, the `URI`, and the new `Path` are all created in (possibly different invocations of) the same
 Java virtual machine. Whether other providers make any guarantees is
 provider specific and therefore unspecified.

 

 When a file system is constructed to access the contents of a file
 as a file system then it is highly implementation specific if the returned
 URI represents the given path in the file system or it represents a
 compound URI that encodes the URI of the enclosing file system.
 A format for compound URIs is not defined in this release; such a scheme
 may be added in a future release.

**返回**

- the URI representing this path

**异常**

- **java.io.IOError** — if an I/O error occurs obtaining the absolute path, or where a file system is constructed to access the contents of a file as a file system, and the URI of the enclosing file system cannot be obtained
