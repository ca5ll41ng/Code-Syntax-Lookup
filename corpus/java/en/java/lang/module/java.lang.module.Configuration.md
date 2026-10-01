---
id: "java-en-function-java-lang-module-configuration"
language: "java"
lang: "en"
category: "function"
name: "java.lang.module.Configuration"
title: "Configuration"
directive: "type"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/Configuration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Configuration

A configuration that is the result of 
 resolution or resolution with `#service-binding service binding`.

 

 A configuration encapsulates the readability graph that is the
 output of resolution. A readability graph is a directed graph whose vertices
 are of type `ResolvedModule` and the edges represent the readability
 amongst the modules. `Configuration` defines the `modules()
 modules` method to get the set of resolved modules in the graph. `ResolvedModule` defines the `reads` method to
 get the set of modules that a resolved module reads. The modules that are
 read may be in the same configuration or may be in `parents() parent`
 configurations. 

 

 Configuration defines the `resolve(ModuleFinder,List,ModuleFinder,Collection)
 resolve` method to resolve a collection of root modules, and the `resolveAndBind(ModuleFinder,List,ModuleFinder,Collection) resolveAndBind`
 method to do resolution with service binding. There are instance and
 static variants of both methods. The instance methods create a configuration
 with the receiver as the parent configuration. The static methods are for
 more advanced cases where there can be more than one parent configuration. 

 

 Each `java.lang.ModuleLayer layer` of modules in the Java virtual
 machine is created from a configuration. The configuration for the `boot() boot` layer is obtained by invoking `ModuleLayer.boot().configuration()`. The configuration for the boot layer
 will often be the parent when creating new configurations. 

 Optional Services

 Resolution requires that if a module `M` '`uses`' a service or
 '`provides`' an implementation of a service, then the service must be available
 to `M` at run time, either because `M` itself contains the service's
 package or because `M` reads another module that exports the service's package.
 However, it is sometimes desirable for the service's package to come from a module
 that is optional at run time, as indicated by the use of 'requires static' in this
 example:

 {@snippet :
     module M {
         requires static Y;
         uses p.S;
     }

     module Y {
        exports p;
     }
  }

 Resolution is resilient when a service's package comes from a module that is optional
 at run time. That is, if a module `M` has an optional dependency on some module
 `Y`, but `Y` is not needed at run time (`Y` might be observable but
 no-one reads it), then resolution at run time assumes that `Y` exported
 the service's package at compile time. Resolution at run time does not attempt to
 check whether `Y` is observable or (if it is observable) whether `Y`
 exports the service's package.

 

 The module that '`uses`' the service, or '`provides`' an implementation
 of it, may depend directly on the optional module, as `M` does above, or may
 depend indirectly on the optional module, as shown here:

  {@snippet :
     module M {
         requires X;
         uses p.S;
     }

     module X {
         requires static transitive Y;
     }

     module Y {
         exports p;
     }
 }

 In effect, the service that `M` '`uses`', or '`provides`' an
 implementation of, is optional if it comes from an optional dependency. In this case,
 code in `M` must be prepared to deal with the class or interface that denotes
 the service being unavailable at run time. This is distinct from the more regular
 case where the service is available but no implementations of the service are
 available.

  Example 

 

 The following example uses the `resolve(ModuleFinder,ModuleFinder,Collection) resolve` method to resolve a
 module named myapp with the configuration for the boot layer as the
 parent configuration. It prints the name of each resolved module and the
 names of the modules that each module reads. 

 {@snippet :
    Path dir1 = ..., dir2 = ..., dir3 = ...;
    ModuleFinder finder = ModuleFinder.of(dir1, dir2, dir3);
    Configuration parent = ModuleLayer.boot().configuration();
    Configuration cf = parent.resolve(finder, ModuleFinder.of(), Set.of("myapp"));
    cf.modules().forEach(m -> {
        System.out.format("%s -> %s%n",
            m.name(),
            m.reads().stream()
                .map(ResolvedModule::name)
                .collect(Collectors.joining(", ")));
    });
 }

**参见**

- java.lang.ModuleLayer

> *Since 9*
