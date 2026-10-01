---
id: "java-en-function-pathstatus-touri"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.toURI"
signature: "public URI toURI()"
title: "PathStatus.toURI"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.toURI

```java
public URI toURI()
```

Constructs a `file:` URI that represents this abstract pathname.

 

 The exact form of the URI is system-dependent.  If it can be
 determined that the file located by this abstract pathname is a
 directory, then the resulting URI will end with a slash.

 

 For a given abstract pathname f, it is guaranteed that

 
 new `File(java.net.URI) File`(&nbsp;f.toURI()).equals(
 &nbsp;f.`getAbsoluteFile() getAbsoluteFile`())
 

 so long as the original abstract pathname, the URI, and the new abstract
 pathname are all created in (possibly different invocations of) the same
 Java virtual machine.  Due to the system-dependent nature of abstract
 pathnames, however, this relationship typically does not hold when a
 `file:` URI that is created in a virtual machine on one operating
 system is converted into an abstract pathname in a virtual machine on a
 different operating system.

 

 Note that when this abstract pathname represents a UNC pathname then
 all components of the UNC (including the server name component) are encoded
 in the `URI` path. The authority component is undefined, meaning
 that it is represented as `null`. The `Path` class defines the
 `toUri toUri` method to encode the server name in the authority
 component of the resulting `URI`. The `toPath toPath` method
 may be used to obtain a `Path` representing this abstract pathname.

**返回**

- An absolute, hierarchical URI with a scheme equal to `"file"`, a path representing this abstract pathname, and undefined authority, query, and fragment components

**参见**

- #File(java.net.URI)
- java.net.URI
- java.net.URI#toURL()

> *Since 1.4*
