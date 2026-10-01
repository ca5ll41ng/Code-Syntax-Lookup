---
id: "java-en-function-module-getresourceasstream"
language: "java"
lang: "en"
category: "function"
name: "Module.getResourceAsStream"
signature: "public InputStream getResourceAsStream(String name) throws IOException"
title: "Module.getResourceAsStream"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Module.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Module.getResourceAsStream

```java
public InputStream getResourceAsStream(String name) throws IOException
```

Returns an input stream for reading a resource in this module.
 The `name` parameter is a `'/'`-separated path name that
 identifies the resource. As with `getResourceAsStream
 Class.getResourceAsStream`, this method delegates to the module's class
 loader `findResource(String,String)
 findResource` method, invoking it with the module name
 (or `null` when the module is unnamed) and the name of the
 resource. If the resource name has a leading slash then it is dropped
 before delegation.

 

 A resource in a named module may be encapsulated so that
 it cannot be located by code in other modules. Whether a resource can be
 located or not is determined as follows: 

 
     
-  If the resource name ends with  "`.class`" then it is not
     encapsulated. 

     
-  A package name is derived from the resource name. If
     the package name is a `getPackages() package` in the
     module then the resource can only be located by the caller of this
     method when the package is `isOpen(String,Module) open`
     to at least the caller's module. If the resource is not in a
     package in the module then the resource is not encapsulated. 
 

 

 In the above, the package name for a resource is derived
 from the subsequence of characters that precedes the last `'/'` in
 the name and then replacing each `'/'` character in the subsequence
 with `'.'`. A leading slash is ignored when deriving the package
 name. As an example, the package name derived for a resource named
 "`a/b/c/foo.properties`" is "`a.b.c`". A resource name
 with the name "`META-INF/MANIFEST.MF`" is never encapsulated
 because "`META-INF`" is not a legal package name. 

 

 This method returns `null` if the resource is not in this module
 or the resource is encapsulated and cannot be located by the caller.

**参数**

- **name** — The resource name

**返回**

- An input stream for reading the resource or `null`

**异常**

- **IOException** — If an I/O error occurs

**参见**

- Class#getResourceAsStream(String)
