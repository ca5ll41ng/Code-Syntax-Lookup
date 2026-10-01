---
id: "java-en-function-codesource-implies"
language: "java"
lang: "en"
category: "function"
name: "CodeSource.implies"
signature: "public boolean implies(CodeSource codesource)"
title: "CodeSource.implies"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/CodeSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeSource.implies

```java
public boolean implies(CodeSource codesource)
```

Returns true if this `CodeSource` object "implies" the specified
 `CodeSource`.
 

 More specifically, this method makes the following checks.
 If any fail, it returns `false`. If they all succeed, it returns
 `true`.
 
 
-  codesource must not be null.
 
-  If this object's certificates are not null, then all
 of this object's certificates must be present in codesource's
 certificates.
 
-  If this object's location (getLocation()) is not null, then the
 following checks are made against this object's location and
 codesource's:
   
     
-   codesource's location must not be null.

     
-   If this object's location
           equals codesource's location, then return true.

     
-   This object's protocol (getLocation().getProtocol()) must be
           equal to codesource's protocol, ignoring case.

     
-   If this object's host (getLocation().getHost()) is not null,
           then the following checks are made in order:
           
           
-  If this object's host was initialized with a single IP
           address then one of codesource's IP addresses must be
           equal to this object's IP address.
           
-  If this object's host is a wildcard domain (such as
           *.example.com), then codesource's canonical host name
           (the name without any preceding *) must end with this object's
           canonical host name. For example, *.example.com implies
           *.foo.example.com.
           
-  If this object's host was not initialized with a single
           IP address, then one of this object's IP addresses must equal
           one of codesource's IP addresses or this object's
           canonical host name must equal codesource's canonical
           host name.
           

     
-   If this object's port (getLocation().getPort()) is not
           equal to -1 (that is, if a port is specified), it must equal
           codesource's port or default port
           (codesource.getLocation().getDefaultPort()).

     
-   If this object's file (getLocation().getFile()) doesn't equal
           codesource's file, then the following checks are made:
           If this object's file ends with "/-",
           then codesource's file must start with this object's
           file (exclusive the trailing "-").
           If this object's file ends with a "/*",
           then codesource's file must start with this object's
           file and must not have any further "/" separators.
           If this object's file doesn't end with a "/",
           then codesource's file must match this object's
           file with a '/' appended.

     
-   If this object's reference (getLocation().getRef()) is
           not null, it must equal codesource's reference.

   

 

 

 For example, the codesource objects with the following locations
 and `null` certificates all imply the codesource with the location
 `http://www.example.com/classes/foo.jar`
 and `null` certificates:
 
```

     http:
     http://*.example.com/classes/*
     http://www.example.com/classes/-
     http://www.example.com/classes/foo.jar
 
```

 Note that if this `CodeSource` has a `null` location and a
 `null` certificate chain, then it implies every other
 `CodeSource`.

**参数**

- **codesource** — `CodeSource` to compare against.

**返回**

- `true` if the specified codesource is implied by this codesource, `false` if not.
