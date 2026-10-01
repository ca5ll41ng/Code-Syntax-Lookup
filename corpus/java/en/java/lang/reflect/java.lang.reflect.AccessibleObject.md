---
id: "java-en-function-java-lang-reflect-accessibleobject"
language: "java"
lang: "en"
category: "function"
name: "java.lang.reflect.AccessibleObject"
title: "AccessibleObject"
directive: "type"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AccessibleObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessibleObject

The `AccessibleObject` class is the base class for `Field`,
 `Method`, and `Constructor` objects (known as reflected
 objects). It provides the ability to flag a reflected object as
 suppressing checks for Java language access control when it is used. This
 permits sophisticated applications with sufficient privilege, such as Java
 Object Serialization or other persistence mechanisms, to manipulate objects
 in a manner that would normally be prohibited.

 

 Java language access control prevents use of private members outside
 their top-level class; package access members outside their package; protected members
 outside their package or subclasses; and public members outside their
 module unless they are declared in an `isExported(String,Module)
 exported` package and the user `canRead reads` their module. By
 default, Java language access control is enforced (with one variation) when
 `Field`s, `Method`s, or `Constructor`s are used to get or
 set fields, to invoke methods, or to create and initialize new instances of
 classes, respectively. Every reflected object checks that the code using it
 is in an appropriate class, package, or module. The check when invoked by
 JNI code with no Java
 class on the stack only succeeds if the member and the declaring class are
 public, and the class is in a package that is exported to all modules. 

 

 The one variation from Java language access control is that the checks
 by reflected objects assume readability. That is, the module containing
 the use of a reflected object is assumed to read the module in which
 the underlying field, method, or constructor is declared. 

 

 Whether the checks for Java language access control can be suppressed
 (and thus, whether access can be enabled) depends on whether the reflected
 object corresponds to a member in an exported or open package
 (see `setAccessible`).

> *Since 1.2*
