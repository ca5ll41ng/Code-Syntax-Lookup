---
id: "en-php-guide-win32service-setup"
language: "php"
lang: "en"
category: "guide"
name: "win32service.setup"
title: "Getting Started"
module: "win32service"
source_url: "https://www.php.net/manual/en/win32service.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

{{{ Requirements 

## Requirements

The versions of Windows supported are the same as the Visual C++ redistributable package used to build PHP.

 }}} 

 {{{ Installation 

## Installation

Information for installing this PECL extension may be found in the manual chapter titled Installation of PECL extensions. Additional information such as new releases, downloads, source files, maintainer information, and a CHANGELOG, can be located here: [win32service](win32service)

 }}} 

## Security consideration

This extension needs administrator privileges for some actions such as create, delete, start, stop, pause and continue. This requirement can cause an elevation of privileges if the service control is available from the web interface or remote control.

The ACL on the service can be set after adding it into SCM to delegate the current administration tasks to a non administrator account or service account.

As of Win32Service 1.1.0, service rights can be managed with PHP. The actual ACLs can be read with `win32_read_all_rights_access_service()`, an access or deny right can be added with `win32_add_right_access_service()`, or an access right can be removed with `win32_remove_right_access_service()`.

It is recommended to update to Win32Service 1.1.0. For further instructions to manage rights without the extension (or a version prior to 1.1.0), see the [Microsoft Knowledge Base]().
