---
id: "java-en-function-modulefinder-of"
language: "java"
lang: "en"
category: "function"
name: "ModuleFinder.of"
signature: "static ModuleFinder of(Path... entries)"
title: "ModuleFinder.of"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleFinder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleFinder.of

```java
static ModuleFinder of(Path... entries)
```

Returns a module finder that locates modules on the file system by
 searching a sequence of directories and/or packaged modules.

 Each element in the given array is one of:
 
     
- 

 A path to a directory of modules.
     
- 

 A path to the top-level directory of an
         exploded module. 
     
- 

 A path to a packaged module. 
 

 The module finder locates modules by searching each directory, exploded
 module, or packaged module in array index order. It finds the first
 occurrence of a module with a given name and ignores other modules of
 that name that appear later in the sequence.

 

 If an element is a path to a directory of modules then each entry in
 the directory is a packaged module or the top-level directory of an
 exploded module. It is an error if a directory contains more than one
 module with the same name. If an element is a path to a directory, and
 that directory contains a file named `module-info.class`, then the
 directory is treated as an exploded module rather than a directory of
 modules. 

  The module finder returned by this method
 supports modules packaged as JAR files. A JAR file with a `module-info.class` in its top-level directory, or in a versioned entry
 in a `isMultiRelease() multi-release`
 JAR file, is a modular JAR file and thus defines an explicit
 module. A JAR file that does not have a `module-info.class` in its
 top-level directory defines an automatic module, as follows:
 

 

     
- 

 If the JAR file has the attribute "`Automatic-Module-Name`"
     in its main manifest then its value is the `name() module name`. The module name is otherwise
     derived from the name of the JAR file. 

     
- 

 The `version() version`, and the
     module name when the attribute "`Automatic-Module-Name`" is not
     present, are derived from the file name of the JAR file as follows: 

     

         
- 

 The "`.jar`" suffix is removed. 

         
- 

 If the name matches the regular expression `"-(\\d+(\\.|$))"` then the module name will be derived from the
         subsequence preceding the hyphen of the first occurrence. The
         subsequence after the hyphen is parsed as a `ModuleDescriptor.Version Version` and ignored if it cannot be
         parsed as a `Version`. 

         
- 

 All non-alphanumeric characters (`[^A-Za-z0-9]`)
         in the module name are replaced with a dot (`"."`), all
         repeating dots are replaced with one dot, and all leading and
         trailing dots are removed. 

         
- 

 As an example, a JAR file named "`foo-bar.jar`" will
         derive a module name "`foo.bar`" and no version. A JAR file
         named "`foo-bar-1.2.3-SNAPSHOT.jar`" will derive a module
         name "`foo.bar`" and "`1.2.3-SNAPSHOT`" as the version.
         

     

     
- 

 The set of packages in the module is derived from the
     non-directory entries in the JAR file that have names ending in
     "`.class`". A candidate package name is derived from the name
     using the characters up to, but not including, the last forward slash.
     All remaining forward slashes are replaced with dot (`"."`). If
     the resulting string is a legal package name then it is assumed to be
     a package name. For example, if the JAR file contains the entry
     "`p/q/Foo.class`" then the package name derived is
     "`p.q`".

     
- 

 The contents of entries starting with `META-INF/services/` are assumed to be service configuration files
     (see `java.util.ServiceLoader`). If the name of a file
     (that follows `META-INF/services/`) is a legal class name
     then it is assumed to be the fully-qualified class name of a service
     type. The entries in the file are assumed to be the fully-qualified
     class names of provider classes. 

     
- 

 If the JAR file has a `Main-Class` attribute in its
     main manifest, its value is a legal class name, and its package is
     in the set of packages derived for the module, then the value is the
     module `mainClass() main class`. 

 

 

 If a `ModuleDescriptor` cannot be created (by means of the
 `ModuleDescriptor.Builder ModuleDescriptor.Builder` API) for an
 automatic module then `FindException` is thrown. This can arise
 when the value of the "`Automatic-Module-Name`" attribute is not a
 legal module name, a legal module name cannot be derived from the file
 name of the JAR file, where the JAR file contains a `.class` in
 the top-level directory of the JAR file, where an entry in a service
 configuration file is not a legal class name or its package name is not
 in the set of packages derived for the module. 

 

 In addition to JAR files, an implementation may also support modules
 that are packaged in other implementation specific module formats. If
 an element in the array specified to this method is a path to a directory
 of modules then entries in the directory that not recognized as modules
 are ignored. If an element in the array is a path to a packaged module
 that is not recognized then a `FindException` is thrown when the
 file is encountered. Paths to files that do not exist are always ignored.
 

 

 As with automatic modules, the contents of a packaged or exploded
 module may need to be scanned in order to determine the packages
 in the module. Whether `isHidden(Path)
 hidden files` are ignored or not is implementation specific and therefore
 not specified. If a `.class` file (other than `module-info.class`) is found in the top-level directory then it is
 assumed to be a class in the unnamed package and so `FindException`
 is thrown. 

 

 Finders created by this method are lazy and do not eagerly check
 that the given file paths are directories or packaged modules.
 Consequently, the `find` or `findAll` methods will only
 fail if invoking these methods results in searching a directory or
 packaged module and an error is encountered.

**参数**

- **entries** — A possibly-empty array of paths to directories of modules or paths to packaged or exploded modules

**返回**

- A `ModuleFinder` that locates modules on the file system
