---
id: "java-en-function-classloader-getsystemclassloader"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.getSystemClassLoader"
signature: "public static ClassLoader getSystemClassLoader()"
title: "ClassLoader.getSystemClassLoader"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.getSystemClassLoader

```java
public static ClassLoader getSystemClassLoader()
```

Returns the system class loader.  This is the default
 delegation parent for new `ClassLoader` instances, and is
 typically the class loader used to start the application.

 

 This method is first invoked early in the runtime's startup
 sequence, at which point it creates the system class loader. This
 class loader will be the context class loader for the main application
 thread (for example, the thread that invokes the `main` method of
 the main class).

 

 The default system class loader is an implementation-dependent
 instance of this class.

 

 If the system property "{@systemProperty java.system.class.loader}"
 is defined when this method is first invoked then the value of that
 property is taken to be the name of a class that will be returned as the
 system class loader. The class is loaded using the default system class
 loader and must define a public constructor that takes a single parameter
 of type `ClassLoader` which is used as the delegation parent. An
 instance is then created using this constructor with the default system
 class loader as the parameter.  The resulting class loader is defined
 to be the system class loader. During construction, the class loader
 should take great care to avoid calling `getSystemClassLoader()`.
 If circular initialization of the system class loader is detected then
 an `IllegalStateException` is thrown.

 examined until the VM is almost fully initialized. Code that executes
 this method during startup should take care not to cache the return
 value until the system is fully initialized.

 

 The name of the built-in system class loader is `"app"`.
 The system property "`java.class.path`" is read during early
 initialization of the VM to determine the class path.
 An empty value of "`java.class.path`" property is interpreted
 differently depending on whether the initial module (the module
 containing the main class) is named or unnamed:
 If named, the built-in system class loader will have no class path and
 will search for classes and resources using the application module path;
 otherwise, if unnamed, it will set the class path to the current
 working directory.

 

 JAR files on the class path may contain a `Class-Path` manifest
 attribute to specify dependent JAR files to be included in the class path.
 `Class-Path` entries must meet certain conditions for validity (see
 the 
 JAR File Specification for details).  Invalid `Class-Path`
 entries are ignored.  For debugging purposes, ignored entries can be
 printed to the console if the
 {@systemProperty jdk.net.URLClassPath.showIgnoredClassPathEntries} system
 property is set to `true`.

**返回**

- The system `ClassLoader`

**异常**

- **IllegalStateException** — If invoked recursively during the construction of the class loader specified by the "`java.system.class.loader`" property.
- **Error** — If the system property "`java.system.class.loader`" is defined but the named class could not be loaded, the provider class does not define the required constructor, or an exception is thrown by that constructor when it is invoked. The underlying cause of the error can be retrieved via the `getCause` method.
