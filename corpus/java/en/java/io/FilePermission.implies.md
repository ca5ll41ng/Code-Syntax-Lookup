---
id: "java-en-function-filepermission-implies"
language: "java"
lang: "en"
category: "function"
name: "FilePermission.implies"
signature: "public boolean implies(Permission p)"
title: "FilePermission.implies"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilePermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilePermission.implies

```java
public boolean implies(Permission p)
```

Checks if this FilePermission object "implies" the specified permission.
 

 More specifically, this method returns true if:
 
 
-  p is an instanceof FilePermission,
 
-  p's actions are a proper subset of this
 object's actions, and
 
-  p's pathname is implied by this object's
      pathname. For example, "/tmp/*" implies "/tmp/foo", since
      "/tmp/*" encompasses all files in the "/tmp" directory,
      including the one named "foo".
 

 

 Precisely, a simple pathname implies another simple pathname
 if and only if they are equal. A simple pathname never implies
 a wildcard pathname. A wildcard pathname implies another wildcard
 pathname if and only if all simple pathnames implied by the latter
 are implied by the former. A wildcard pathname implies a simple
 pathname if and only if
 
     
- if the wildcard flag is "*", the simple pathname's path
     must be right inside the wildcard pathname's path.
     
- if the wildcard flag is "-", the simple pathname's path
     must be recursively inside the wildcard pathname's path.
 

 

 "<>" implies every other pathname. No pathname,
 except for "<>" itself, implies
 "<>".

 If `jdk.io.permissionsUseCanonicalPath` is `true`, a
 simple `cpath` is inside a wildcard `cpath` if and only if
 after removing the base name (the last name in the pathname's name
 sequence) from the former the remaining part is equal to the latter,
 a simple `cpath` is recursively inside a wildcard `cpath`
 if and only if the former starts with the latter.
 

 If `jdk.io.permissionsUseCanonicalPath` is `false`, a
 simple `npath` is inside a wildcard `npath` if and only if
 `simple_npath.relativize(wildcard_npath)` is exactly "..",
 a simple `npath` is recursively inside a wildcard `npath`
 if and only if `simple_npath.relativize(wildcard_npath)` is a
 series of one or more "..". This means "/-" implies "/foo" but not "foo".
 

 An invalid `FilePermission` does not imply any object except for
 itself. An invalid `FilePermission` is not implied by any object
 except for itself or a `FilePermission` on
 "<>" whose actions is a superset of this
 invalid `FilePermission`. Even if two `FilePermission`
 are created with the same invalid path, one does not imply the other.

**参数**

- **p** — the permission to check against.

**返回**

- `true` if the specified permission is not `null` and is implied by this object, `false` otherwise.
