---
id: "java-en-function-java-lang-modulelayer"
language: "java"
lang: "en"
category: "function"
name: "java.lang.ModuleLayer"
title: "ModuleLayer"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ModuleLayer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleLayer

A layer of modules in the Java virtual machine.

 

 A layer is created from a graph of modules in a `Configuration`
 and a function that maps each module to a `ClassLoader`.
 Creating a layer informs the Java virtual machine about the classes that
 may be loaded from the modules so that the Java virtual machine knows which
 module that each class is a member of. 

 

 Creating a layer creates a `Module` object for each `ResolvedModule` in the configuration. For each resolved module that is
 `reads() read`, the `Module` `canRead reads` the corresponding run-time `Module`, which may
 be in the same layer or a `parents() parent` layer. 

 

 The `defineModulesWithOneLoader defineModulesWithOneLoader` and
 `defineModulesWithManyLoaders defineModulesWithManyLoaders` methods
 provide convenient ways to create a module layer where all modules are
 mapped to a single class loader or where each module is mapped to its own
 class loader. The `defineModules defineModules` method is for more
 advanced cases where modules are mapped to custom class loaders by means of
 a function specified to the method. Each of these methods has an instance
 and static variant. The instance methods create a layer with the receiver
 as the parent layer. The static methods are for more advanced cases where
 there can be more than one parent layer or where a `ModuleLayer.Controller Controller` is needed to control modules in the layer
 

 

 A Java virtual machine has at least one non-empty layer, the `boot() boot` layer, that is created when the Java virtual machine is
 started. The boot layer contains module `java.base` and is the only
 layer in the Java virtual machine with a module named "`java.base`".
 The modules in the boot layer are mapped to the bootstrap class loader and
 other class loaders that are 
 built-in into the Java virtual machine. The boot layer will often be
 the `parents() parent` when creating additional layers. 

 

 Each `Module` in a layer is created so that it `isExported(String) exports` and `isOpen(String) opens`
 the packages described by its `ModuleDescriptor`. Qualified exports
 (where a package is exported to a set of target modules rather than all
 modules) are reified when creating the layer as follows: 
 
     
-  If module `X` exports a package to `Y`, and if the
     runtime `Module` `X` reads `Module` `Y`, then
     the package is exported to `Module` `Y` (which may be in
     the same layer as `X` or a parent layer). 

     
-  If module `X` exports a package to `Y`, and if the
     runtime `Module` `X` does not read `Y` then target
     `Y` is located as if by invoking `findModule(String)
     findModule` to find the module in the layer or its parent layers. If
     `Y` is found then the package is exported to the instance of
     `Y` that was found. If `Y` is not found then the qualified
     export is ignored. 
 

 

 Qualified opens are handled in same way as qualified exports. 

 

 As when creating a `Configuration`,
 `isAutomatic() automatic` modules receive special
 treatment when creating a layer. An automatic module is created in the
 Java virtual machine as a `Module` that reads every unnamed `Module` in the Java virtual machine. 

 

 Unless otherwise specified, passing a `null` argument to a method
 in this class causes a `NullPointerException NullPointerException` to
 be thrown. 

  Example 

 

 This example creates a configuration by resolving a module named
 "`myapp`" with the configuration for the boot layer as the parent. It
 then creates a new layer with the modules in this configuration. All modules
 are defined to the same class loader. 

 {@snippet :
     ModuleFinder finder = ModuleFinder.of(dir1, dir2, dir3);
     ModuleLayer parent = ModuleLayer.boot();
     Configuration cf = parent.configuration()
                              .resolve(finder, ModuleFinder.of(), Set.of("myapp"));
     ClassLoader scl = ClassLoader.getSystemClassLoader();
     ModuleLayer layer = parent.defineModulesWithOneLoader(cf, scl);
     Class<?> c = layer.findLoader("myapp").loadClass("app.Main");
 }

**参见**

- Module#getLayer()

> *Since 9*
