---
id: "en-php-function-com-construct"
language: "php"
lang: "en"
category: "function"
name: "com::__construct"
title: "com class constructor"
signature: "public com::__construct(string $module_name, array|string|null $server_name = null, int $codepage = CP_ACP, string $typelib = \"\")"
module: "com"
source_url: "https://www.php.net/manual/en/com.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# com class constructor

## Description

```php
public com::__construct(string $module_name, array|string|null $server_name = null, int $codepage = CP_ACP, string $typelib = "")
```

Constructs a new com object.

## Parameters

- **`$module_name`** — Can be a ProgID, Class ID or Moniker that names the component to load. — A ProgID is typically the application or DLL name, followed by a period, followed by the object name. e.g: `Word.Application`. — A Class ID is the UUID that uniquely identifies a given class. — A Moniker is a special form of naming, similar in concept to a URL scheme, that identifies a resource and specifies how it should be loaded. As an example, you could load up Word and get an object representing a word document by specifying the full path to the word document as the module name, or you can use `LDAP:` as a moniker to use the ADSI interface to LDAP.
- **`$server_name`** — The name of the DCOM server on which the component should be loaded and run. If `null`, the object is run using the default for the application. The default is typically to run it on the local machine, although the administrator might have configured the application to launch on a different machine. — If a non-`null` value is specified for server, PHP will refuse to load the object unless the com.allow_dcom php.ini option is set to `true`. — If `$server_name` is an array, it should contain the following elements (case sensitive!). Note that they are all optional (although you need to specify both Username and Password together); if you omit the Server setting, the default server will be used (as mentioned above), and the instantiation of the object will not be affected by the com.allow_dcom php.ini directive. | key | type | description | | --- | --- | --- | | Server | string | The name of the server. | | Username | string | The username to connect as. | | Password | string | The password for `Username`. | | Domain | string | The domain of `server`. | | Flags | integer | One or more of the following constants, logically OR'd together: `CLSCTX_INPROC_SERVER`, `CLSCTX_INPROC_HANDLER`, `CLSCTX_LOCAL_SERVER`, `CLSCTX_REMOTE_SERVER`, `CLSCTX_SERVER` and `CLSCTX_ALL`. The default value if not specified here is `CLSCTX_SERVER` if you also omit `Server`, or `CLSCTX_REMOTE_SERVER` if you do specify a server. You should consult the Microsoft documentation for CoCreateInstance for more information on the meaning of these constants; you will typically never have to use them. |
- **`$codepage`** — Specifies the codepage that is used to convert strings to unicode-strings and vice versa. The conversion is applied whenever a PHP string is passed as a parameter or returned from a method of this COM object. The code page is sticky, which means that it will propagate to objects and variants returned from the object. — Possible values are `CP_ACP` (use system default ANSI code page - the default if this parameter is omitted), `CP_MACCP`, `CP_OEMCP`, `CP_SYMBOL`, `CP_THREAD_ACP` (use codepage/locale set for the current executing thread), `CP_UTF7` and `CP_UTF8`. You may also use the number for a given codepage; consult the Microsoft documentation for more details on codepages and their numeric values.
