---
id: "java-en-function-pathstatus-listroots"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.listRoots"
signature: "public static File[] listRoots()"
title: "PathStatus.listRoots"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.listRoots

```java
public static File[] listRoots()
```

List the available filesystem roots.

 

 A particular Java platform may support zero or more
 hierarchically-organized file systems.  Each file system has a
 `root` directory from which all other files in that file system
 can be reached.

 

 This method returns an array of `File` objects that denote the
 root directories of the available filesystem roots.  It is guaranteed
 that the canonical pathname of any file physically present on the local
 machine will begin with one of the roots returned by this method.
 There is no guarantee that a root directory can be accessed.

 Windows platforms, for example, have a root directory
 for each active drive; UNIX platforms have a single root directory,
 namely `"/"`.  The set of filesystem roots is affected
 by various system-level operations such as the disconnecting or
 unmounting of physical or virtual disk drives.

 

 The canonical pathname of a file that resides on some other machine
 and is accessed via a remote-filesystem protocol such as SMB or NFS may
 or may not begin with one of the roots returned by this method.  If the
 pathname of a remote file is syntactically indistinguishable from the
 pathname of a local file then it will begin with one of the roots
 returned by this method.  Thus, for example, `File` objects
 denoting the root directories of the mapped network drives of a Windows
 platform will be returned by this method, while `File` objects
 containing UNC pathnames will not be returned by this method.

**返回**

- An array of `File` objects denoting the available filesystem roots, or `null` if the set of roots could not be determined.  The array will be empty if there are no filesystem roots.

**参见**

- java.nio.file.FileStore

> *Since 1.2*
