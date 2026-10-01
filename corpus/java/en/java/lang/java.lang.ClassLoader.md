---
id: "java-en-function-java-lang-classloader"
language: "java"
lang: "en"
category: "function"
name: "java.lang.ClassLoader"
title: "ClassLoader"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader

A class loader is an object that is responsible for loading classes. The
 class `ClassLoader` is an abstract class.  Given the binary name of a class, a class loader should attempt to
 locate or generate data that constitutes a definition for the class.  A
 typical strategy is to transform the name into a file name and then read a
 "class file" of that name from a file system.

 

 Every `java.lang.Class Class` object contains a `getClassLoader() reference` to the `ClassLoader` that defined
 it.

 

 `Class` objects for array classes are not created by class
 loaders, but are created automatically as required by the Java runtime.
 The class loader for an array class, as returned by `getClassLoader` is the same as the class loader for its element
 type; if the element type is a primitive type, then the array class has no
 class loader.

 

 Applications implement subclasses of `ClassLoader` in order to
 extend the manner in which the Java virtual machine dynamically loads
 classes.

 

 In addition to loading classes, a class loader is also responsible for
 locating resources. A resource is some data (a "`.class`" file,
 configuration data, or an image for example) that is identified with an
 abstract '/'-separated path name. Resources are typically packaged with an
 application or library so that they can be located by code in the
 application or library. In some cases, the resources are included so that
 they can be located by other libraries.

 

 The `ClassLoader` class uses a delegation model to search for
 classes and resources.  Each instance of `ClassLoader` has an
 associated parent class loader. When requested to find a class or
 resource, a `ClassLoader` instance will usually delegate the search
 for the class or resource to its parent class loader before attempting to
 find the class or resource itself.

 

 Class loaders that support concurrent loading of classes are known as
 `isRegisteredAsParallelCapable() parallel capable` class
 loaders and are required to register themselves at their class initialization
 time by invoking the `registerAsParallelCapable ClassLoader.registerAsParallelCapable`
 method. Note that the `ClassLoader` class is registered as parallel
 capable by default. However, its subclasses still need to register themselves
 if they are parallel capable.
 In environments in which the delegation model is not strictly
 hierarchical, class loaders need to be parallel capable, otherwise class
 loading can lead to deadlocks because the loader lock is held for the
 duration of the class loading process (see `loadClass
 loadClass` methods).

  Run-time Built-in Class Loaders

 The Java run-time has the following built-in class loaders:

 
 
- 

Bootstrap class loader.
     It is the virtual machine's built-in class loader, typically represented
     as `null`, and does not have a parent.
 
- 

`getPlatformClassLoader() Platform class loader`.
     The platform class loader is responsible for loading the
     platform classes.  Platform classes include Java SE platform APIs,
     their implementation classes and JDK-specific run-time classes that are
     defined by the platform class loader or its ancestors.
     The platform class loader can be used as the parent of a `ClassLoader`
     instance.
     

 To allow for upgrading/overriding of modules defined to the platform
     class loader, and where upgraded modules read modules defined to class
     loaders other than the platform class loader and its ancestors, then
     the platform class loader may have to delegate to other class loaders,
     the application class loader for example.
     In other words, classes in named modules defined to class loaders
     other than the platform class loader and its ancestors may be visible
     to the platform class loader. 
 
- 

`getSystemClassLoader() System class loader`.
     It is also known as application class loader and is distinct
     from the platform class loader.
     The system class loader is typically used to define classes on the
     application class path, module path, and JDK-specific tools.
     The platform class loader is the parent or an ancestor of the system class
     loader, so the system class loader can load platform classes by delegating
     to its parent.
 

 

 Normally, the Java virtual machine loads classes from the local file
 system in a platform-dependent manner.
 However, some classes may not originate from a file; they may originate
 from other sources, such as the network, or they could be constructed by an
 application.  The method `defineClass(String, byte[], int, int)
 defineClass` converts an array of bytes into an instance of class
 `Class`. Instances of this newly defined class can be created using
 `newInstance Class.newInstance`.

 

 The methods and constructors of objects created by a class loader may
 reference other classes.  To determine the class(es) referred to, the Java
 virtual machine invokes the `loadClass loadClass` method of
 the class loader that originally created the class.

 

 For example, an application could create a network class loader to
 download class files from a server.  Sample code might look like:

 
```

   ClassLoader loader&nbsp;= new NetworkClassLoader(host,&nbsp;port);
   Object main&nbsp;= loader.loadClass("Main", true).newInstance();
       &nbsp;.&nbsp;.&nbsp;.
 
```

 

 The network class loader subclass must define the methods `findClass findClass` and `loadClassData` to load a class
 from the network.  Once it has downloaded the bytes that make up the class,
 it should use the method `defineClass defineClass` to
 create a class instance.  A sample implementation is:

 
```

     class NetworkClassLoader extends ClassLoader {
         String host;
         int port;

         public Class findClass(String name) {
             byte[] b = loadClassData(name);
             return defineClass(name, b, 0, b.length);
         }

         private byte[] loadClassData(String name) {
             // load the class data from the connection
             &nbsp;.&nbsp;.&nbsp;.
         }
     }
 
```

  Binary names 

 

 Any class name provided as a `String` parameter to methods in
 `ClassLoader` must be a binary name as defined by
 The Java Language Specification.

 

 Examples of valid class names include:
 
```

   "java.lang.String"
   "javax.swing.JSpinner$DefaultEditor"
   "java.security.KeyStore$Builder$FileBuilder$1"
   "java.net.URLClassLoader$3$1"
 
```

 

 Any package name provided as a `String` parameter to methods in
 `ClassLoader` must be either the empty string (denoting an unnamed package)
 or a fully qualified name as defined by
 The Java Language Specification.

**参见**

- #resolveClass(Class)

> *Since 1.0*
