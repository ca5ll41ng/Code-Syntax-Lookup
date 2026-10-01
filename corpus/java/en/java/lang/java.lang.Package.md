---
id: "java-en-function-java-lang-package"
language: "java"
lang: "en"
category: "function"
name: "java.lang.Package"
title: "Package"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Package.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Package

Represents metadata about a run-time package associated with a class loader.
 Metadata includes annotations, versioning, and sealing.
 

 Annotations for the run-time package are read from `package-info.class`
 at the same code source as classes in the run-time package.
 

 The set of classes that make up the run-time package may implement a
 particular specification. The specification title, version, and vendor
 (indicating the owner/maintainer of the specification) can be provided
 when the `Package` is defined. An application can ask if the
 `Package` is compatible with a particular specification version
 by using the `isCompatibleWith Package.isCompatibleWith`
 method. In addition, information about the actual classes that make up the
 run-time package can be provided when the `Package` is defined.
 This information consists of an implementation title, version, and vendor
 (indicating the supplier of the classes).
 

 A `Package` may be explicitly defined with
 the `definePackage(String, String, String, String,
 String, String, String, URL)` method.
 The caller supplies the specification and implementation titles, versions, and
 vendors. The caller also indicates whether the package is
 `SEALED sealed`.
 If a `Package` is not explicitly defined for a run-time package when
 a class in that run-time package is defined, then a `Package` is
 automatically defined by the class's defining class loader, as follows.
 

 A `Package` automatically defined for classes in a named module has
 the following properties:
 
 
- The name of the package is derived from the `getName() binary names`
     of the classes. Since classes in a named module must be in a named package,
     the derived name is never empty.
 
- The package is sealed with the `location()
     module location` as the code source, if known.
 
- The specification and implementation titles, versions, and vendors
     are unspecified.
 
- Any annotations on the package are read from `package-info.class`
     as specified above.
 

 

 A `Package` automatically defined for classes in an unnamed module
 has the following properties:
 
 
- The name of the package is either `""` (for classes in an unnamed package)
     or derived from the `getName() binary names` of the classes
     (for classes in a named package).
 
- The package is not sealed.
 
- The specification and implementation titles, versions, and vendors
     are unspecified.
 
- Any annotations on the package are read from `package-info.class`
     as specified above.
 

 

 A `Package` can be obtained with the `getPackage
 Package.getPackage` and `getDefinedPackage
 ClassLoader.getDefinedPackage` methods.
 Every `Package` defined by a class loader can be obtained
 with the `getPackages Package.getPackages` and
 `getDefinedPackages` methods.

 The builtin class loaders
 do not explicitly define `Package` objects for packages in
 named modules.  Instead those packages are automatically defined
 and have no specification and implementation versioning information.

**参见**

- The JAR File Specification: Package Sealing
- ClassLoader#definePackage(String, String, String, String, String, String, String, URL)

> *Since 1.2*
