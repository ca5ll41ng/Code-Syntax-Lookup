---
id: "java-en-function-jarfile-getjarentry"
language: "java"
lang: "en"
category: "function"
name: "JarFile.getJarEntry"
signature: "public JarEntry getJarEntry(String name)"
title: "JarFile.getJarEntry"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarFile.getJarEntry

```java
public JarEntry getJarEntry(String name)
```

Returns the `JarEntry` for the given base entry name or
 `null` if not found.

 

If this `JarFile` is a multi-release jar file and is configured
 to be processed as such, then a search is performed to find and return
 a `JarEntry` that is the latest versioned entry associated with the
 given entry name.  The returned `JarEntry` is the versioned entry
 corresponding to the given base entry name prefixed with the string
 `"META-INF/versions/{n`/"}, for the largest value of `n` for
 which an entry exists.  If such a versioned entry does not exist, then
 the `JarEntry` for the base entry is returned, otherwise
 `null` is returned if no entries are found.  The initial value for
 the version `n` is the maximum version as returned by the method
 `getVersion`.

 
 This implementation invokes `getEntry`.

**参数**

- **name** — the jar file entry name

**返回**

- the `JarEntry` for the given entry name, or the versioned entry name, or `null` if not found

**异常**

- **IllegalStateException** — may be thrown if the jar file has been closed

**参见**

- java.util.jar.JarEntry
