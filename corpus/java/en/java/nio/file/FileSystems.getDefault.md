---
id: "java-en-function-filesystems-getdefault"
language: "java"
lang: "en"
category: "function"
name: "FileSystems.getDefault"
signature: "public static FileSystem getDefault()"
title: "FileSystems.getDefault"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileSystems.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystems.getDefault

```java
public static FileSystem getDefault()
```

Returns the default `FileSystem`. The default file system creates
 objects that provide access to the file systems accessible to the Java
 virtual machine. The working directory of the file system is
 the current user directory, named by the system property `user.dir`.
 This allows for interoperability with the `java.io.File java.io.File`
 class.

 

 The first invocation of any of the methods defined by this class
 locates the default `FileSystemProvider provider` object. Where the
 system property `java.nio.file.spi.DefaultFileSystemProvider` is
 not defined then the default provider is a system-default provider that
 is invoked to create the default file system.

 

 If the system property `java.nio.file.spi.DefaultFileSystemProvider`
 is defined then it is taken to be a list of one or more fully-qualified names
 of concrete provider classes identified by the URI scheme `"file"`.
 If the property is a list of more than one name then the names are separated
 by a comma character. Each provider class is a `public` class with a
 `public` constructor that has one formal parameter of type `FileSystemProvider`. If the provider class is in a named module then the module
 exports the package containing the provider class to at least `java.base`.
 Each provider class is loaded, using the
 `getSystemClassLoader() default system class loader`,
 and instantiated by invoking the constructor. The providers are loaded and
 instantiated in the order they are listed in the property.
 If this process fails or a provider's scheme is not equal to `"file"`
 then an unspecified error is thrown. URI schemes are normally compared
 without regard to case but for the default provider, the scheme is
 required to be `"file"`. The first provider class is instantiated
 by invoking it with a reference to the system-default provider.
 The second provider class is instantiated by invoking it with a reference
 to the first provider instance. The third provider class is instantiated
 by invoking it with a reference to the second instance, and so on. The
 last provider to be instantiated becomes the default provider; its `getFileSystem` method is invoked with the URI `"file:///"` to
 get a reference to the default file system.

 

 Subsequent invocations of this method return the file system that was
 returned by the first invocation.

**返回**

- the default file system
