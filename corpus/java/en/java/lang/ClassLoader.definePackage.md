---
id: "java-en-function-classloader-definepackage"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.definePackage"
signature: "protected Package definePackage(String name, String specTitle, String specVersion, String specVendor, String implTitle, String implVersion, String implVendor, URL sealBase)"
title: "ClassLoader.definePackage"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.definePackage

```java
protected Package definePackage(String name, String specTitle, String specVersion, String specVendor, String implTitle, String implVersion, String implVendor, URL sealBase)
```

Defines a package by name in this `ClassLoader`.
 

 Package names must be unique within a class loader and
 cannot be redefined or changed once created.
 

 If a class loader wishes to define a package with specific properties,
 such as version information, then the class loader should call this
 `definePackage` method before calling `defineClass`.
 Otherwise, the
 `defineClass(String, byte[], int, int, ProtectionDomain) defineClass`
 method will define a package in this class loader corresponding to the package
 of the newly defined class; the properties of this defined package are
 specified by `Package`.

 A class loader that wishes to define a package for classes in a JAR
 typically uses the specification and implementation titles, versions, and
 vendors from the JAR's manifest. If the package is specified as
 `SEALED sealed` in the JAR's manifest,
 the `URL` of the JAR file is typically used as the `sealBase`.
 If classes of package `'p'` defined by this class loader
 are loaded from multiple JARs, the `Package` object may contain
 different information depending on the first class of package `'p'`
 defined and which JAR's manifest is read first to explicitly define
 package `'p'`.

 

 It is strongly recommended that a class loader does not call this
 method to explicitly define packages in named modules; instead,
 the package will be automatically defined when a class is `defineClass(String, byte[], int, int, ProtectionDomain) being defined`.
 If it is desirable to define `Package` explicitly, it should ensure
 that all packages in a named module are defined with the properties
 specified by `Package`.  Otherwise, some `Package` objects
 in a named module may be for example sealed with different seal base.

**参数**

- **name** — The package name
- **specTitle** — The specification title
- **specVersion** — The specification version
- **specVendor** — The specification vendor
- **implTitle** — The implementation title
- **implVersion** — The implementation version
- **implVendor** — The implementation vendor
- **sealBase** — If not `null`, then this package is sealed with respect to the given code source `java.net.URL URL` object.  Otherwise, the package is not sealed.

**返回**

- The newly defined `Package` object

**异常**

- **NullPointerException** — if `name` is `null`.
- **IllegalArgumentException** — if a package of the given `name` is already defined by this class loader

**参见**

- The JAR File Specification: Package Sealing

> *Since 1.2*
