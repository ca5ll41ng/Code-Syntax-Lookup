---
id: "java-en-function-processbuilder-environment"
language: "java"
lang: "en"
category: "function"
name: "ProcessBuilder.environment"
signature: "public Map<String,String> environment()"
title: "ProcessBuilder.environment"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessBuilder.environment

```java
public Map<String,String> environment()
```

Returns a string map view of this process builder's environment.

 Whenever a process builder is created, the environment is
 initialized to a copy of the current process environment (see
 `getenv`).  Subprocesses subsequently started by
 this object's `start` method will use this map as
 their environment.

 

The returned object may be modified using ordinary `java.util.Map Map` operations.  These modifications will be
 visible to subprocesses started via the `start`
 method.  Two `ProcessBuilder` instances always
 contain independent process environments, so changes to the
 returned map will never be reflected in any other
 `ProcessBuilder` instance or the values returned by
 `getenv System.getenv`.

 

If the system does not support environment variables, an
 empty map is returned.

 

The returned map does not permit null keys or values.
 Attempting to insert or query the presence of a null key or
 value will throw a `NullPointerException`.
 Attempting to query the presence of a key or value which is not
 of type `String` will throw a `ClassCastException`.

 

The behavior of the returned map is system-dependent.  A
 system may not allow modifications to environment variables or
 may forbid certain variable names or values.  For this reason,
 attempts to modify the map may fail with
 `UnsupportedOperationException` or
 `IllegalArgumentException`
 if the modification is not permitted by the operating system.

 

Since the external format of environment variable names and
 values is system-dependent, there may not be a one-to-one
 mapping between them and Java's Unicode strings.  Nevertheless,
 the map is implemented in such a way that environment variables
 which are not modified by Java code will have an unmodified
 native representation in the subprocess.

 

The returned map and its collection views may not obey the
 general contract of the `equals` and
 `hashCode` methods.

 

The returned map is typically case-sensitive on all platforms.

 

When passing information to a Java subprocess,
 system properties
 are generally preferred over environment variables.

**返回**

- this process builder's environment

**参见**

- Runtime#exec(String[],String[],java.io.File)
- System#getenv()
