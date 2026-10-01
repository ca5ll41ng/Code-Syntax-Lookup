---
id: "java-en-function-java-lang-foreign-symbollookup"
language: "java"
lang: "en"
category: "function"
name: "java.lang.foreign.SymbolLookup"
title: "SymbolLookup"
directive: "type"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/SymbolLookup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SymbolLookup

A symbol lookup retrieves the address of a symbol in one or more libraries.
 A symbol is a named entity, such as a function or a global variable.
 

 A symbol lookup is created with respect to a particular library (or libraries).
 Subsequently, the `find` method takes the name of a symbol
 and returns the address of the symbol in that library.
 

 The address of a symbol is modeled as a zero-length
 `MemorySegment memory segment`. The segment can be used in different ways:
 
     
- It can be passed to a `Linker` to create a downcall method handle, which
         can then be used to call the foreign function at the segment's address.
     
- It can be passed to an existing
         `downcallHandle(FunctionDescriptor, Linker.Option...) downcall method handle`,
         as an argument to the underlying foreign function.
     
- It can be `set(AddressLayout, long, MemorySegment) stored`
         inside another memory segment.
     
- It can be used to access the region of memory backing a global variable
         (this requires `reinterpret(long) resizing`
         the segment first).
 

 Obtaining a symbol lookup

 The factory methods `libraryLookup` and
 `libraryLookup` create a symbol lookup for a library known to
 the operating system. The library is specified by either its name or a path.
 The library is loaded if not already loaded. The symbol lookup, which is known as a
 library lookup, and its lifetime is controlled by an `Arena arena`.
 For instance, if the provided arena is a confined arena, the library associated with
 the symbol lookup is unloaded when the confined arena is `close() closed`:

 {@snippet lang = java:
 try (Arena arena = Arena.ofConfined()) {
     SymbolLookup libGL = SymbolLookup.libraryLookup("libGL.so", arena); // libGL.so loaded here
     MemorySegment glGetString = libGL.findOrThrow("glGetString");
     ...
 } //  libGL.so unloaded here
}
 

 If a library was previously loaded through JNI, i.e., by `load`
 or `loadLibrary`, then the library was also associated with
 a particular class loader. The factory method `loaderLookup` creates
 a symbol lookup for all the libraries associated with the caller's class loader:

 {@snippet lang=java :
 System.loadLibrary("GL"); // libGL.so loaded here
 ...
 SymbolLookup libGL = SymbolLookup.loaderLookup();
 MemorySegment glGetString = libGL.findOrThrow("glGetString");
 }

 This symbol lookup, which is known as a loader lookup, is dynamic with
 respect to the libraries associated with the class loader. If other libraries are
 subsequently loaded through JNI and associated with the class loader, then the loader
 lookup will expose their symbols automatically.
 

 Note that a loader lookup only exposes symbols in libraries that were previously
 loaded through JNI, i.e., by `load` or `loadLibrary`.
 A loader lookup does not expose symbols in libraries that were loaded in the course
 of creating a library lookup:

 {@snippet lang = java:
 libraryLookup("libGL.so", arena).find("glGetString").isPresent(); // true
 loaderLookup().find("glGetString").isPresent(); // false
}

 Note also that a library lookup for library `L` exposes symbols in `L`
 even if `L` was previously loaded through JNI (the association with
 a class loader is immaterial to the library lookup):

 {@snippet lang = java:
 System.loadLibrary("GL"); // libGL.so loaded here
 libraryLookup("libGL.so", arena).find("glGetString").isPresent(); // true
}

 

 Finally, each `Linker` provides a symbol lookup for libraries that are commonly
 used on the OS and processor combination supported by that `Linker`. This
 symbol lookup, which is known as a default lookup, helps clients to quickly
 find addresses of well-known symbols. For example, a `Linker` for Linux/x64
 might choose to expose symbols in `libc` through the default lookup:

 {@snippet lang = java:
 Linker nativeLinker = Linker.nativeLinker();
 SymbolLookup stdlib = nativeLinker.defaultLookup();
 MemorySegment malloc = stdlib.findOrThrow("malloc");
}

> *Since 22*
