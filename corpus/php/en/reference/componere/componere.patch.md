---
id: "en-php-guide-class-componere-patch"
language: "php"
lang: "en"
category: "guide"
name: "class.componere-patch"
title: "The Componere\\Patch class"
module: "componere"
source_url: "https://www.php.net/manual/en/class.componere-patch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Componere\Patch class

Componere\Patch

   Introduction  The Patch class allows the programmer to change the type of an instance at runtime without registering a new Definition    When a Patch is destroyed it is reverted, so that instances that were patched during the lifetime of the Patch are restored to their formal type.      Class Synopsis   `Componere\Patch`    `final` `Componere\Patch`   `extends` `Componere\Abstract\Definition`    Constructors
