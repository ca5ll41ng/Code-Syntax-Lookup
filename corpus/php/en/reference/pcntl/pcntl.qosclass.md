---
id: "en-php-guide-enum-pcntl-qosclass"
language: "php"
lang: "en"
category: "guide"
name: "enum.pcntl-qosclass"
title: "The Pcntl\\QosClass Enum"
module: "pcntl"
source_url: "https://www.php.net/manual/en/enum.pcntl-qosclass.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Pcntl\QosClass Enum

Pcntl\QosClass

  Introduction  The `Pcntl\QosClass` enum is used to specify the user process priority with `pcntl_setqos_class()`.       Pcntl  `QosClass`  UserInteractive  Runs the process as the highest priority level.    UserInitiated  Runs the process at high priority level but below UserInteractive ones.    Default  Runs the process after all high-priority processes but before the low-priority ones.    Utility Pcntl\QosClass::Utility description   Background  Runs the process after all high-priority ones had ran their courses.
