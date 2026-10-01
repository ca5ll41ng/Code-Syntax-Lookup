---
id: "java-en-function-java-lang-class"
language: "java"
lang: "en"
category: "function"
name: "java.lang.Class"
title: "Class"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class

Instances of the class `Class` represent classes and
 interfaces in a running Java application. An enum class and a record
 class are kinds of class; an annotation interface is a kind of
 interface. Every array also belongs to a class that is reflected as
 a `Class` object that is shared by all arrays with the same
 element type and number of dimensions.  The primitive Java types
 (`boolean`, `byte`, `char`, `short`, `int`, `long`, `float`, and `double`), and the
 keyword `void` are also represented as `Class` objects.

 

 `Class` has no public constructor. Instead a `Class`
 object is constructed automatically by the Java Virtual Machine when
 a class is derived from the bytes of a `class` file through
 the invocation of one of the following methods:
 
 
-  `defineClass(String, byte[], int, int) ClassLoader::defineClass`
 
-  `defineClass(byte[])
      java.lang.invoke.MethodHandles.Lookup::defineClass`
 
-  `defineHiddenClass(byte[], boolean, MethodHandles.Lookup.ClassOption...)
      java.lang.invoke.MethodHandles.Lookup::defineHiddenClass`
 

 

 The methods of class `Class` expose many characteristics of a
 class or interface. Most characteristics are derived from the `class`
 file that the class loader passed to the Java Virtual Machine or
 from the `class` file passed to `Lookup::defineClass`
 or `Lookup::defineHiddenClass`.
 A few characteristics are determined by the class loading environment
 at run time, such as the module returned by `getModule`.

 

 The following example uses a `Class` object to print the
 class name of an object:

 {@snippet lang="java" :
 void printClassName(Object obj) {
     System.out.println("The class of " + obj +
                        " is " + obj.getClass().getName());
 }}

 It is also possible to get the `Class` object for a named
 class or interface (or for `void`) using a class literal
 (JLS {@jls 15.8.2}).
 For example:

 {@snippet lang="java" :
 System.out.println("The name of class Foo is: " + Foo.class.getName()); // @highlight substring="Foo.class"
 }

 

 Some methods of class `Class` expose whether the declaration of
 a class or interface in Java source code was enclosed within
 another declaration. Other methods describe how a class or interface
 is situated in a {@index "nest"}. A nest is a set of
 classes and interfaces, in the same run-time package, that
 allow mutual access to their `private` members.
 The classes and interfaces are known as {@index "nestmates"}
 (JVMS {@jvms 4.7.29}).
 One nestmate acts as the
 nest host (JVMS {@jvms 4.7.28}), and enumerates the other nestmates which
 belong to the nest; each of them in turn records it as the nest host.
 The classes and interfaces which belong to a nest, including its host, are
 determined when
 `class` files are generated, for example, a Java compiler
 will typically record a top-level class as the host of a nest where the
 other members are the classes and interfaces whose declarations are
 enclosed within the top-level class declaration.

 

 Unless otherwise specified, methods in this class throw a
 `NullPointerException` when they are called with `null`
 or an array that contains `null` as an argument.

 Hidden Classes
 A class or interface created by the invocation of
 `defineHiddenClass(byte[], boolean, MethodHandles.Lookup.ClassOption...)
 Lookup::defineHiddenClass` is a `isHidden() hidden`
 class or interface.
 All kinds of class, including enum classes and record classes, may be
 hidden classes; all kinds of interface, including annotation interfaces,
 may be hidden interfaces.

 The `getName() name of a hidden class or interface` is
 not a `#binary-name binary name`,
 which means the following:
 
 
- A hidden class or interface cannot be referenced by the constant pools
     of other classes and interfaces.
 
- A hidden class or interface cannot be described in
     `java.lang.constant.ConstantDesc nominal form` by
     `describeConstable() Class::describeConstable`,
     `of(String) ClassDesc::of`, or
     `ofDescriptor(String) ClassDesc::ofDescriptor`.
 
- A hidden class or interface cannot be discovered by `forName Class::forName`
     or `loadClass(String, boolean) ClassLoader::loadClass`.
 

 A hidden class or interface is never an array class, but may be
 the element type of an array. In all other respects, the fact that
 a class or interface is hidden has no bearing on the characteristics
 exposed by the methods of class `Class`.

 Implicitly Declared Classes

 Conventionally, a Java compiler, starting from a source file for an
 implicitly declared class, say `HelloWorld.java`, creates a
 similarly-named `class` file, `HelloWorld.class`, where
 the class stored in that `class` file is named `"HelloWorld"`, matching the base names of the source and `class` files.

 For the `Class` object of an implicitly declared class `HelloWorld`, the methods to get the `getName name` and
 `getTypeName type name` return results
 equal to `"HelloWorld"`. The `getSimpleName
 simple name` of such an implicitly declared class is `"HelloWorld"` and
 the `getCanonicalName canonical name` is `"HelloWorld"`.

**参数**

- **the** — type of the class modeled by this `Class` object.  For example, the type of `String.class` is `Class`.  Use `Class<?>` if the class being modeled is unknown.

**参见**

- java.lang.ClassLoader#defineClass(byte[], int, int)

> *Since 1.0*
