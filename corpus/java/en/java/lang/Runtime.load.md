---
id: "java-en-function-runtime-load"
language: "java"
lang: "en"
category: "function"
name: "Runtime.load"
signature: "public void load(String filename)"
title: "Runtime.load"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Runtime.load

```java
public void load(String filename)
```

Loads the native library specified by the filename argument.  The filename
 argument must be an absolute path name.
 (for example
 `Runtime.getRuntime().load("/home/avh/lib/libX11.so");`).

 If the filename argument, when stripped of any platform-specific library
 prefix, path, and file extension, indicates a library whose name is,
 for example, L, and a native library called L is statically linked
 with the VM, then the JNI_OnLoad_L function exported by the library
 is invoked rather than attempting to load a dynamic library.
 A filename matching the argument does not have to exist in the file
 system.
 See the  JNI Specification
 for more details.

 Otherwise, the filename argument is mapped to a native library image in
 an implementation-dependent manner.
 

 This is similar to the method `loadLibrary`, but it
 accepts a general file name as an argument rather than just a library
 name, allowing any file of native code to be loaded.
 

 The method `load` is the conventional and
 convenient means of invoking this method.

**参数**

- **filename** — the file to load.

**异常**

- **UnsatisfiedLinkError** — if either the filename is not an absolute path name, the native library is not statically linked with the VM, or the library cannot be mapped to a native library image by the host system.
- **NullPointerException** — if `filename` is `null`
- **IllegalCallerException** — if the caller is in a module that does not have native access enabled.

**参见**

- java.lang.Runtime#getRuntime()
