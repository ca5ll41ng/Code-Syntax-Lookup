---
id: "java-en-function-moduledescriptor-read"
language: "java"
lang: "en"
category: "function"
name: "ModuleDescriptor.read"
signature: "public static ModuleDescriptor read(InputStream in, Supplier<Set<String>> packageFinder) throws IOException"
title: "ModuleDescriptor.read"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleDescriptor.read

```java
public static ModuleDescriptor read(InputStream in, Supplier<Set<String>> packageFinder) throws IOException
```

Reads the binary form of a module declaration from an input stream
 as a module descriptor.

 

 If the descriptor encoded in the input stream does not indicate a
 set of packages in the module then the `packageFinder` will be
 invoked. The set of packages that the `packageFinder` returns
 must include all the packages that the module exports, opens, as well
 as the packages of the service implementations that the module provides,
 and the package of the main class (if the module has a main class). If
 the `packageFinder` throws an `UncheckedIOException` then
 `IOException` cause will be re-thrown. 

 

 If there are bytes following the module descriptor then it is
 implementation specific as to whether those bytes are read, ignored,
 or reported as an `InvalidModuleDescriptorException`. If this
 method fails with an `InvalidModuleDescriptorException` or `IOException` then it may do so after some, but not all, bytes have
 been read from the input stream. It is strongly recommended that the
 stream be promptly closed and discarded if an exception occurs. 

 module descriptors from legacy module-artifact formats that do not
 record the set of packages in the descriptor itself.

**参数**

- **in** — The input stream
- **packageFinder** — A supplier that can produce the set of packages

**返回**

- The module descriptor

**异常**

- **InvalidModuleDescriptorException** — If an invalid module descriptor is detected or the set of packages returned by the `packageFinder` does not include all of the packages obtained from the module descriptor
- **IOException** — If an I/O error occurs reading from the input stream or `UncheckedIOException` is thrown by the package finder
