---
id: "en-php-guide-runkit7-constants"
language: "php"
lang: "en"
category: "guide"
name: "runkit7.constants"
title: "Predefined Constants"
module: "runkit7"
source_url: "https://www.php.net/manual/en/runkit7.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`RUNKIT7_IMPORT_FUNCTIONS` (`int`)** — `runkit7_import()` flag indicating that normal functions should be imported from the specified file.
- **`RUNKIT7_IMPORT_CLASS_METHODS` (`int`)** — `runkit7_import()` flag indicating that class methods should be imported from the specified file.
- **`RUNKIT7_IMPORT_CLASS_CONSTS` (`int`)** — `runkit7_import()` flag indicating that class constants should be imported from the specified file.
- **`RUNKIT7_IMPORT_CLASS_PROPS` (`int`)** — `runkit7_import()` flag indicating that class standard properties should be imported from the specified file.
- **`RUNKIT7_IMPORT_CLASS_STATIC_PROPS` (`int`)** — `runkit7_import()` flag indicating that class static properties should be imported from the specified file. Available since Runkit 1.0.1.
- **`RUNKIT7_IMPORT_CLASSES` (`int`)** — `runkit7_import()` flag representing a bitwise OR of the `RUNKIT7_IMPORT_CLASS_{*}` constants.
- **`RUNKIT7_IMPORT_OVERRIDE` (`int`)** — `runkit7_import()` flag indicating that if any of the imported functions, methods, constants, or properties already exist, they should be replaced with the new definitions. If this flag is not set, then any imported definitions which already exist will be discarded.
- **`RUNKIT7_ACC_RETURN_REFERENCE` (`int`)** — Include this flag to make the function or method being created or redeclared return a reference.
- **`RUNKIT7_ACC_PUBLIC` (`int`)** — Flag for `runkit7_method_add()` and `runkit7_method_redefine()` to make the method public.
- **`RUNKIT7_ACC_PROTECTED` (`int`)** — Flag for `runkit7_method_add()` and `runkit7_method_redefine()` to make the method protected.
- **`RUNKIT7_ACC_PRIVATE` (`int`)** — Flag for `runkit7_method_add()` and `runkit7_method_redefine()` to make the method private.
- **`RUNKIT7_ACC_STATIC` (`int`)** — Flag for `runkit7_method_add()` and `runkit7_method_redefine()` to make the method static.
- **`RUNKIT7_FEATURE_MANIPULATION` (`int`)** — Equal to 1 if runtime manipulation is enabled, and 0 otherwise.
- **`RUNKIT7_FEATURE_SUPERGLOBALS` (`int`)** — Equal to 1 if custom superglobals are enabled, and 0 otherwise.
- **`RUNKIT7_FEATURE_SANDBOX` (`int`)** — Always 0, it's impractical to implement the sandbox feature in php 7.
