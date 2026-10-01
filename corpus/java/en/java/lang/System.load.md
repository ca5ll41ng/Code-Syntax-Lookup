---
id: "java-en-function-system-load"
language: "java"
lang: "en"
category: "function"
name: "System.load"
signature: "public static void load(String filename)"
title: "System.load"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.load

```java
public static void load(String filename)
```

Loads the native library specified by the filename argument.  The filename
 argument must be an absolute path name.

 If the filename argument, when stripped of any platform-specific library
 prefix, path, and file extension, indicates a library whose name is,
 for example, L, and a native library called L is statically linked
 with the VM, then the JNI_OnLoad_L function exported by the library
 is invoked rather than attempting to load a dynamic library.
 A filename matching the argument does not have to exist in the
 file system.
 See the  JNI Specification
 for more details.

 Otherwise, the filename argument is mapped to a native library image in
 an implementation-dependent manner.

 

 The call `System.load(name)` is effectively equivalent
 to the call:
 
```

 Runtime.getRuntime().load(name)
 
```

**参数**

- **filename** — the file to load.

**异常**

- **UnsatisfiedLinkError** — if either the filename is not an absolute path name, the native library is not statically linked with the VM, or the library cannot be mapped to a native library image by the host system.
- **NullPointerException** — if `filename` is `null`
- **IllegalCallerException** — if the caller is in a module that does not have native access enabled.

**参见**

- java.lang.Runtime#load(java.lang.String)
