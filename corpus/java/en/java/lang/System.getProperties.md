---
id: "java-en-function-system-getproperties"
language: "java"
lang: "en"
category: "function"
name: "System.getProperties"
signature: "public static Properties getProperties()"
title: "System.getProperties"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.getProperties

```java
public static Properties getProperties()
```

Determines the current system properties.
 

 The current set of system properties for use by the
 `getProperty` method is returned as a
 `Properties` object. If there is no current set of
 system properties, a set of system properties is first created and
 initialized. This set of system properties includes a value
 for each of the following keys unless the description of the associated
 value indicates that the value is optional.
 
 Shows property keys and associated values
 
 Key
     Description of Associated Value
 
 
 {@systemProperty java.version}
     Java Runtime Environment version, which may be interpreted
     as a `Runtime.Version`
 {@systemProperty java.version.date}
     Java Runtime Environment version date, in ISO-8601 YYYY-MM-DD
     format, which may be interpreted as a `java.time.LocalDate`
 {@systemProperty java.vendor}
     Java Runtime Environment vendor
 {@systemProperty java.vendor.url}
     Java vendor URL
 {@systemProperty java.vendor.version}
     Java vendor version (optional) 
 {@systemProperty java.home}
     Java installation directory
 {@systemProperty java.vm.specification.version}
     Java Virtual Machine specification version, whose value is the
     `feature feature` element of the
     `version() runtime version`
 {@systemProperty java.vm.specification.vendor}
     Java Virtual Machine specification vendor
 {@systemProperty java.vm.specification.name}
     Java Virtual Machine specification name
 {@systemProperty java.vm.version}
     Java Virtual Machine implementation version which may be
     interpreted as a `Runtime.Version`
 {@systemProperty java.vm.vendor}
     Java Virtual Machine implementation vendor
 {@systemProperty java.vm.name}
     Java Virtual Machine implementation name
 {@systemProperty java.specification.version}
     Java Runtime Environment specification version, whose value is
     the `feature feature` element of the
     `version() runtime version`
 {@systemProperty java.specification.maintenance.version}
     Java Runtime Environment specification maintenance version,
     may be interpreted as a positive integer (optional, see below)
 {@systemProperty java.specification.vendor}
     Java Runtime Environment specification  vendor
 {@systemProperty java.specification.name}
     Java Runtime Environment specification  name
 {@systemProperty java.class.version}
     `latest() Latest`
     Java class file format version recognized by the Java runtime as `"MAJOR.MINOR"`
     where `major() MAJOR` and `MINOR`
     are both formatted as decimal integers
 {@systemProperty java.class.path}
     Java class path  (refer to
        `getSystemClassLoader` for details)
 {@systemProperty java.library.path}
     List of paths to search when loading libraries
 {@systemProperty java.io.tmpdir}
     Default temp file path
 {@systemProperty os.name}
     Operating system name
 {@systemProperty os.arch}
     Operating system architecture
 {@systemProperty os.version}
     Operating system version
 {@systemProperty file.separator}
     File separator ("/" on UNIX)
 {@systemProperty path.separator}
     Path separator (":" on UNIX)
 {@systemProperty line.separator}
     Line separator ("\n" on UNIX)
 {@systemProperty user.name}
     User's account name
 {@systemProperty user.home}
     User's home directory
 {@systemProperty user.dir}
     User's current working directory
 {@systemProperty native.encoding}
     Character encoding name derived from the host environment and
     the user's settings. Setting this system property on the command line
     has no effect.
 {@systemProperty stdin.encoding}
     Character encoding name for `in System.in`.
     The Java runtime can be started with the system property set to `UTF-8`.
     Starting it with the property set to another value results in unspecified behavior.
 {@systemProperty stdout.encoding}
     Character encoding name for `out System.out` and
     `console`.
     The Java runtime can be started with the system property set to `UTF-8`.
     Starting it with the property set to another value results in unspecified behavior.
 {@systemProperty stderr.encoding}
     Character encoding name for `err System.err`.
     The Java runtime can be started with the system property set to `UTF-8`.
     Starting it with the property set to another value results in unspecified behavior.
 
 
 

 The `java.specification.maintenance.version` property is
 defined if the specification implemented by this runtime at the
 time of its construction had undergone a maintenance
 release. When defined, its value identifies that
 maintenance release. To indicate the first maintenance release
 this property will have the value `"1"`, to indicate the
 second maintenance release this property will have the value
 `"2"`, and so on.
 

 Multiple paths in a system property value are separated by the path
 separator character of the platform.
 

 Additional locale-related system properties defined by the
 `#default_locale Default Locale` section in the `Locale`
 class description may also be obtained with this method.

 **Changing a standard system property may have unpredictable results
 unless otherwise specified.**
 Property values may be cached during initialization or on first use.
 Setting a standard property after initialization using `getProperties`,
 `setProperties`, `setProperty`, or
 `clearProperty` may not have the desired effect.

 In addition to the standard system properties, the system
 properties may include the following keys:
 
 Shows property keys and associated values
 
 Key
     Description of Associated Value
 
 
 {@systemProperty jdk.module.path}
     The application module path
 {@systemProperty jdk.module.upgrade.path}
     The upgrade module path
 {@systemProperty jdk.module.main}
     The module name of the initial/main module
 {@systemProperty jdk.module.main.class}
     The main class name of the initial module
 {@systemProperty file.encoding}
     The name of the default charset, defaults to `UTF-8`.
     The property may be set on the command line to the value
     `UTF-8` or `COMPAT`. If set on the command line to
     the value `COMPAT` then the value is replaced with the
     value of the `native.encoding` property during startup.
     Setting the property to a value other than `UTF-8` or
     `COMPAT` results in unspecified behavior.

**返回**

- the system properties

**参见**

- #setProperties
- java.util.Properties
