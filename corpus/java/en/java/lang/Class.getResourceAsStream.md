---
id: "java-en-function-class-getresourceasstream"
language: "java"
lang: "en"
category: "function"
name: "Class.getResourceAsStream"
signature: "public InputStream getResourceAsStream(String name)"
title: "Class.getResourceAsStream"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getResourceAsStream

```java
public InputStream getResourceAsStream(String name)
```

Finds a resource with a given name.

 

 If this class is in a named `Module Module` then this method
 will attempt to find the resource in the module. This is done by
 delegating to the module's class loader `findResource`
 method, invoking it with the module name and the absolute name of the
 resource. Resources in named modules are subject to the rules for
 encapsulation specified in the `Module` `getResourceAsStream getResourceAsStream` method and so this
 method returns `null` when the resource is a
 non-"`.class`" resource in a package that is not open to the
 caller's module.

 

 Otherwise, if this class is not in a named module then the rules for
 searching resources associated with a given class are implemented by the
 defining `ClassLoader class loader` of the class.  This method
 delegates to this `Class` object's class loader.
 If this `Class` object was loaded by the bootstrap class loader,
 the method delegates to `getSystemResourceAsStream`.

 

 Before delegation, an absolute resource name is constructed from the
 given resource name using this algorithm:

 

 
-  If the `name` begins with a `'/'`
 ('&#92;u002f'), then the absolute name of the resource is the
 portion of the `name` following the `'/'`.

 
-  Otherwise, the absolute name is of the following form:

 
   `modified_package_name/name`
 

 

 Where the `modified_package_name` is the package name of this
 object with `'/'` substituted for `'.'`
 ('&#92;u002e').

**参数**

- **name** — name of the desired resource

**返回**

- A `java.io.InputStream` object; `null` if no resource with this name is found, or the resource is in a package that is not `isOpen(String, Module) open` to at least the caller module.

**参见**

- Module#getResourceAsStream(String)

> *Since 1.1*
