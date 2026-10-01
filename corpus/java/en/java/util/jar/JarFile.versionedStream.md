---
id: "java-en-function-jarfile-versionedstream"
language: "java"
lang: "en"
category: "function"
name: "JarFile.versionedStream"
signature: "public Stream<JarEntry> versionedStream()"
title: "JarFile.versionedStream"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarFile.versionedStream

```java
public Stream<JarEntry> versionedStream()
```

Returns a `Stream` of the versioned jar file entries.

 

If this `JarFile` is a multi-release jar file and is configured to
 be processed as such, then an entry in the stream is the latest versioned entry
 associated with the corresponding base entry name. The maximum version of the
 latest versioned entry is the version returned by `getVersion`.
 The returned stream may include an entry that only exists as a versioned entry.

 If the jar file is not a multi-release jar file or the `JarFile` is not
 configured for processing a multi-release jar file, this method returns the
 same stream that `stream` returns.

**返回**

- stream of versioned entries

> *Since 10*
