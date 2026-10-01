---
id: "en-php-guide-uopz-constants"
language: "php"
lang: "en"
category: "guide"
name: "uopz.constants"
title: "Predefined Constants"
module: "uopz"
source_url: "https://www.php.net/manual/en/uopz.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

The following opcodes are defined as constants by uopz before 5.0.0:

- **`ZEND_EXIT` (`int`)** — Invoked by exit() and die(), receives no arguments. Return boolean `true` to exit, `false` to continue
- **`ZEND_NEW` (`int`)** — Invoked by object construction, receives the class of object being created as the only argument
- **`ZEND_THROW` (`int`)** — Invoked by the throw construct, receives the class of exception being thrown as the only argument
- **`ZEND_FETCH_CLASS` (`int`)** — Invoked upon composure, receives the class the name of the class being fetched as the only argument
- **`ZEND_ADD_TRAIT` (`int`)** — Invoked upon composure, receives the class the trait is being added to as the first argument, and the name of the trait as the second argument
- **`ZEND_ADD_INTERFACE` (`int`)** — Invoked upon composure, receives the class the interface is being added to as the first argument, and the name of the interface as the second argument
- **`ZEND_INSTANCEOF` (`int`)** — Invoked by instanceof operator, receives the object being verified as the first argument, and the name of the class which that object should be as the second argument

The following constants control the VM's behaviour after a user handler is invoked, be extremely careful! These constants are removed as of uopz 5.0.0.

- **`ZEND_USER_OPCODE_CONTINUE` (`int`)** — Advance 1 opcode and continuue
- **`ZEND_USER_OPCODE_ENTER` (`int`)** — Enter into new op_array without recursion
- **`ZEND_USER_OPCODE_LEAVE` (`int`)** — Return to calling op_array within the same executor
- **`ZEND_USER_OPCODE_DISPATCH` (`int`)** — Dispatch to original opcode handler
- **`ZEND_USER_OPCODE_DISPATCH_TO` (`int`)** — Dispatch to a specific handler (OR'd with ZEND opcode constant)
- **`ZEND_USER_OPCODE_RETURN` (`int`)** — Exit from executor (return from function)

The following modifiers are registered as constants by uopz

- **`ZEND_ACC_PUBLIC` (`int`)** — Mark function as public, the default
- **`ZEND_ACC_PROTECTED` (`int`)** — Mark function as protected
- **`ZEND_ACC_PRIVATE` (`int`)** — Mark function as private
- **`ZEND_ACC_STATIC` (`int`)** — Mark function as static
- **`ZEND_ACC_FINAL` (`int`)** — Mark function as final
- **`ZEND_ACC_ABSTRACT` (`int`)** — Mark function as abstract
- **`ZEND_ACC_CLASS` (`int`)** — Dummy registered for consistency, the default kind of class entry. Removed as of uopz 5.0.0.
- **`ZEND_ACC_INTERFACE` (`int`)** — Mark class as interface. Removed as of uopz 5.0.0.
- **`ZEND_ACC_TRAIT` (`int`)** — Mark class as trait. Removed as of uopz 5.0.0.
- **`ZEND_ACC_FETCH` (`int`)** — Used for getting flags only. Removed as of uopz 5.0.0.
