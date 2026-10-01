---
id: "en-php-guide-wincache-win32build"
language: "php"
lang: "en"
category: "guide"
name: "wincache.win32build"
title: "Building for Windows"
module: "wincache"
source_url: "https://www.php.net/manual/en/wincache.win32build.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Building for Windows

## Prerequisites

Building WinCache extension will require:

1. PHP source code
2. PHP build environment
3. WinCache source code

For completing first two steps, follow the step-by-step guide for how to [build PHP on Windows]().

For getting the WinCache source code follow the instructions described in Downloading PECL extensions.

## Compiling and building

The following steps describe how to compile and build WinCache on Windows OS:

  Open a command prompt which is used to build PHP    Go to the root folder where PHP sources are present     Run the command: 
```cmd

cscript.exe win32\build\buildconf.js

      
```

      Run the command: 
```cmd

configure.bat --help

      
```

 The output will contain a new flag `--enable-wincache`.      Run the command: 
```cmd

configure.js [all options used to build PHP] --enable-wincache

      
```

 `--enable-wincache` is the only extra option which is required to ensure that WinCache extension gets built properly. This option will build WinCache and will statically link it with PHP dll. To build WinCache extension as a stand-alone DLL use the option `--enable-wincache=shared`.      Run the command: 
```cmd

nmake

      
```

    

## Verifying the build

The following steps describe how to verify that WinCache has been built correctly:

   Go to the folder where the PHP binaries are built      Run the command: 
```cmd

php.exe -n -d extension=php_wincache.dll -re wincache

      
```

 If WinCache has been built properly, the output of this command will list the INI directives and functions supported by WinCache.
