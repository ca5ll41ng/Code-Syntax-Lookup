---
id: "java-en-function-jarfile-getentry"
language: "java"
lang: "en"
category: "function"
name: "JarFile.getEntry"
signature: "public ZipEntry getEntry(String name)"
title: "JarFile.getEntry"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarFile.getEntry

```java
public ZipEntry getEntry(String name)
```

Returns the `ZipEntry` for the given base entry name or
 `null` if not found.

 

If this `JarFile` is a multi-release jar file and is configured
 to be processed as such, then a search is performed to find and return
 a `ZipEntry` that is the latest versioned entry associated with the
 given entry name.  The returned `ZipEntry` is the versioned entry
 corresponding to the given base entry name prefixed with the string
 `"META-INF/versions/{n`/"}, for the largest value of `n` for
 which an entry exists.  If such a versioned entry does not exist, then
 the `ZipEntry` for the base entry is returned, otherwise
 `null` is returned if no entries are found.  The initial value for
 the version `n` is the maximum version as returned by the method
 `getVersion`.

 
 This implementation may return a versioned entry for the requested name
 even if there is not a corresponding base entry.  This can occur
 if there is a private or package-private versioned entry that matches.
 If a subclass overrides this method, assure that the override method
 invokes `super.getEntry(name)` to obtain all versioned entries.

**参数**

- **name** — the jar file entry name

**返回**

- the `ZipEntry` for the given entry name or the versioned entry name or `null` if not found

**异常**

- **IllegalStateException** — may be thrown if the jar file has been closed

**参见**

- java.util.zip.ZipEntry
