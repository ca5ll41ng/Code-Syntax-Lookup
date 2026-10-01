---
id: "en-php-guide-luasandbox-setup"
language: "php"
lang: "en"
category: "guide"
name: "luasandbox.setup"
title: "Getting Started"
module: "luasandbox"
source_url: "https://www.php.net/manual/en/luasandbox.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

## Requirements

To use this extension, Lua 5.1 will need to be installed, available on the [Lua homepage]().

To make full use of the timer features, LuaSandbox should be installed on Linux.

If FreeBSD or Mac OS X is used, only real (wall-clock) time is supported, the functions purporting to return CPU time will actually return wall clock time.

If Windows is used, no timer functions will be supported. The time limits will be inoperable.

## Installation

If the operating system is Debian 10 or later, or Ubuntu 18.04 or later, then LuaSandbox should typically be installed from the package `php-luasandbox`:

```shell


sudo apt-get install php-luasandbox

   
```

To install LuaSandbox using [PIE](), run the following command:

```shell


pie install wikimedia/luasandbox

   
```

> Old releases can be found in the [LuaSandbox PECL package](luasandbox).
